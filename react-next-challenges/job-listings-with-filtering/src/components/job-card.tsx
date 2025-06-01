/* eslint-disable @next/next/no-img-element */

import { JobConfig } from "@/types";
import { cn } from "@/lib/utils";
import { JobCategoryList } from "@/components/job-category-list";

interface JobCardProps {
  jobInfo: JobConfig;
}

export function JobCard({ jobInfo }: JobCardProps) {
  return (
    <div
      className={cn(
        jobInfo.featured && "border-l-4 border-cyan-800",
        "laptop:flex-col relative mx-auto flex w-full  max-w-job rounded-lg bg-white px-10 py-8"
      )}
    >
      <img
        className="laptop:absolute laptop:h-[68px] laptop:w-[68px] laptop:-top-10 mr-6 h-[88px] w-[88px]"
        src={jobInfo.logo}
        alt="trocar depois"
      />

      <div className="laptop:space-y-2 laptop:my-2 flex flex-col justify-between">
        <header className="flex space-x-4">
          <p className="text-lg font-medium text-cyan-800">{jobInfo.company}</p>
          <div className="flex items-center  space-x-[10px] text-sm font-medium text-white">
            {jobInfo.new && (
              <span className=" rounded-full bg-cyan-800 px-2  py-[1px] text-center uppercase">
                New!
              </span>
            )}

            {jobInfo.featured && (
              <span className="rounded-full  bg-black px-2 py-[1px] uppercase">
                Featured
              </span>
            )}
          </div>
        </header>

        <h2 className="cursor-pointer text-xl font-medium transition-colors hover:text-cyan-800">
          {jobInfo.position}
        </h2>

        <footer className="flex">
          <span className="text-cyan-900 after:mx-5 after:opacity-50 after:content-['•']">
            {jobInfo.postedAt}
          </span>
          <span className="text-cyan-900 after:mx-5 after:opacity-50 after:content-['•']">
            {jobInfo.contract}
          </span>
          <span className="text-cyan-900">{jobInfo.location}</span>
        </footer>
      </div>

      <div className="laptop:ml-0 laptop:pt-4 laptop:border-t laptop:border-t-cyan-900 laptop:self-start ml-auto self-center">
        <JobCategoryList jobInfo={jobInfo} />
      </div>
    </div>
  );
}
