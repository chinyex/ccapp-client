import type { PostComment } from "@/types/comment";

import Comment from "./Comment";

type CommentListProps = {
  comments: PostComment[];
};

export default function CommentList({
  comments,
}: CommentListProps) {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  );
}