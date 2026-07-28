import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
  preview: ReactNode;
};

export default function AuthLayout({
  children,
  preview,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Left */}
        <div className="flex items-center justify-center px-6 py-16">
          {children}
        </div>

        {/* Right */}
        <div className="hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 lg:flex items-center justify-center p-12">
          {preview}
        </div>
      </div>
    </main>
  );
}