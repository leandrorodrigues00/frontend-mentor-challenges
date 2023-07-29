import { Dispatch, SetStateAction, useState } from "react";

import { repliesConfig } from "@/types";
import { getCurrentUser } from "@/lib/session";
import { CommentContent } from "@/components/comment-content";
import { CommentReactButtons } from "@/components/comment-reaction-buttons";
import { EditCommentForm } from "@/components/edit-comment-form";
import { ReplyButton } from "@/components/reply-button";
import { UserAvatar } from "@/components/user-avatar";
import { UserCommentActions } from "@/components/user-comment-actions";
import { UsernameLabel } from "@/components/username-label";

interface BaseCardProps
  extends Pick<repliesConfig, "score" | "content" | "createdAt" | "user"> {
  commentId: string;
  replyId?: string;
  replyingTo?: string;
  setReplyForm: Dispatch<SetStateAction<boolean>>;
}

export function BaseCard({
  commentId,
  replyId,
  score,
  user,
  createdAt,
  setReplyForm,
  replyingTo,
  content,
}: BaseCardProps) {
  const loggedUser = getCurrentUser();
  const [isCommentEditable, setIsCommentEditable] = useState(false);

  return (
    <div className="flex w-full gap-5 rounded-md bg-white p-6">
      <CommentReactButtons initialScore={score} />

      <div className="w-full">
        <header className=" mb-5 flex justify-between">
          <div className="mb-auto flex items-center space-x-4">
            <UserAvatar user={user} />

            <UsernameLabel name={user.username} />
            <span className="text-sm text-gray-300 ">{createdAt}</span>
          </div>

          {loggedUser?.username === user.username ? (
            <UserCommentActions
              commentId={commentId}
              replyId={replyId}
              setIsCommentEditable={setIsCommentEditable}
            />
          ) : (
            <ReplyButton setReplyForm={setReplyForm} />
          )}
        </header>

        {isCommentEditable ? (
          <EditCommentForm
            commentId={commentId}
            replyId={replyId}
            content={content}
            setIsCommentEditable={setIsCommentEditable}
          />
        ) : (
          <CommentContent text={content} replyTo={replyingTo} />
        )}
      </div>
    </div>
  );
}
