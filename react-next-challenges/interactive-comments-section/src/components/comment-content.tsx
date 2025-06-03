import { useState } from "react";

interface CommentContentProps {
  text: string;
  replyTo?: string;
}

export function CommentContent({ text, replyTo }: CommentContentProps) {
  const [showMore, setShowMore] = useState(false);

  if (text.length <= 200) {
    return (
      <p className="max-w-[570px] break-words text-gray-300">
        {replyTo && (
          <span className="mr-1 cursor-pointer font-medium text-blue-500">
            @{replyTo}
          </span>
        )}
        {text}
      </p>
    );
  }

  return (
    <p className="max-w-[570px] break-words text-gray-300">
      {showMore ? (
        <>
          {replyTo && (
            <span className="mr-1 cursor-pointer font-medium text-blue-500">
              @{replyTo}
            </span>
          )}
          {text}
        </>
      ) : (
        <>
          {replyTo && (
            <span className="mr-1 cursor-pointer font-medium text-blue-500">
              @{replyTo}
            </span>
          )}
          {`${text.substring(0, 200)}...`}
        </>
      )}
      <button
        onClick={() => setShowMore(!showMore)}
        className="leading-base ml-1 text-sm font-bold text-blue-500"
      >
        {showMore ? "see less" : "see more"}
      </button>
    </p>
  );
}
