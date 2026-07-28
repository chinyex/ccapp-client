"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  Home,
  Menu,
  MessageCircle,
  Search,
  Settings,
  User,
  Users,
  X,
} from "lucide-react";

import Avatar from "@/components/ui/Avatar";

const mobileLinks = [
  {
    label: "Feed",
    href: "/feed",
    icon: Home,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    label: "Communities",
    href: "/communities",
    icon: Users,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: MessageCircle,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="rounded-lg p-2 hover:bg-slate-100 md:hidden text-black"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <Link
            href="/feed"
            className="ml-2 text-2xl font-bold text-blue-600 md:ml-0"
          >
            CCApp
          </Link>

          {/* Search */}
          <div className="mx-8 hidden flex-1 md:flex">
            <div className="flex w-full max-w-md items-center gap-3 rounded-full bg-slate-100 px-4 py-2">
              <Search className="h-5 w-5 text-slate-500" />

              <input
                type="text"
                placeholder="Search people, posts..."
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="ml-auto hidden items-center gap-6 md:flex">
            <Link href="/feed">
              <Home className="h-6 w-6 cursor-pointer text-slate-600 transition hover:text-blue-600" />
            </Link>

            <Link href="/communities">
              <Users className="h-6 w-6 cursor-pointer text-slate-600 transition hover:text-blue-600" />
            </Link>

            <Link href="/messages">
              <MessageCircle className="h-6 w-6 cursor-pointer text-slate-600 transition hover:text-blue-600" />
            </Link>

            <Link href="/notifications">
              <Bell className="h-6 w-6 cursor-pointer text-slate-600 transition hover:text-blue-600" />
            </Link>

            <Avatar name="Obiakor Chinenye" size="sm" />
          </nav>

          {/* Mobile Avatar */}
          <div className="ml-auto md:hidden">
            <Avatar name="Obiakor Chinenye" size="sm" />
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer */}
          <aside className="fixed left-0 top-0 z-50 flex h-full w-80 flex-col border-r border-slate-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b p-5">
              <h2 className="text-xl font-bold text-blue-600">CCApp</h2>

              <button
                onClick={() => setIsMenuOpen(false)}
               className="rounded-full p-2 transition hover:bg-slate-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex items-center gap-4 border-b p-6">
              <Avatar name="Obiakor Chinenye" size="lg" />

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Obiakor Chinenye
                </h3>

                <p className="text-sm text-slate-500">Software Engineer</p>
              </div>
            </div>

            <nav className="flex-1 p-3">
              {mobileLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group mb-2 flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-200 hover:bg-blue-50"
                >
                  <Icon className="h-6 w-6 text-slate-700 transition-colors duration-200 group-hover:text-blue-600" />

                  <span className="text-[16px] font-semibold tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-blue-600">
                    {label}
                  </span>
                </Link>
              ))}
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
