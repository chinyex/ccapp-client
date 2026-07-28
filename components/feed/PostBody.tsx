import Image from "next/image";

import { Post } from "@/types/post";

type PostBodyProps = {
  post: Post;
};

export default function PostBody({
  post,
}: PostBodyProps) {
  return (
    <section className="mt-4">
      <p className="whitespace-pre-line text-[15px] leading-7 text-slate-800">
        {post.content}
      </p>

      {post.image && (
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
          <Image
            src={post.image}
            alt="Post image"
            width={1200}
            height={800}
            className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
          />
        </div>
      )}
    </section>
  );
}