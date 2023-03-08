import Image from 'next/image'
import { ButtonBack } from '../components/ButtonBack'

interface CountryProps {
  params: {
    id: string
  }
}

export default function Country({ params }: CountryProps) {
  return (
    <section className="px-[4.68rem] mt-28">
      <header className="flex justify-start">
        <nav>
          <ButtonBack />
        </nav>
      </header>

      <div className="flex max-w-full  justify-between mt-20">
        <div>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Flag_of_Belgium_%281830%29.svg"
            alt="teste"
            width={560}
            height={400}
          />
        </div>

        <div className="max-w-[37.5rem] w-full">
          <h1 className="font-bold text-4xl mb-11">{params.id}</h1>

          <div className="flex justify-between">
            <ul className="flex flex-col gap-2">
              <li>
                <span className="font-bold">Native Name:</span> Belgie
              </li>
              <li>
                <span className="font-bold">Population:</span> 11,319,511
              </li>
              <li>
                <span className="font-bold">Region:</span> Europe
              </li>
              <li>
                <span className="font-bold">Sub Region:</span> Western Europe
              </li>
              <li>
                <span className="font-bold">Capital:</span> Brussels
              </li>
            </ul>

            <ul className="flex flex-col gap-2 ">
              <li>
                <span className="font-bold">Top Level Domain:</span> .be
              </li>
              <li>
                <span className="font-bold">Currencies:</span> Euro
              </li>
              <li>
                <span className="font-bold">Languages: </span>
                Dutch,french,German
              </li>
            </ul>
          </div>

          <footer className="flex mt-20">
            <p className="font-bold">Border Countries:</p>
            <ul>
              <li>France</li>
              <li>Germany</li>
              <li>Netherlands</li>
            </ul>
          </footer>
        </div>
      </div>
    </section>
  )
}
