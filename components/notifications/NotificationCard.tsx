import Image from "next/image";

import { Notification } from "@/types/notification";

type NotificationCardProps = {
  notification: Notification;
};

export default function NotificationCard({
  notification,
}: NotificationCardProps) {
  return (
    <button
      className={`
        group
        flex
        w-full
        items-start
        gap-4
        rounded-2xl
        p-4
        text-left
        transition-all
        duration-200
        hover:bg-slate-50
        ${
          !notification.read
            ? "bg-blue-50/60"
            : "bg-white"
        }
      `}
    >
      {/* Avatar */}
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
        <Image
          src={notification.avatar}
          alt={notification.user}
          fill
          sizes="56px"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <p className="text-[15px] leading-6 text-slate-700">
          <span className="font-semibold text-slate-900">
            {notification.user}
          </span>{" "}
          {notification.action}
        </p>

        <p className="mt-2 text-sm font-medium text-blue-600">
          {notification.time}
        </p>
      </div>

      {/* Read Indicator */}
      {!notification.read && (
        <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-blue-600" />
      )}
    </button>
  );
}