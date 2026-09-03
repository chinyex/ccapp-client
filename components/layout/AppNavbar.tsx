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
  { label: "Feed", href: "/feed", icon: Home },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Communities", href: "/communities", icon: Users },
  { label: "Messages", href: "/messages", icon: MessageCircle },
  { label: "Notifications", href: "/notifications", icon: Bell },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className="
          fixed
          inset-x-0
          top-0
          z-50
          border-b
          border-slate-200/70
          bg-white/85
          shadow-sm
          backdrop-blur-xl
          supports-[backdrop-filter]:bg-white/75
        "
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4">
          {/* Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="rounded-lg p-2 text-black transition hover:bg-slate-100 md:hidden"
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
          <div className="mx-10 hidden flex-1 lg:flex">
            <div
              className="
                flex
                w-full
                max-w-lg
                items-center
                gap-3
                rounded-full
                border
                border-slate-200
                bg-slate-50
                px-5
                py-3
                transition-all
                duration-300
                focus-within:border-blue-500
                focus-within:bg-white
                focus-within:shadow-lg
              "
            >
              <Search className="h-5 w-5 text-slate-500" />

              <input
                type="text"
                placeholder="Search people, posts, communities..."
                className="
                  w-full
                  bg-transparent
                  text-sm
                  text-slate-900
                  placeholder:text-slate-500
                  outline-none
                "
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="ml-auto hidden items-center gap-3 md:flex">
            <Link href="/feed">
              <div className="rounded-xl p-2.5 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:scale-95">
                <Home className="h-6 w-6 text-slate-600" />
              </div>
            </Link>

            <Link href="/communities">
              <div className="rounded-xl p-2.5 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:scale-95">
                <Users className="h-6 w-6 text-slate-600" />
              </div>
            </Link>

            <Link href="/messages">
              <div className="rounded-xl p-2.5 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:scale-95">
                <MessageCircle className="h-6 w-6 text-slate-600" />
              </div>
            </Link>

            <Link href="/notifications">
              <div className="relative rounded-xl p-2.5 transition-all duration-200 hover:bg-blue-50 active:scale-95">
                <Bell className="h-6 w-6 text-slate-600" />

                <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
              </div>
            </Link>

            <div className="cursor-pointer rounded-full transition hover:scale-105">
              <Avatar name="Obiakor Chinenye" size="sm" />
            </div>
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
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setIsMenuOpen(false)}
          />

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
                  <Icon className="h-6 w-6 text-slate-700 transition group-hover:text-blue-600" />

                  <span className="text-[16px] font-semibold text-slate-900 group-hover:text-blue-600">
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
