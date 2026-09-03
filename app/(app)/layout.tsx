import { ReactNode } from "react";

import AppNavbar from "@/components/layout/AppNavbar";
import LeftSidebar from "@/components/sidebar/LeftSidebar";
import RightSidebar from "@/components/sidebar/RightSidebar";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <AppNavbar />

      <main
        className="
          mx-auto
          flex
          w-full
          max-w-7xl
          gap-8
          px-4
          pb-8
          pt-24
        "
      >
        {/* Left Sidebar */}
        <aside
          className="
            hidden
            lg:block
            w-72
            shrink-0
          "
        >
          <div className="sticky top-24">
            <LeftSidebar />
          </div>
        </aside>

        {/* Feed */}
        <section
          className="
            w-full
            max-w-2xl
            flex-1
            min-w-0
          "
        >
          {children}
        </section>

        {/* Right Sidebar */}
        <aside
          className="
            hidden
            lg:block
            w-80
            shrink-0
          "
        >
          <div className="sticky top-24">
            <RightSidebar />
          </div>
        </aside>
      </main>
    </div>
  );
}