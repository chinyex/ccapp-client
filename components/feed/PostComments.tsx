import type { PostComment } from "@/types/comment";

import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

type PostCommentsProps = {
  comments: PostComment[];
  onAddComment: (content: string) => void;
};

export default function PostComments({
  comments,
  onAddComment,
}: PostCommentsProps) {
  return (
    <div className="mt-5 border-t border-slate-200 pt-4">
      <CommentList comments={comments} />

      <CommentInput onSubmit={onAddComment} />
    </div>
  );
}