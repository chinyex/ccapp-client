import { Image, Smile, Video, BarChart3 } from "lucide-react";

import Avatar from "@/components/ui/Avatar";

export default function CreatePost() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">
      {/* Top */}
      <div className="flex items-center gap-4">
        <Avatar name="Obiakor Chinenye" size="md" />

        <button className="flex-1 rounded-full bg-slate-100 px-5 py-3 text-left text-slate-500 transition hover:bg-slate-200">
          Share something with your community...
        </button>
      </div>

      <div className="my-5 border-t" />

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <button className="flex items-center justify-center gap-2 rounded-xl py-3 transition hover:bg-slate-100">
          <Image className="h-5 w-5 text-green-600" />
          <span className="text-[15px] font-semibold text-slate-900">
            Photo
          </span>
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl py-3 transition hover:bg-slate-100">
          <Video className="h-5 w-5 text-red-500" />
          <span className="text-[15px] font-semibold text-slate-900">
            Video
          </span>
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl py-3 transition hover:bg-slate-100">
          <BarChart3 className="h-5 w-5 text-orange-500" />
          <span className="text-[15px] font-semibold text-slate-900">Poll</span>
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl py-3 transition hover:bg-slate-100">
          <Smile className="h-5 w-5 text-yellow-500" />
          <span className="text-[15px] font-semibold text-slate-900">
            Feeling
          </span>
        </button>
      </div>
    </section>
  );
}
