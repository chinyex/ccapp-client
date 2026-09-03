"use client";

import { useState } from "react";
import { SendHorizontal, Smile } from "lucide-react";

type MessageInputProps = {
  onSend: (message: string) => void;
};

export default function MessageInput({ onSend }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const trimmed = message.trim();

    if (!trimmed) return;

    onSend(trimmed);

    setMessage("");
  };

  return (
    <div
      className="
        border-t
        border-slate-200
        bg-white
        p-4
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
          rounded-full
          border
          border-slate-200
          px-4
          py-2
          shadow-sm
          focus-within:border-blue-500
          focus-within:ring-2
          focus-within:ring-blue-100
        "
      >
        <button
          type="button"
          className="
            rounded-full
            p-2
            text-slate-500
            transition
            hover:bg-slate-100
            hover:text-yellow-500
          "
        >
          <Smile size={20} />
        </button>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Type a message..."
          className="
            flex-1
            bg-transparent
            text-[15px]
            text-slate-900
            placeholder:text-slate-500
            outline-none
          "
        />

        <button
          type="button"
          onClick={handleSend}
          className="
            flex
            h-10
            w-10
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
    </div>
  );
}
