"use client";

import { Search } from "lucide-react";

import { chats } from "@/data/messages";
import type { Chat } from "@/types/message";

import ChatItem from "./ChatItem";

type ChatListProps = {
  selectedChatId: string;
  onSelectChat: (chat: Chat) => void;
};

export default function ChatList({
  selectedChatId,
  onSelectChat,
}: ChatListProps) {
  return (
    <aside
      className="
        flex
        h-full
        w-full
        flex-col
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      {/* Header */}
      <div className="border-b border-slate-200 p-5">
        <h2 className="text-2xl font-bold text-slate-900">
          Messages
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Stay connected with your friends
        </p>

        {/* Search */}
        <div
          className="
            mt-5
            flex
            items-center
            gap-3
            rounded-full
            bg-slate-100
            px-4
            py-3
          "
        >
          <Search
            size={18}
            className="text-slate-500"
          />

          <input
            type="text"
            placeholder="Search chats..."
            className="
              w-full
              bg-transparent
              text-sm
              text-slate-900
              outline-none
              placeholder:text-slate-500
            "
          />
        </div>
      </div>

      {/* Chat List */}
      <div
        className="
          flex-1
          space-y-1
          overflow-y-auto
          p-3
        "
      >
        {chats.map((chat) => (
          <ChatItem
            key={chat.id}
            chat={chat}
            selected={selectedChatId === chat.id}
            onClick={() => onSelectChat(chat)}
          />
        ))}
      </div>
    </aside>
  );
}