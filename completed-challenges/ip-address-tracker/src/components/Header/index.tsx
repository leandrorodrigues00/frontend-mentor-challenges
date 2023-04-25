import { GeolocationApiResponse } from "@/app/page";
import { IpAddressBar } from "./Components/IpAddressBar";

export async function Header({ apiData }: { apiData: GeolocationApiResponse }) {
  return (
    <header className="h-[17.5rem] bg-header-desktop bg-center flex items-start justify-center pt-3 md:pt-8">
      <div className="max-w-[1440px] w-full flex flex-col items-center mx-3">
        <p className="text-3xl md:text-4xl font-medium text-white mb-5 md:mb-9">
          IP Address Tracker
        </p>

        <IpAddressBar apiData={apiData} />
      </div>
    </header>
  );
}
