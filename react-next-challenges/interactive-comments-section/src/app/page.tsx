import { useStore } from "@/store";
import { CommentClient } from "@/components/comment-client";
import StoreInitializer from "@/components/store-initializer";
import { UserCardComment } from "@/components/user-card-comment";

import data from "../../data.json";

export default function Home() {
  //fetch API data and load store
  const response = data.comments;
  const load = useStore.getState().load;
  load(response);

  const comments = useStore.getState().comments;
  if (!comments) return;

  return (
    <main className="min-h-screen bg-gray-50 px-2 py-16">
      <section className="mx-auto w-full max-w-[45.625rem] space-y-5">
        <StoreInitializer comments={comments} />

        <CommentClient />

        <UserCardComment />
      </section>
    </main>
  );
}
