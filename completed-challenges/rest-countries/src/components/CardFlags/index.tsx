import { CountriesProps } from '@/app/page'
import Image from 'next/image'

interface CardFlagsProps {
  country: CountriesProps
}

export function CardFlags({ country }: CardFlagsProps) {
  const PopulationNumber = country.population
  const formattedNumber = PopulationNumber.toLocaleString('en-US', {
    style: 'decimal',
  })

  return (
    <div className="flex flex-col  max-w-[15rem] w-full max-h-[305px] h-full rounded-lg bg-white">
      <Image
        className="rounded-t-lg max-h-[145px] max-w-[15rem]"
        src={country.flags.svg}
        width={240}
        height={145}
        alt={country.flags.alt}
      />

      <h2 className="text-lg mt-5 ml-5 font-extrabold">
        {country.name.common}
      </h2>

      <div className="mt-2 ml-5 pb-6 text-sm leading-normal">
        <p>
          <strong>Population:</strong> {formattedNumber}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital}
        </p>
      </div>
    </div>
  )
}
