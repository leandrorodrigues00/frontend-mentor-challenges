"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { z } from "zod";

import { UserConfig } from "@/types";
import { useStore } from "@/store";
import { Textarea } from "@/components/ui/textarea";

interface CommentFormProps {
  user: UserConfig;
  commentId?: string;
  replyingTo?: string;
  setReplyForm?: Dispatch<SetStateAction<boolean>>;
}

const commentSchema = z.object({
  content: z.string().min(3),
});

export function CommentForm({
  user,
  commentId,
  setReplyForm,
  replyingTo,
}: CommentFormProps) {
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { addComment, addReply } = useStore((state) => {
    return {
      addComment: state.addComment,
      addReply: state.addReply,
    };
  });

  function handleSubmit() {
    try {
      commentSchema.parse({ content: description });

      if (!commentId || !replyingTo) {
        addComment(description, user);
      } else {
        addReply(commentId, replyingTo, description, user);
      }

      setDescription("");

      setError(null);
      if (setReplyForm) setReplyForm(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log(error.message);
        setError("At least 3 characters");
      }
    }
  }

  return (
    <>
      <Textarea
        data-error={!!error}
        name="textarea"
        placeholder="Add a comment..."
        value={description}
        onChange={({ target }) => setDescription(target.value)}
        className="data-[error=true]:border data-[error=true]:border-red-500 data-[error=true]:outline-none"
      />

      {error && <p className="mt-2 text-red-300">{error}</p>}

      <button
        onClick={() => handleSubmit()}
        className="max-w-ful w-[100px] rounded-md bg-blue-500 py-2 text-white transition-opacity hover:opacity-60"
      >
        {commentId ? "Reply" : "Send"}
      </button>
    </>
  );
}
