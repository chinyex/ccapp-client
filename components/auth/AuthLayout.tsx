import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">

        {/* ================= LEFT ================= */}
        <div className="flex items-center justify-center px-6 py-16">
          {children}
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 lg:flex items-center justify-center p-12">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10" />

          <div className="absolute right-20 bottom-20 h-24 w-24 rounded-full bg-white/10" />

          {/* Welcome Content */}
          <div className="relative z-10 max-w-lg text-center text-white">

            {/* Logo */}
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-2xl">
              <span className="text-3xl font-black text-blue-600">
                CC
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black tracking-tight">
              Welcome to
              <span className="block text-white">
                CCApp
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-blue-50">
              Connect with people, share your moments,
              and build meaningful relationships in a
              community that feels like home.
            </p>

            {/* Simple highlights */}
            <div className="mt-10 flex items-center justify-center gap-3">

              <div className="rounded-full bg-white/15 px-5 py-2 text-sm font-medium backdrop-blur-sm">
                Connect
              </div>

              <div className="rounded-full bg-white/15 px-5 py-2 text-sm font-medium backdrop-blur-sm">
                Share
              </div>

              <div className="rounded-full bg-white/15 px-5 py-2 text-sm font-medium backdrop-blur-sm">
                Belong
              </div>

            </div>

            {/* Bottom message */}
            <p className="mt-10 text-sm text-blue-100">
              Your people. Your moments. Your community.
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}