import Image from "next/image";

import { sidebarItems } from "@/data/sidebar";

import SidebarItem from "./SidebarItem";

export default function LeftSidebar() {
  return (
    <aside className="w-72">
      <div className="sticky top-24 space-y-6">
        {/* Current User */}
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <Image
              src="/images/users/user-1.png"
              alt="Obiakor Chinenye"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />

            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Obiakor Chinenye
              </h2>

              <p className="text-sm text-slate-600">
                Software Engineer
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
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