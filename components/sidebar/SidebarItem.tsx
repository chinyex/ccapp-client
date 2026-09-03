import Link from "next/link";
import { ChevronRight } from "lucide-react";

import type { SidebarItemType } from "@/types/sidebar";

type SidebarItemProps = {
  item: SidebarItemType;
};

export default function SidebarItem({
  item,
}: SidebarItemProps) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className="
        group
        relative
        mb-1
        flex
        items-center
        justify-between
        rounded-2xl
        px-4
        py-3
        transition-all
        duration-300
        hover:bg-slate-50
        hover:shadow-sm
      "
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-blue-50
            text-blue-600
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:bg-blue-600
            group-hover:text-white
          "
        >
          <Icon size={21} />
        </div>

        <span
          className="
            text-[15px]
            font-semibold
            tracking-tight
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-blue-600
          "
        >
          {item.title}
        </span>
      </div>

      {/* Arrow */}
      <ChevronRight
        size={18}
        className="
          text-slate-400
          opacity-0
          transition-all
          duration-300
          group-hover:translate-x-1
          group-hover:opacity-100
        "
      />

      {/* Hover Accent */}
      <div
        className="
          absolute
          left-0
          top-3
          h-8
          w-1
          rounded-r-full
          bg-blue-600
          opacity-0
          transition-all
          duration-300
          group-hover:opacity-100
        "
      />
    </Link>
  );
}