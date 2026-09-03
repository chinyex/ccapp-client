"use client";

import { useState } from "react";

import ChatList from "@/components/messages/ChatList";
import ChatWindow from "@/components/messages/ChatWindow";

import { chats } from "@/data/messages";
import type { Chat } from "@/types/message";

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState<Chat>(
    chats[0]
  );

  return (
    <div
      className="
        grid
        h-[calc(100vh-7rem)]
        gap-6
        lg:grid-cols-[360px_1fr]
      "
    >
      {/* Left */}
      <ChatList
        selectedChatId={selectedChat.id}
        onSelectChat={setSelectedChat}
      />

      {/* Right */}
      <ChatWindow chat={selectedChat} />
    </div>
  );
}