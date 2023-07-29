"use client";

import { useStore } from "@/store";
import { CommentCard } from "@/components/comment-card";

export function CommentClient() {
  const { comments } = useStore();
  return (
    <>
      {comments?.map((comment) => (
        <CommentCard comment={comment} key={comment.id} />
      ))}
    </>
  );
}
