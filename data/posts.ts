import { Post } from "@/types/post";

export const posts: Post[] = [
  {
    id: "1",
    author: {
      id: "user-1",
      name: "Obiakor Chinenye",
      avatar: "/images/users/user-1.png",
      title: "Software Engineer",
      verified: true,
    },
    content:
      "Excited to finally start building CCApp! 🚀 Looking forward to creating something amazing.",
    image: "/images/posts/post-1.png",
    likes: 245,
    comments: 32,
    shares: 10,
    time: "2h",
    liked: false,
  },

  {
    id: "2",
    author: {
      id: "user-2",
      name: "Jane Cooper",
      avatar: "/images/users/user-2.png",
      title: "UI/UX Designer",
      verified: true,
    },
    content:
      "Design isn't just how it looks—it’s how it works. Really proud of this new dashboard design! 🎨✨",
    image: "/images/posts/post-2.png",
    likes: 189,
    comments: 24,
    shares: 8,
    time: "5h",
    liked: false,
  },

  {
    id: "3",
    author: {
      id: "user-3",
      name: "Michael Johnson",
      avatar: "/images/users/user-3.png",
      title: "Frontend Developer",
      verified: false,
    },
    content:
      "Spent the weekend learning Next.js App Router. Loving the developer experience so far! 💻🔥",
    image: "/images/posts/post-3.png",
    likes: 97,
    comments: 15,
    shares: 5,
    time: "1d",
    liked: false,
  },
];
