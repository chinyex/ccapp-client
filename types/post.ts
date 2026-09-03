import { PostComment } from "./comment";

export interface PostAuthor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  verified?: boolean;
}

export interface Post {
  id: string;
  author: PostAuthor;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  time: string;
  liked: boolean;

  commentsList: PostComment[];
}