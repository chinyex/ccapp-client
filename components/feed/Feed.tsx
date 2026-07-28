import { posts } from "@/data/posts";
import { Post } from "@/types/post";

import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import Stories from "./Stories";

export default function Feed() {
  return (
    <div className="space-y-6">
      {/* Stories */}
      <Stories />

      {/* Create Post */}
      <CreatePost />

      {/* Feed Posts */}
      {posts.map((post: Post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}