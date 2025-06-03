import ArrowIcon from "@/components/icons/arrow";
import { DatePicker } from "@/components/date-picker";
import { ShowAge } from "@/components/show-age";

export default function Home() {
  return (
    <main className="max-w-[840px] rounded-2xl rounded-br-[250px] tabletL:rounded-br-[100px] mx-auto mt-20 bg-white p-14">
      <DatePicker />

      <div className="flex items-center justify-center  tabletL:mt-8 tabletL:relative">
        <hr className="bg-gray-600/10 h-[2px] w-full flex-1 tabletL:absolute tabletL:z-0" />
        <button
          type="submit"
          form="ageForm"
          className="bg-purple-600 z-10 p-6 tabletL:p-3 rounded-full flex items-center justify-center hover:bg-black transition-all"
          aria-label="calculate age"
        >
          <ArrowIcon />
        </button>
      </div>

      <div>
        <p className="font-extrabold  text-[clamp(38px,_8vw,_96px)] mb-2.5">
          <ShowAge temporalUnit="years" /> years
        </p>
        <p className="font-extrabold text-[clamp(38px,_8vw,_96px)] mb-2.5">
          <ShowAge temporalUnit="months" /> months
        </p>
        <p className="font-extrabold text-[clamp(38px,_8vw,_96px)] mb-2.5">
          <ShowAge temporalUnit="days" /> days
        </p>
      </div>
    </main>
  );
}
