import {
  Bookmark,
  CalendarDays,
  Clock3,
  House,
  UserRound,
  Users,
} from "lucide-react";

import type { SidebarItemType } from "@/types/sidebar";

export const sidebarItems: SidebarItemType[] = [
  {
    id: "1",
    title: "Home",
    href: "/feed",
    icon: House,
  },
  {
    id: "2",
    title: "Profile",
    href: "/profile",
    icon: UserRound,
  },
  {
    id: "3",
    title: "Communities",
    href: "/communities",
    icon: Users,
  },
  {
    id: "4",
    title: "Saved",
    href: "/saved",
    icon: Bookmark,
  },
  {
    id: "5",
    title: "Memories",
    href: "/memories",
    icon: Clock3,
  },
  {
    id: "6",
    title: "Events",
    href: "/events",
    icon: CalendarDays,
  },
];