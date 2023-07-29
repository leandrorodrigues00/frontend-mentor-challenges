"use client";

import { useState } from "react";

import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "@/components/icons";

interface CommentReactButtonsProps {
  initialScore: number;
}

export function CommentReactButtons({
  initialScore,
}: CommentReactButtonsProps) {
  const user = getCurrentUser();
  const [reaction, setReaction] = useState({
    reactionVote: 0,
    reactionScore: initialScore,
  });

  function handleVote(type: 1 | -1) {
    if (!user) return;

    setReaction((state) => ({
      ...state,
      reactionVote: state.reactionVote === type ? 0 : type,
    }));
  }

  let totalScore = reaction.reactionScore + reaction.reactionVote;

  return (
    <div className="flex max-h-[100px] w-full max-w-[36px] flex-col items-center justify-center space-y-5 rounded-md bg-gray-50 p-2">
      <button onClick={() => handleVote(1)}>
        <PlusIcon
          className={cn(
            "h-3 w-3 fill-current transition-colors",
            reaction.reactionVote === 1
              ? "text-green-400"
              : "text-blue-200 hover:text-blue-500"
          )}
        />
      </button>
      <span className="font-bold text-blue-500">{totalScore}</span>

      <button onClick={() => handleVote(-1)}>
        <MinusIcon
          className={cn(
            "h-3 w-3 fill-current transition-colors",
            reaction.reactionVote === -1
              ? "text-red-400 "
              : "text-blue-200 hover:text-blue-500"
          )}
        />
      </button>
    </div>
  );
}
