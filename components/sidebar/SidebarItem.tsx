import { ChevronRight } from "lucide-react";

import { SidebarItemType } from "@/types/sidebar";

type SidebarItemProps = {
  item: SidebarItemType;
};

export default function SidebarItem({
  item,
}: SidebarItemProps) {
  const Icon = item.icon;

  return (
    <button
      className="
        group
        flex
        w-full
        items-center
        justify-between
        rounded-2xl
        px-4
        py-3
        transition-all
        duration-200
        hover:bg-slate-100
      "
    >
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
            transition
            group-hover:bg-blue-600
            group-hover:text-white
          "
        >
          <Icon size={22} />
        </div>

        <span className="text-[15px] font-semibold text-slate-900">
          {item.title}
        </span>
      </div>

      <ChevronRight
        size={18}
        className="
          text-slate-400
          opacity-0
          transition
          group-hover:translate-x-1
          group-hover:opacity-100
        "
      />
    </button>
  );
}