"use client";

import { SendHorizontal } from "lucide-react";
import { useState } from "react";

type CommentInputProps = {
  onSubmit: (content: string) => void;
};

export default function CommentInput({ onSubmit }: CommentInputProps) {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    const trimmed = comment.trim();

    if (!trimmed) return;

    onSubmit(trimmed);

    setComment("");
  };

  return (
    <div className="mt-4 flex items-center gap-3">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        className="
    flex-1
    rounded-full
    border
    border-slate-300
    bg-white
    px-4
    py-3
    text-sm
    font-medium
    text-slate-900
    placeholder:text-slate-500
    outline-none
    transition
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-100
  "
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />

      <button
        type="button"
        onClick={handleSubmit}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-blue-600
          text-white
          transition
          hover:bg-blue-700
        "
      >
        <SendHorizontal size={18} />
      </button>
    </div>
  );
}
