import FeedCard from "./FeedCard";
import NotificationCard from "./NotificationCard";

export default function HeroPreview() {
  return (
    <div className="relative w-full max-w-lg">
      {/* Top Notification */}
      <div className="absolute -top-8 -right-8 z-20 hidden lg:block">
        <NotificationCard
          title="24 New Likes"
          description="Your latest post is trending."
        />
      </div>

      {/* Feed */}
      <FeedCard />

      {/* Bottom Notification */}
      <div className="absolute -bottom-8 -left-8 z-20 hidden lg:block">
        <NotificationCard
          title="+128 Members"
          description="Joined CCApp today."
        />
      </div>
    </div>
  );
}