import Image from "next/image";

import type { Post } from "@/types/post";

type PostBodyProps = {
  post: Post;
};

export default function PostBody({
  post,
}: PostBodyProps) {
  return (
    <section className="mt-5">
      {/* Post Text */}
      <p
        className="
          whitespace-pre-line
          text-[15px]
          leading-8
          tracking-[0.01em]
          text-slate-800
        "
      >
        {post.content}
      </p>

      {/* Post Image */}
      {post.image && (
        <div
          className="
            group
            mt-5
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-slate-100
            shadow-sm
          "
        >
          <Image
            src={post.image}
            alt="Post image"
            width={1200}
            height={800}
            className="
              h-auto
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
            priority={false}
          />
        </div>
      )}
    </section>
  );
}