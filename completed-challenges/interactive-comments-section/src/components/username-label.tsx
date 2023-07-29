import { getCurrentUser } from "@/lib/session";

interface UsernameProps {
  name: string;
}

export function UsernameLabel({ name }: UsernameProps) {
  const user = getCurrentUser();

  return (
    <span className="font-medium text-blue-950">
      {user?.username === name ? (
        <>
          {name}{" "}
          <span className="rounded bg-blue-500 px-1 py-px text-sm text-white">
            you
          </span>
        </>
      ) : (
        name
      )}
    </span>
  );
}
