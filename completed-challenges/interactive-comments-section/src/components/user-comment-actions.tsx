import { Dispatch, SetStateAction } from "react";

import { DeleteDialog } from "@/components/delete-dialog";
import { EditIcon } from "@/components/icons";

interface UserCommentActionsProps {
  commentId: string;
  replyId?: string;
  setIsCommentEditable: Dispatch<SetStateAction<boolean>>;
}

export function UserCommentActions({
  commentId,
  replyId,
  setIsCommentEditable,
}: UserCommentActionsProps) {
  return (
    <div className="flex space-x-6">
      <DeleteDialog commentId={commentId} replyId={replyId} />

      <button
        onClick={() => setIsCommentEditable((state) => !state)}
        className="flex items-center space-x-2 text-blue-500 transition-opacity hover:opacity-40"
      >
        <EditIcon className="h-4 w-5 fill-current  " />
        <span>Edit</span>
      </button>
    </div>
  );
}
