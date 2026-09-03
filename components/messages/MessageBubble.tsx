import type { Message } from "@/types/message";

type MessageBubbleProps = {
  message: Message;
};

export default function MessageBubble({
  message,
}: MessageBubbleProps) {
  return (
    <div
      className={`flex ${
        message.mine ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[75%]
          rounded-3xl
          px-4
          py-3
          shadow-sm

          ${
            message.mine
              ? "rounded-br-lg bg-blue-600 text-white"
              : "rounded-bl-lg bg-slate-100 text-slate-900"
          }
        `}
      >
        <p className="text-[15px] leading-6">
          {message.text}
        </p>

        <p
          className={`
            mt-2
            text-right
            text-xs

            ${
              message.mine
                ? "text-blue-100"
                : "text-slate-400"
            }
          `}
        >
          {message.time}
        </p>
      </div>
    </div>
  );
}