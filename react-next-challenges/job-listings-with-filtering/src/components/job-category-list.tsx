"use client";

import { JobConfig } from "@/types";
import { useStore } from "@/store";

interface JobCategoryListProps {
  jobInfo: JobConfig;
}

export function JobCategoryList({ jobInfo }: JobCategoryListProps) {
  const { addRole, addLevel, addLanguages, addTools } = useStore((store) => {
    return {
      addRole: store.addRole,
      addLevel: store.addLevel,
      addLanguages: store.addLanguages,
      addTools: store.addTools,
    };
  });

  return (
    <ul className="laptop:gap-4 laptop:space-x-0 laptop:flex-wrap flex space-x-5 text-cyan-800">
      <li
        onClick={() => addRole(jobInfo.role)}
        className="cursor-pointer rounded bg-cyan-50 px-2 py-[1px] transition-all hover:bg-cyan-800 hover:text-white"
      >
        {jobInfo.role}
      </li>
      <li
        onClick={() => addLevel(jobInfo.level)}
        className="cursor-pointer rounded bg-cyan-50 px-2 py-[1px] transition-all hover:bg-cyan-800 hover:text-white"
      >
        {jobInfo.level}
      </li>

      {jobInfo.languages.map((language, index) => (
        <li
          onClick={() => addLanguages(language)}
          key={index + language}
          className="cursor-pointer rounded bg-cyan-50 px-2 py-[1px] transition-all hover:bg-cyan-800 hover:text-white"
        >
          {language}
        </li>
      ))}

      {jobInfo.tools.map((tool, index) => (
        <li
          onClick={() => addTools(tool)}
          key={index + tool}
          className="cursor-pointer rounded bg-cyan-50 px-2 py-[1px] transition-all hover:bg-cyan-800 hover:text-white"
        >
          {tool}
        </li>
      ))}
    </ul>
  );
}
