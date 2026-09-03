import Image from "next/image";
import { Users, FileText, Layers3 } from "lucide-react";

import { sidebarItems } from "@/data/sidebar";

import SidebarItem from "./SidebarItem";

export default function LeftSidebar() {
  return (
    <aside className="w-72">
      <div className="space-y-6">
        {/* Profile Card */}
        <section
          className="
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-sm
          "
        >
          {/* Cover */}
          <div className="h-20 bg-linear-to-r from-blue-600 via-sky-500 to-cyan-400" />

          {/* Profile */}
          <div className="-mt-10 px-5 pb-5">
            <Image
              src="/images/users/user-1.png"
              alt="Obiakor Chinenye"
              width={80}
              height={80}
              className="
                rounded-full
                border-4
                border-white
                object-cover
                shadow-lg
              "
            />

            <h2 className="mt-4 text-lg font-bold text-slate-900">
              Obiakor Chinenye
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              Full Stack Developer
            </p>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-slate-50 p-3">
                <FileText className="mx-auto mb-2 h-5 w-5 text-blue-600" />

                <p className="text-lg font-bold text-slate-900">24</p>

                <p className="text-xs text-slate-500">Posts</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-3">
                <Users className="mx-auto mb-2 h-5 w-5 text-green-600" />

                <p className="text-lg font-bold text-slate-900">180</p>

                <p className="text-xs text-slate-500">Friends</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-3">
                <Layers3 className="mx-auto mb-2 h-5 w-5 text-orange-500" />

                <p className="text-lg font-bold text-slate-900">12</p>

                <p className="text-xs text-slate-500">Groups</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section
          className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-3
            shadow-sm
          "
        >
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.id}
              item={item}
            />
          ))}
        </section>
      </div>
    </aside>
  );
}