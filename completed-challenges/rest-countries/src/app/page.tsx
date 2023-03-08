'use server'
import { CardFlags } from '@/components/CardFlags'
import { InputSearchCountryHome } from '@/components/InputSearchCountryHome'
import { SelectRegions } from '@/components/RadixSelectRegions'
import Link from 'next/link'

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
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
    },
  })

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
    .map(({ name, flags, capital, region, population }) => ({
      name,
      flags,
      capital,
      region,
      population,
    }))

  return countries
}

export default async function Home() {
  const responseApiCountries = await fetch(
    'http://localhost:3000/api/countries',
    {
      cache: 'no-store',
    },
  )
  const { source, region }: DataAPI = await responseApiCountries.json()

  const selectedRegion: string | boolean =
    source === 'radixSelect' ? region : false

  const InputSearch: string | boolean =
    source === 'InputSearch' ? region : false

  const apiUrl = InputSearch
    ? `https://restcountries.com/v3.1/name/${InputSearch}`
    : selectedRegion
    ? `https://restcountries.com/v3.1/region/${selectedRegion}?fields=name,capital,region,population,flags`
    : 'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags'

  const countries = await getCountriesData(apiUrl, selectedRegion)

  return (
    <main className="px-[4.68rem] pt-10 ]">
      <header className="flex justify-between">
        <InputSearchCountryHome />
        <SelectRegions />
      </header>

      <div className="mt-11 grid grid-cols-1 gap-y-12 md:grid-cols-3 lg:grid-cols-5 justify-items-center mb-10">
        {countries?.map((country) => (
          <Link
            href={`/country/${country.name.common}`}
            key={country.name.common}
          >
            <CardFlags country={country} />
          </Link>
        ))}
      </div>
    </main>
  )
}
