"use client";

import { useStore } from "@/store";
import { CategoryButton } from "@/components/category-button";
import { ClearButton } from "@/components/clear-button";

export function Header() {
  const categories = useStore((store) => store.categories);

  return (
    <header className="flex h-[156px] items-end bg-cyan-800 bg-header-desktop px-6">
      {categories && (
        <div className="mx-auto mb-[-30px] flex    w-full max-w-job justify-between gap-4 rounded-lg bg-white px-10 py-5">
          <div className="laptop:gap-2 flex flex-wrap gap-4 ">
            {categories.role && (
              <CategoryButton categories={categories.role} type="role" />
            )}

            {categories.level && (
              <CategoryButton categories={categories.level} type="level" />
            )}

            {categories.languages?.map((language, index) => (
              <CategoryButton
                key={language + index}
                categories={language}
                type="languages"
              />
            ))}

            {categories.tools?.map((tool, index) => (
              <CategoryButton
                key={tool + index}
                categories={tool}
                type="tools"
              />
            ))}
          </div>

          <ClearButton />
        </div>
      )}
    </header>
  );
}
