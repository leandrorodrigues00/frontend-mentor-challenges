'use server'
import { CardFlags } from '@/components/CardFlags'
import { InputSearchCountryHome } from '@/components/InputSearchCountryHome'
import { SelectRegions } from '@/components/RadixSelectRegions'

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

export default async function Home() {
  const responseApiRegion = await fetch('http://localhost:3000/api/countries', {
    cache: 'no-store',
  })
  const dataApiRegion = await responseApiRegion.text()

  const selectedRegion: string | boolean = dataApiRegion

  const apiUrl = selectedRegion
    ? `https://restcountries.com/v3.1/region/${selectedRegion}?fields=name,capital,region,population,flags`
    : 'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags'

  const response = await fetch(apiUrl, {
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
    },
  })

  const countriesData: Array<CountriesProps> = await response.json()
  countriesData.sort((a, b) =>
    ('' + a.name.common).localeCompare(b.name.common),
  )

  const countries = countriesData
    .filter(
      (data: CountriesProps) =>
        !selectedRegion || data.region === selectedRegion,
    )
    .map((data: CountriesProps) => ({
      name: {
        common: data.name.common,
      },
      flags: {
        png: data.flags.png,
        svg: data.flags.svg,
        alt: data.flags.alt,
      },
      capital: data.capital,
      region: data.region,
      population: data.population,
    }))

  return (
    <main className="px-[4.68rem] pt-10 ]">
      <header className="flex justify-between">
        <InputSearchCountryHome />
        <SelectRegions />
      </header>

      <div className="mt-11 grid grid-cols-1 gap-y-12 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
        {countries.map((country) => (
          <CardFlags country={country} key={country.name.common} />
        ))}
      </div>
    </main>
  )
}
