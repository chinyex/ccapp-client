import {
  Bookmark,
  House,
  Users,
  UserRound,
  CalendarDays,
  Clock3,
} from "lucide-react";

import { SidebarItemType } from "@/types/sidebar";

export const sidebarItems: SidebarItemType[] = [
  {
    id: "1",
    title: "Home",
    icon: House,
  },
  {
    id: "2",
    title: "Friends",
    icon: UserRound,
  },
  {
    id: "3",
    title: "Groups",
    icon: Users,
  },
  {
    id: "4",
    title: "Saved",
    icon: Bookmark,
  },
  {
    id: "5",
    title: "Memories",
    icon: Clock3,
  },
  {
    id: "6",
    title: "Events",
    icon: CalendarDays,
  },
];