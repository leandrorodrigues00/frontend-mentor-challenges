import { useStore } from "@/store";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DeleteIcon } from "@/components/icons";

interface DeleteDialogProps {
  commentId: string;
  replyId?: string;
}

export function DeleteDialog({ commentId, replyId }: DeleteDialogProps) {
  const { deleteComment, deleteReply } = useStore((store) => {
    return {
      deleteComment: store.deleteComment,
      deleteReply: store.deleteReply,
    };
  });

  function handleDeleteComment() {
    if (!replyId) {
      deleteComment(commentId);
    } else {
      deleteReply(commentId, replyId);
    }
  }

  return (
    <Dialog>
      {/*
        aria-controls={"uniqueId"} ??
        Prop `aria-controls` did not match. Server 
        @see: https://github.com/radix-ui/primitives/issues/811 
        @see: https://github.com/ariakit/ariakit/issues/844
      */}
      <DialogTrigger
        // aria-controls={"uniqueId"}
        className="flex items-center space-x-2 text-red-500 transition-opacity hover:opacity-40"
      >
        <DeleteIcon className="h-4 w-5 fill-current " />
        <span className="">Delete</span>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[405px]">
        <DialogHeader className="mb-5">
          <DialogTitle className="mb-5">Delete Comment</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this comment? this will remove the
            comment and can&apos;t be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose />
          <button
            className="rounded bg-red-500 px-8 py-3 text-white transition-colors hover:bg-red-400 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 disabled:pointer-events-none"
            onClick={() => handleDeleteComment()}
            type="submit"
          >
            YES, DELETE
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
