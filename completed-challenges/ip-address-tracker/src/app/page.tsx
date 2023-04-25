import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

export interface GeolocationApiResponse {
  ip: string;
  location: Location;
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
}

interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}

export interface mapCoordinatesProps {
  latitude: number;
  longitude: number;
}

export async function fetchData(searchTerms?: string | string[] | undefined) {
  let response: Response | undefined;
  const url = searchTerms
    ? `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.GEOLOCATION_API_KEY}&ipAddress=${searchTerms}`
    : `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.GEOLOCATION_API_KEY}`;

  try {
    response = await fetch(url);

    if (response.ok) {
      const json = (await response.json()) as GeolocationApiResponse;
      return json;
    } else {
      throw new Error(
        `Error fetching data from URL ${url}. Response status: ${response.status}`
      );
    }
  } catch (error) {
    if (error instanceof Error)
      console.error(
        `Error fetching data from URL ${url}. Message: ${error.message}`
      );
    return null;
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  let searchTerms = searchParams?.searchTerm;

  const apiData = await fetchData(searchTerms);

  let mapCoordinates: mapCoordinatesProps = {
    latitude: apiData ? apiData.location.lat : 51.505,
    longitude: apiData ? apiData.location.lng : -0.09,
  };

  return (
    <div>
      {/** @ts-expect-error  Asynn Server Component  */}
      <Header apiData={apiData} />

      <Main mapCoordinates={mapCoordinates} />
    </div>
  );
}
