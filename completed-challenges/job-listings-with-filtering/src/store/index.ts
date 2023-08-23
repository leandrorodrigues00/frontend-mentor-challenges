import { create } from "zustand";

import { CategoriesConfig, JobConfig } from "@/types";

interface CategoriesStore {
  categories: CategoriesConfig | null;
  jobs: JobConfig[] | null;
  isLoading: boolean;

  load: (jobs: JobConfig[]) => void;
  addRole: (role: string) => void;
  addLevel: (level: string) => void;
  addLanguages: (language: string) => void;
  addTools: (tools: string) => void;
  removeCategory: (
    type: "tools" | "languages" | "level" | "role",
    item: string
  ) => void;
  clearCategory: () => void;
}

export const useStore = create<CategoriesStore>((set, get) => {
  return {
    categories: null,
    jobs: null,
    isLoading: false,

    load: (jobs) => {
      set({ isLoading: true });
      set({
        jobs: jobs,
        isLoading: false,
      });
    },

    addRole(role) {
      const { categories } = get();

      if (!categories) {
        const newCategories = {
          role: role,
          level: null,
          languages: null,
          tools: null,
        };
        set({ categories: newCategories });
        return;
      }

      const currentRole = categories.role || "";

      if (!currentRole.includes(role)) {
        const newRole = {
          ...categories,
          role: role,
        };

        set({ categories: newRole });
      }
    },

    addLevel(level) {
      const { categories } = get();

      if (!categories) {
        const newCategories = {
          role: null,
          level: level,
          languages: null,
          tools: null,
        };
        set({ categories: newCategories });
        return;
      }

      const currentLevel = categories.level || "";

      if (!currentLevel.includes(level)) {
        const newLevel = {
          ...categories,
          level: level,
        };

        set({ categories: newLevel });
      }
    },

    addLanguages(language: string) {
      const { categories } = get();

      if (!categories) {
        const newCategories = {
          role: null,
          level: null,
          languages: [language],
          tools: null,
        };
        set({ categories: newCategories });
        return;
      }

      const currentLanguages = categories.languages || [];

      if (!currentLanguages.includes(language)) {
        const newLanguages = [...currentLanguages, language];

        const newCategories = {
          ...categories,
          languages: newLanguages,
        };

        set({ categories: newCategories });
      }
    },

    addTools(tools: string) {
      const { categories } = get();

      if (!categories) {
        const newCategories = {
          role: null,
          level: null,
          languages: null,
          tools: [tools],
        };
        set({ categories: newCategories });
        return;
      }

      const currentTools = categories.tools || [];

      if (!currentTools?.includes(tools)) {
        const newTools = [...currentTools, tools];

        const newCategories = {
          ...categories,
          tools: newTools,
        };

        set({ categories: newCategories });
      }
    },

    removeCategory(type, item) {
      const { categories } = get();

      if (!categories) return;
      let updatedCategories;

      if (type === "languages" || type === "tools") {
        updatedCategories = {
          ...categories,
          [type]: categories[type]?.filter(
            (categoryItem) => categoryItem !== item
          ),
        };
      } else {
        updatedCategories = {
          ...categories,
          [type]: null,
        };
      }

      const allPropertiesNull = Object.values(updatedCategories).every(
        (value) =>
          value === null || (Array.isArray(value) && value.length === 0)
      );

      if (allPropertiesNull) {
        set({ categories: null });
      } else {
        set({ categories: updatedCategories });
      }
    },

    clearCategory() {
      set({ categories: null });
    },
  };
});
