import { Bell } from "lucide-react";
import Link from "next/link";

import Button from "@/components/ui/Button";

export default function EmptyNotifications() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white px-8 py-20 text-center shadow-sm">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
        <Bell className="h-10 w-10 text-blue-600" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-900">
        You&apos;re all caught up!
      </h2>

      <p className="mt-3 max-w-md text-slate-500 leading-7">
        No new notifications right now. When someone likes your posts, comments,
        follows you, or mentions you, they&apos;ll appear here..
      </p>

      <Link href="/feed" className="mt-8">
        <Button>Back to Feed</Button>
      </Link>
    </div>
  );
}
