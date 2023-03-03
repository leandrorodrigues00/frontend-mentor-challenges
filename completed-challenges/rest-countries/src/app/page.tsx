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
  const response = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags',
    {
      next: {
        revalidate: 10, // 24 hours
      },
    },
  )
  const countries: Array<CountriesProps> = await response.json()
  countries.sort((a, b) => ('' + a.name.common).localeCompare(b.name.common))

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
