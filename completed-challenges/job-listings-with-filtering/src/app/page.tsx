import { useStore } from "@/store";
import { JobCardClient } from "@/components/job-card-client";
import { StoreInitializer } from "@/components/store-initializer";

import data from "../data.json";

export default function Home() {
  //fetch API data and load store
  const response = data;
  const load = useStore.getState().load;
  load(response);

  const jobs = useStore.getState().jobs;
  if (!jobs) return;

  return (
    <main className="mx-auto max-w-app px-6 pb-32">
      <div className="laptop:space-y-14 laptop:mt-24 mt-[70px] space-y-6">
        <StoreInitializer jobs={jobs} />
        <JobCardClient />
      </div>
    </main>
  );
}
