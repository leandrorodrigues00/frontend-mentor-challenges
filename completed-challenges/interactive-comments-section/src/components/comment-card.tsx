import { useState } from "react";

import { CommentConfig } from "@/types";
import { BaseCard } from "@/components/base-card";
import { ReplyCard } from "@/components/reply-card";
import { UserCardComment } from "@/components/user-card-comment";

interface CommentCardProps {
  comment: CommentConfig;
}

export function CommentCard({ comment }: CommentCardProps) {
  const [replyForm, setReplyForm] = useState(false);

  return (
    <>
      <BaseCard
        content={comment.content}
        createdAt={comment.createdAt}
        commentId={comment.id}
        score={comment.score}
        setReplyForm={setReplyForm}
        user={comment.user}
      />
      {replyForm && (
        <UserCardComment
          commentId={comment.id}
          replyingTo={comment.user.username}
          setReplyForm={setReplyForm}
        />
      )}

      <div className="ml-10 space-y-5 border-l-[3px] border-gray-100 pl-10">
        {comment.replies?.map((reply) => (
          <ReplyCard commentId={comment.id} reply={reply} key={reply.id} />
        ))}
      </div>
    </>
  );
}
