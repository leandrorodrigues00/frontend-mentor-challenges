import { useStore } from "@/store";

export function ClearButton() {
  const clear = useStore((store) => store.clearCategory);

  return (
    <button
      className=" self-center font-medium text-cyan-900 transition-all hover:cursor-pointer hover:text-cyan-700 hover:underline"
      onClick={clear}
    >
      Clear
    </button>
  );
}
