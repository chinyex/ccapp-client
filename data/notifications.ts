import type { Notification } from "@/types/notification";

export const notifications: Notification[] = [
  {
    id: "1",
    user: "Jane Cooper",
    avatar: "/images/users/user-2.png",
    action: "liked your post ❤️",
    time: "2 min ago",
    read: false,
  },
  {
    id: "2",
    user: "Michael Johnson",
    avatar: "/images/users/user-3.png",
    action: 'commented: "Amazing work!"',
    time: "12 min ago",
    read: false,
  },
  {
    id: "3",
    user: "Sarah Johnson",
    avatar: "/images/users/user-4.png",
    action: "started following you 👋",
    time: "1 hour ago",
    read: true,
  },
  {
    id: "4",
    user: "David Wilson",
    avatar: "/images/users/user-5.png",
    action: "shared your post 🔥",
    time: "Yesterday",
    read: true,
  },
];
