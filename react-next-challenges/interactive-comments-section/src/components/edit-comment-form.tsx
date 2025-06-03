import { Dispatch, SetStateAction, useState } from "react";

import { useStore } from "@/store";
import { Textarea } from "@/components/ui/textarea";

interface EditCommentFormProps {
  commentId: string;
  content: string;
  replyId?: string;
  setIsCommentEditable: Dispatch<SetStateAction<boolean>>;
}

export function EditCommentForm({
  content,
  commentId,
  replyId,
  setIsCommentEditable,
}: EditCommentFormProps) {
  const [comment, setComment] = useState(content);
  const { editComment, editReply } = useStore((store) => {
    return {
      editComment: store.editComment,
      editReply: store.editReply,
    };
  });

  function handleEditComment() {
    if (!replyId) {
      editComment(commentId, comment);
    } else {
      editReply(commentId, replyId, comment);
    }
    setIsCommentEditable(false);
  }

  return (
    <div className="flex flex-col">
      <Textarea
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        rows={4}
        name="editCommentTextarea"
      />

      <button
        onClick={() => handleEditComment()}
        className="max-w-ful mt-3 w-[100px] self-end rounded-md bg-blue-500 py-2 text-white transition-opacity hover:opacity-60"
      >
        UPDATE
      </button>
    </div>
  );
}
