import Image from 'next/image'
import Link from 'next/link'
import { ButtonBack } from '../components/ButtonBack'

interface CountryProps {
  params: {
    id: string
  }
}

interface CountryDataProps {
  name: {
    common: string
    nativeName: {
      [key: string]: {
        common: string
      }
    }
  }

  flags: {
    png: string
    svg: string
    alt: string
  }
  tld: Array<string>
  currencies: {
    [key: string]: {
      name: string
    }
  }

  capital: Array<string>
  region: string
  subregion: string
  population: number
  languages: {}
  borders: []
}

export async function generateMetadata({ params }: CountryProps) {
  return {
    title: `Country: ${params.id}`,
  }
}

export default async function Country({ params }: CountryProps) {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.id}`,
    {
      next: {
        revalidate: 60 * 60 * 24, // 24 hours
      },
    },
  )
  const countryData: Array<CountryDataProps> = await response.json()

  const formattedCountryData = countryData.map(
    ({
      name,
      population,
      region,
      subregion,
      capital,
      tld,
      currencies,
      languages,
      flags,
      borders,
    }) => ({
      name,
      population,
      region,
      subregion,
      capital,
      tld,
      currencies,
      languages,
      flags,
      borders,
    }),
  )

  const {
    capital,
    name,
    region,
    subregion,
    population,
    tld,
    flags,
    currencies,
    languages,
    borders,
  } = formattedCountryData[0]

  const formattedPopulationNumber = population.toLocaleString('en-US', {
    style: 'decimal',
  })

  const nativeName = name.nativeName
    ? Object.values(name.nativeName)[0].common
    : name.common

  const currencyName = currencies
    ? Object.values(currencies)[0].name
    : 'No currency'

  const languageNames = languages
    ? Object.values(languages).join(', ')
    : 'No languages'

  return (
    <section className="px-[4.68rem] mt-28 mb-16 max-lg:mt-12 max-[580px]:px-8">
      <header className="flex justify-start">
        <nav>
          <ButtonBack />
        </nav>
      </header>

      <div className="flex max-w-full justify-between mt-20 gap-5 max-lg:flex-col  max-lg:items-center">
        <div>
          <Image src={flags.svg} alt={flags.alt} width={560} height={400} />
        </div>

        <div className="max-w-[37.5rem] w-full  max-lg:mt-5">
          <h1 className="font-bold text-4xl mb-11">{name.common}</h1>

          <div className="flex justify-between gap-4 max-sm:flex-col max-sm:gap-12">
            <ul className="flex flex-col gap-2">
              <li>
                <span className="font-bold">Native Name:</span> {nativeName}
              </li>
              <li>
                <span className="font-bold">Population:</span>{' '}
                {formattedPopulationNumber}
              </li>
              <li>
                <span className="font-bold">Region:</span> {region}
              </li>
              <li>
                <span className="font-bold">Sub Region:</span> {subregion}
              </li>
              <li>
                <span className="font-bold">Capital:</span> {capital}
              </li>
            </ul>

            <ul className="flex flex-col gap-2 ">
              <li>
                <span className="font-bold">Top Level Domain:</span> {tld}
              </li>
              <li>
                <span className="font-bold">Currencies:</span> {currencyName}
              </li>
              <li>
                <span className="font-bold">Languages: </span>
                {languageNames}
              </li>
            </ul>
          </div>

          <footer className="flex items-center mt-20 max-lg:mt-8 max-sm:flex-col max-sm:items-start">
            <p className="font-bold">Border Countries:</p>
            <ul className="flex flex-wrap  ml-4 gap-3  max-sm:ml-0 max-sm:mt-3">
              {borders?.map((border, id) => (
                <li
                  key={id}
                  className="block px-3  py-1 shadow-4xl rounded-sm hover:bg-gray-300 transition-all dark:bg-[#2b3945]  dark:shadow-3xl"
                >
                  <Link href={`/country/${border}`}>{border}</Link>
                </li>
              ))}
            </ul>
          </footer>
        </div>
      </div>
    </section>
  )
}
