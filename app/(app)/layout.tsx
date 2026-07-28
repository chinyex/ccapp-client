import { ReactNode } from "react";

import AppNavbar from "@/components/layout/AppNavbar";
import LeftSidebar from "@/components/sidebar/LeftSidebar";
import RightSidebar from "@/components/sidebar/RightSidebar";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      <AppNavbar />

      <main className="mx-auto flex max-w-7xl gap-6 px-4 py-6">
        {/* Left Sidebar */}
        <div className="hidden lg:block">
          <LeftSidebar />
        </div>

        {/* Feed */}
        <section className="min-w-0 flex-1 lg:max-w-2xl">{children}</section>

        {/* Right Sidebar */}
        <div className="hidden lg:block">
          <RightSidebar />
        </div>
      </main>
    </div>
  );
}
