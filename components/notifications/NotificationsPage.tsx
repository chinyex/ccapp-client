import { notifications } from "@/data/notifications";

import EmptyNotifications from "./EmptyNotifications";
import NotificationCard from "./NotificationCard";
import NotificationHeader from "./NotificationHeader";

export default function NotificationsPage() {
  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  if (notifications.length === 0) {
    return <EmptyNotifications />;
  }

  const todayNotifications = notifications.filter(
    (notification) =>
      notification.time.includes("m") ||
      notification.time.includes("h")
  );

  const earlierNotifications = notifications.filter(
    (notification) =>
      !notification.time.includes("m") &&
      !notification.time.includes("h")
  );

  return (
    <div className="mx-auto max-w-3xl">
      <NotificationHeader unreadCount={unreadCount} />

      {/* Today */}
      {todayNotifications.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500">
            Today
          </h2>

          <div className="space-y-2">
            {todayNotifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>
        </section>
      )}

      {/* Earlier */}
      {earlierNotifications.length > 0 && (
        <section>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500">
            Earlier
          </h2>

          <div className="space-y-2">
            {earlierNotifications.map((notification) => (
              <NotificationCard
                key={notification.id}
                notification={notification}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}