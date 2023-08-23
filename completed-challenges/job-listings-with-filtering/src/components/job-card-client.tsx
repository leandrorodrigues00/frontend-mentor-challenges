"use client";

import { useStore } from "@/store";
import { JobCard } from "@/components/job-card";

export function JobCardClient() {
  const jobList = useStore((state) => state.jobs);
  const categories = useStore((state) => state.categories);

  const filteredJobs = categories
    ? jobList?.filter((job) => {
        const roleMatch = !categories.role || job.role === categories.role;
        const levelMatch = !categories.level || job.level === categories.level;

        const languagesMatch =
          !categories.languages ||
          categories.languages.every((lang) => job.languages.includes(lang));

        const toolsMatch =
          !categories.tools ||
          categories.tools.every((tool) => job.tools.includes(tool));

        return roleMatch && levelMatch && languagesMatch && toolsMatch;
      })
    : jobList;

  return (
    <>{filteredJobs?.map((job) => <JobCard key={job.id} jobInfo={job} />)}</>
  );
}
