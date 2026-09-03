"use client";

import Image from "next/image";
import { MoreHorizontal, Phone, Video } from "lucide-react";
import { useState } from "react";

import type { Chat, Message } from "@/types/message";

import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

type ChatWindowProps = {
  chat: Chat;
};

export default function ChatWindow({ chat }: ChatWindowProps) {
  const [messages, setMessages] = useState(chat.messages);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: "current-user",
      receiverId: chat.id,
      text,
      time: "Now",
      mine: true,
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <section className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-slate-200 p-5">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              src={chat.avatar}
              alt={chat.name}
              width={54}
              height={54}
              className="rounded-full"
            />

            {chat.online && (
              <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-emerald-500" />
            )}
          </div>

          <div>
            <h2 className="font-bold text-slate-900">{chat.name}</h2>

            <p className="text-sm text-slate-500">
              {chat.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-full p-3 hover:bg-slate-100">
            <Phone size={20} />
          </button>

          <button className="rounded-full p-3 hover:bg-slate-100">
            <Video size={20} />
          </button>

          <button className="rounded-full p-3 hover:bg-slate-100">
            <MoreHorizontal size={20} />
          </button>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-6">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>

      <MessageInput onSend={handleSendMessage} />
    </section>
  );
}
