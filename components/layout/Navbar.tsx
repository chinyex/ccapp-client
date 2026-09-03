"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const navLinks = [
  {
    label: "Community",
    href: "/communities",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <Container className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-blue-600"
        >
          CCApp
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login">
            <Button variant="secondary">
              Login
            </Button>
          </Link>

          <Link href="/register">
            <Button>
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6">

            {/* Navigation */}
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-700 transition-colors hover:text-blue-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Buttons */}
            <div className="flex flex-col gap-3 border-t border-slate-200 pt-4">

              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
              >
                <Button
                  variant="secondary"
                  className="w-full"
                >
                  Login
                </Button>
              </Link>

              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
              >
                <Button
                  className="w-full"
                >
                  Get Started
                </Button>
              </Link>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}