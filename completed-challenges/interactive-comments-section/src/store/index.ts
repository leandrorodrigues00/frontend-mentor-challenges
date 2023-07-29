import { create } from "zustand";

import { CommentConfig, UserConfig } from "@/types";

interface Comments {
  comments: CommentConfig[] | null;
  isLoading: boolean;

  load: (comments: CommentConfig[]) => void;
  addComment: (description: string, user: UserConfig) => void;
  addReply: (
    commentId: string,
    replyingTo: string,
    description: string,
    user: UserConfig
  ) => void;
  editComment: (commentId: string, description: string) => void;
  editReply: (commentId: string, replyId: string, description: string) => void;
  deleteComment: (commentId: string) => void;
  deleteReply: (commentId: string, replyId: string) => void;
}

export const useStore = create<Comments>((set, get) => {
  return {
    comments: null,
    isLoading: false,

    load: (comments) => {
      set({ isLoading: true });
      set({
        comments: comments,
        isLoading: false,
      });
    },

    addComment: (description, user) => {
      const { comments } = get();

      const currentComments = comments || [];

      const newComment = {
        content: description,
        createdAt: "moments ago",
        id: crypto.randomUUID(),
        replies: [],
        score: 0,
        user: user,
      };

      const updatedComments = [...currentComments, newComment];

      set({ comments: updatedComments });
    },

    addReply: (commentId, replyingTo, description, user) => {
      const { comments } = get();

      if (!comments) return;

      const commentIndex = comments?.findIndex(
        (comment) => comment.id === commentId
      );

      if (commentIndex !== -1) {
        const currentComments = [...comments];

        const newReply = {
          id: crypto.randomUUID(),
          content: description,
          createdAt: "moments ago",
          replyingTo: replyingTo,
          score: 0,
          user: user,
        };

        comments[commentIndex].replies.push(newReply);

        set({ comments: currentComments });
      }
    },

    editComment: (commentId, newDescription) => {
      const { comments } = get();

      const currentComments = comments || [];

      const commentIndex = currentComments.findIndex(
        (comment) => comment.id === commentId
      );

      if (commentIndex !== -1) {
        currentComments[commentIndex].content = newDescription;

        set({ comments: currentComments });
      }
    },

    editReply: (commentId, replyId, newDescription) => {
      const { comments } = get();

      const currentComments = comments || [];

      const commentIndex = currentComments.findIndex(
        (comment) => comment.id === commentId
      );

      if (commentIndex !== -1) {
        const replyIndex = currentComments[commentIndex].replies.findIndex(
          (reply) => reply.id === replyId
        );

        if (replyIndex !== -1) {
          currentComments[commentIndex].replies[replyIndex].content =
            newDescription;

          set({ comments: currentComments });
        }
      }
    },

    deleteComment: (commentId) => {
      const { comments } = get();

      const updatedComments = comments?.filter(
        (comment) => comment.id !== commentId
      );

      set({ comments: updatedComments });
    },

    deleteReply: (commentId, replyId) => {
      const { comments } = get();

      const currentComments = comments || [];

      const commentIndex = currentComments?.findIndex(
        (comment) => comment.id === commentId
      );

      if (commentIndex !== -1) {
        const comment = currentComments[commentIndex];

        const replyIndex = comment.replies.findIndex(
          (reply) => reply.id === replyId
        );

        if (replyIndex !== -1) {
          comment.replies.splice(replyIndex, 1);

          set({ comments: currentComments });
        }
      }
    },
  };
});
