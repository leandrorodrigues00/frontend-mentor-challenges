import { Dispatch, SetStateAction } from "react";

import { getCurrentUser } from "@/lib/session";
import { CommentForm } from "@/components/comment-form";
import { UserAvatar } from "@/components/user-avatar";

interface UserCardCommentProps {
  commentId?: string;
  setReplyForm?: Dispatch<SetStateAction<boolean>>;
  replyingTo?: string;
}

export function UserCardComment({
  commentId,
  setReplyForm,
  replyingTo,
}: UserCardCommentProps) {
  const user = getCurrentUser();

  if (!user) return;

  return (
    <div className="flex w-full items-start gap-5 rounded-md bg-white p-6 tablet:flex-col">
      <UserAvatar className="h-10 w-10 tablet:hidden" user={user} />
      <CommentForm
        user={user}
        replyingTo={replyingTo}
        commentId={commentId}
        setReplyForm={setReplyForm}
      />
    </div>
  );
}
