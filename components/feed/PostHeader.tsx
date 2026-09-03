import Image from "next/image";
import {
  BadgeCheck,
  Ellipsis,
  Globe,
} from "lucide-react";

import type { Post } from "@/types/post";

type PostHeaderProps = {
  post: Post;
};

export default function PostHeader({
  post,
}: PostHeaderProps) {
  return (
    <header className="flex items-start justify-between">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-slate-100 transition-all duration-300 hover:ring-blue-200">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>

        {/* User Info */}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold tracking-tight text-slate-900">
              {post.author.name}
            </h3>

            {post.author.verified && (
              <BadgeCheck
                size={18}
                className="fill-blue-500 text-white"
              />
            )}
          </div>

          <p className="mt-0.5 text-sm font-medium text-slate-600">
            {post.author.title}
          </p>

          <div className="mt-1 flex items-center gap-1 text-xs font-medium text-slate-500">
            <span>{post.time}</span>

            <span>•</span>

            <Globe size={12} />
          </div>
        </div>
      </div>

      {/* Menu */}
      <button
        className="
          rounded-full
          p-2.5
          text-slate-500
          transition-all
          duration-200
          hover:bg-slate-100
          hover:text-slate-900
          active:scale-95
        "
      >
        <Ellipsis size={22} />
      </button>
    </header>
  );
}