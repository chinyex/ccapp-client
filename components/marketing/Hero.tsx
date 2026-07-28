import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

import Container from "../ui/Container";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-300/20 blur-3xl" />
      </div>

      {/* Main Content */}
      <Container className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-20 lg:flex-row">
        {/* Left */}
        <div className="max-w-2xl">
          <Badge>✨ The Future of Social Connection</Badge>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
            Build Meaningful
            <br />
            Connections
            <br />
            Without Limits.
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Join communities, share your moments, discover amazing people, and
            build meaningful relationships on a modern social platform designed
            for everyone.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg">Get Started</Button>

            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right */}
        {/* Right */}
        <div className="flex w-full justify-center">
          <HeroPreview />
        </div>
      </Container>
    </section>
  );
}
