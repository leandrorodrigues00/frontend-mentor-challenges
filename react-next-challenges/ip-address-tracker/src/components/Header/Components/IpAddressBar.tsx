"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/Form";
import { GeolocationApiResponse } from "@/app/page";

import arrowRight from "../../../../public/icons/icon-arrow.svg";

const ipAddressSchema = z.object({
  IpAddress: z
    .string()
    .ip({ message: "Input correct IPv4 or IPv6 address." })
    .nonempty({ message: "You need to enter some IP number." }),
});

type IpAddressData = z.infer<typeof ipAddressSchema>;

export function IpAddressBar({
  apiData,
}: {
  apiData: GeolocationApiResponse | null;
}) {
  const router = useRouter();

  const ipAddressForm = useForm<IpAddressData>({
    resolver: zodResolver(ipAddressSchema),
  });

  const { handleSubmit } = ipAddressForm;

  function handleIpLocation(data: IpAddressData) {
    router.push(`/?searchTerm=${data.IpAddress}`);
  }

  return (
    <>
      <FormProvider {...ipAddressForm}>
        <form
          onSubmit={handleSubmit(handleIpLocation)}
          className="w-full max-w-lg flex"
        >
          <Form.Input
            name="IpAddress"
            placeholder="Search for any IP address or domain"
          />
          <button type="submit" className=" bg-black rounded-e-xl p-5">
            <Image src={arrowRight} alt="seta para direita" />
          </button>
        </form>
        <Form.ErrorMessage field="IpAddress" />

        {!apiData && (
          <p className="text-sm text-red-300 font-semibold mt-1">
            Error when getting data from server
          </p>
        )}
      </FormProvider>

      <div className="flex flex-col md:flex-row z-10 max-w-xs md:max-w-[69.375rem] w-full bg-white px-8 pt-[0.5rem] md:py-6 mt-4 md:mt-11 rounded-xl justify-around">
        <div>
          <p className="text-lg text-zinc-300">Ip address</p>
          <span className="inline-block mt-0 md:mt-5 mb-3 md:mb-0 text-base md:text-2xl font-bold">
            {apiData?.ip}
          </span>
        </div>

        <div className="hidden md:block bg-zinc-300 h-16 w-[1px] self-center" />

        <div>
          <p className="text-lg text-zinc-300 ">Location</p>
          <span className="inline-block mt-0 md:mt-5 mb-3 md:mb-0 text-base md:text-2xl font-bold  md:max-w-[11.875rem] w-full">
            {apiData?.location.city}, {apiData?.location.country},{" "}
            {apiData?.location.postalCode}
          </span>
        </div>

        <div className="hidden md:block bg-zinc-300 h-16 w-[1px] self-center" />

        <div>
          <p className="text-lg text-zinc-300">Timezone</p>
          <span className="inline-block mt-0 md:mt-5 mb-3 md:mb-0 text-base md:text-2xl font-bold">
            UTC {apiData?.location.timezone}
          </span>
        </div>

        <div className="hidden md:block bg-zinc-300 h-16 w-[1px] self-center" />

        <div>
          <p className="text-lg text-zinc-300">ISP</p>
          <span className="inline-block mt-0 md:mt-5 mb-3 md:mb-0 text-base md:text-2xl font-bold md:max-w-[11.875rem] w-full">
            {apiData?.isp}
          </span>
        </div>
      </div>
    </>
  );
}
