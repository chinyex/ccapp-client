import Button from "@/components/ui/Button";
import Link from "next/link";

import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <Container className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center justify-center px-6 py-20">
        <div className="max-w-3xl text-center">

          {/* Small Brand Mark */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-lg">
            <span className="text-2xl font-black text-white">
              CC
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Welcome to CCApp
          </h1>

          {/* Tagline */}
          <p className="mt-6 text-2xl font-semibold text-blue-600 sm:text-3xl">
            Connect. Share. Belong.
          </p>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A simple place to connect with people, share your
            moments, and build meaningful relationships.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/register">
              <Button size="lg">
                Get Started
              </Button>
            </Link>

            <Link href="/login">
              <Button
                variant="outline"
                size="lg"
              >
                Login
              </Button>
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}