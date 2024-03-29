import { CardFlags } from '@/components/CardFlags'
import { InputSearchCountryHome } from '@/components/InputSearchCountryHome'
import { SelectRegions } from '@/components/RadixSelectRegions'
import Link from 'next/link'
import { cookies } from 'next/headers'

export interface CountriesProps {
  name: {
    common: string
  }
  flags: {
    png: string
    svg: string
    alt: string
  }
  capital: Array<string>
  region: string
  population: number
  cca3: string
}

export interface DataAPI {
  source: 'radixSelect' | 'InputSearch'
  region: string
}

async function getCountriesData(
  apiUrl: string,
  selectedRegion: string | boolean,
) {
  const response = await fetch(apiUrl, {
    cache: 'no-store',
  })

  if (!response.ok) {
    return []
  }

  const responseData: unknown = await response.json()

  const countriesData: Array<CountriesProps> = Array.isArray(responseData)
    ? responseData
    : []

  countriesData.sort((a, b) =>
    ('' + a.name.common).localeCompare(b.name.common),
  )

  const countries = countriesData
    .filter(
      (data: CountriesProps) =>
        !selectedRegion || data.region === selectedRegion,
    )
    .map(({ name, flags, capital, region, population, cca3 }) => ({
      name,
      flags,
      capital,
      region,
      population,
      cca3,
    }))

  return countries
}

export default async function Home() {
  // const responseApiCountries = await fetch(
  //   `${process.env.NEXT_PUBLIC_URL}/api/countries`,
  //   {
  //     cache: 'no-store',
  //   },
  // )
  // const { source, region }: DataAPI = await responseApiCountries.json()

  const { value: selectedRegionCookie } = cookies().get('regionCookie') ?? {}

  const { value: inputCountrySearch } = cookies().get('CountryNameCookie') ?? {}

  const selectedRegion: string | boolean = selectedRegionCookie || false

  const InputSearch: string | boolean = inputCountrySearch || false

  const apiUrl = InputSearch
    ? `https://restcountries.com/v3.1/name/${InputSearch}`
    : selectedRegion
    ? `https://restcountries.com/v3.1/region/${selectedRegion}?fields=name,capital,region,population,flags,cca3`
    : `https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3`

  const countries = await getCountriesData(apiUrl, selectedRegion)

  return (
    <main className="px-[4.68rem] pt-10 max-[580px]:px-3">
      <header className="flex justify-between gap-3 max-[600px]:flex-col max-[600px]:gap-8">
        <InputSearchCountryHome />
        <SelectRegions />
      </header>
      <div className="mt-11 grid grid-cols-1 gap-y-12 min-[680px]:grid-cols-2 min-[940px]:grid-cols-3 min-[1440px]:grid-cols-5 justify-items-center mb-10">
        {countries?.map((country) => (
          <Link href={`/country/${country.cca3}`} key={country.name.common}>
            <CardFlags country={country} />
          </Link>
        ))}
      </div>
    </main>
  )
}
