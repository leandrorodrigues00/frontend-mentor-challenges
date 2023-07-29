import { useState } from "react";

import { repliesConfig } from "@/types";
import { BaseCard } from "@/components/base-card";
import { UserCardComment } from "@/components/user-card-comment";

interface ReplyCardProps {
  reply: repliesConfig;
  commentId: string;
}

export function ReplyCard({ reply, commentId }: ReplyCardProps) {
  const [replyForm, setReplyForm] = useState(false);

  return (
    <>
      <BaseCard
        commentId={commentId}
        replyId={reply.id}
        content={reply.content}
        createdAt={reply.createdAt}
        replyingTo={reply.replyingTo}
        score={reply.score}
        setReplyForm={setReplyForm}
        user={reply.user}
      />
      {replyForm && (
        <UserCardComment
          commentId={commentId}
          replyingTo={reply.user.username}
          setReplyForm={setReplyForm}
        />
      )}
    </>
  );
}
