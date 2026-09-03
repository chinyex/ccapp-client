import Image from "next/image";

import { PostComment } from "@/types/comment";

type CommentProps = {
  comment: PostComment;
};

export default function Comment({
  comment,
}: CommentProps) {
  return (
    <div className="flex gap-3">
      <Image
        src={comment.author.avatar}
        alt={comment.author.name}
        width={40}
        height={40}
        className="rounded-full"
      />

      <div className="flex-1">
        <div className="rounded-2xl bg-slate-100 px-4 py-3">
          <h4 className="font-semibold text-slate-900">
            {comment.author.name}
          </h4>

          <p className="mt-1 text-sm text-slate-700">
            {comment.content}
          </p>
        </div>

        <span className="ml-2 mt-1 block text-xs text-slate-500">
          {comment.createdAt}
        </span>
      </div>
    </div>
  );
}