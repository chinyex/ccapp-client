import type { Chat } from "@/types/message";

export const chats: Chat[] = [
  {
    id: "1",
    name: "Jane Cooper",
    avatar: "/images/users/user-2.png",
    online: true,
    lastMessage: "Can't wait to see CCApp 😍",
    lastSeen: "2m",
    unread: 2,

    messages: [
      {
        id: "1",
        senderId: "2",
        receiverId: "1",
        text: "Hey Chinenye 👋",
        time: "10:12 AM",
        mine: false,
      },
      {
        id: "2",
        senderId: "1",
        receiverId: "2",
        text: "Hey Jane 😊",
        time: "10:13 AM",
        mine: true,
      },
      {
        id: "3",
        senderId: "2",
        receiverId: "1",
        text: "Can't wait to see CCApp 😍",
        time: "10:15 AM",
        mine: false,
      },
    ],
  },

  {
    id: "2",
    name: "Michael Johnson",
    avatar: "/images/users/user-3.png",
    online: false,
    lastMessage: "See you tomorrow.",
    lastSeen: "1h",
    unread: 0,

    messages: [
      {
        id: "1",
        senderId: "2",
        receiverId: "1",
        text: "Are we meeting tomorrow?",
        time: "9:30 AM",
        mine: false,
      },
      {
        id: "2",
        senderId: "1",
        receiverId: "2",
        text: "Sure 👍",
        time: "9:32 AM",
        mine: true,
      },
      {
        id: "3",
        senderId: "2",
        receiverId: "1",
        text: "See you tomorrow.",
        time: "9:33 AM",
        mine: false,
      },
    ],
  },

  {
    id: "3",
    name: "Sarah Johnson",
    avatar: "/images/users/user-4.png",
    online: true,
    lastMessage: "Happy Birthday 🎉",
    lastSeen: "Now",
    unread: 1,

    messages: [
      {
        id: "1",
        senderId: "2",
        receiverId: "1",
        text: "Happy Birthday 🎉",
        time: "8:45 AM",
        mine: false,
      },
    ],
  },
];