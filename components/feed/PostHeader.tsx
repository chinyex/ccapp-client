import Image from "next/image";
import { Ellipsis, Globe, BadgeCheck } from "lucide-react";

import { Post } from "@/types/post";

type PostHeaderProps = {
  post: Post;
};

export default function PostHeader({
  post,
}: PostHeaderProps) {
  return (
    <header className="flex items-start justify-between">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="relative h-12 w-12 overflow-hidden rounded-full">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>

        {/* User Info */}
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <h3 className="text-[15px] font-semibold text-slate-900">
              {post.author.name}
            </h3>

            {post.author.verified && (
              <BadgeCheck
                size={18}
                className="fill-blue-500 text-white"
              />
            )}
          </div>

          <p className="text-sm font-medium text-slate-700">
            {post.author.title}
          </p>

          <div className="flex items-center gap-1 text-xs font-medium text-slate-500">
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
          p-2
          text-slate-600
          transition
          hover:bg-slate-100
          hover:text-slate-900
        "
      >
        <Ellipsis size={22} />
      </button>
    </header>
  );
}