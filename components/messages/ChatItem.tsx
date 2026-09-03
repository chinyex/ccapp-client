import Image from "next/image";

import type { Chat } from "@/types/message";

type ChatItemProps = {
  chat: Chat;
  selected: boolean;
  onClick: () => void;
};

export default function ChatItem({
  chat,
  selected,
  onClick,
}: ChatItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group
        flex
        w-full
        items-center
        gap-4
        rounded-2xl
        p-3
        text-left
        transition-all
        duration-300

        ${
          selected
            ? "bg-blue-50 shadow-sm"
            : "hover:bg-slate-100"
        }
      `}
    >
      {/* Avatar */}
      <div className="relative shrink-0">
        <Image
          src={chat.avatar}
          alt={chat.name}
          width={54}
          height={54}
          className="
            rounded-full
            object-cover
          "
        />

        {chat.online && (
          <>
            <span
              className="
                absolute
                bottom-0
                right-0
                h-4
                w-4
                rounded-full
                border-2
                border-white
                bg-emerald-500
              "
            />

            <span
              className="
                absolute
                bottom-0
                right-0
                h-4
                w-4
                animate-ping
                rounded-full
                bg-emerald-400
                opacity-40
              "
            />
          </>
        )}
      </div>

      {/* Details */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <h3 className="truncate font-semibold text-slate-900">
            {chat.name}
          </h3>

          <span className="text-xs text-slate-400">
            {chat.lastSeen}
          </span>
        </div>

        <div className="mt-1 flex items-center justify-between gap-3">
          <p className="truncate text-sm text-slate-500">
            {chat.lastMessage}
          </p>

          {chat.unread > 0 && (
            <span
              className="
                flex
                h-6
                min-w-6
                items-center
                justify-center
                rounded-full
                bg-blue-600
                px-2
                text-xs
                font-bold
                text-white
              "
            >
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}