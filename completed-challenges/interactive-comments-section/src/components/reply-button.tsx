import { Dispatch, SetStateAction } from "react";

import { ReplyIcon } from "@/components/icons";

interface ReplyButtonProps {
  setReplyForm: Dispatch<SetStateAction<boolean>>;
}

export function ReplyButton({ setReplyForm }: ReplyButtonProps) {
  return (
    <button
      onClick={() => setReplyForm((state) => !state)}
      className="flex items-center space-x-2 text-blue-500 transition-colors hover:text-blue-100"
    >
      <ReplyIcon className="h-4 w-5 fill-current" />
      <span className="font-medium">Reply</span>
    </button>
  );
}
