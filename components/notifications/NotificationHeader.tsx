type NotificationHeaderProps = {
  unreadCount: number;
};

export default function NotificationHeader({
  unreadCount,
}: NotificationHeaderProps) {
  return (
    <header className="mb-8 flex items-start justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Notifications
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          {unreadCount === 0
            ? "You're all caught up 🎉"
            : `You have ${unreadCount} unread notification${
                unreadCount > 1 ? "s" : ""
              }`}
        </p>
      </div>

      <button
        className="
          rounded-xl
          border
          border-slate-200
          bg-white
          px-4
          py-2
          text-sm
          font-semibold
          text-slate-700
          transition
          hover:bg-slate-100
        "
      >
        Mark all as read
      </button>
    </header>
  );
}