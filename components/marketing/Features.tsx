import Container from "@/components/ui/Container";
import FeatureCard from "./Featurecard";

import {
  Users,
  PenSquare,
  MessageCircle,
  Bell,
  Search,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Build Connections",
    description:
      "Follow friends, creators, and communities that matter most to you.",
  },
  {
    icon: PenSquare,
    title: "Create Posts",
    description: "Share updates, photos, and memorable moments with ease.",
  },
  {
    icon: MessageCircle,
    title: "Meaningful Conversations",
    description: "Like, comment, and engage with your community in real time.",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description: "Stay updated whenever someone interacts with your content.",
  },
  {
    icon: Search,
    title: "Discover Communities",
    description:
      "Find new people, trending discussions, and communities that match your interests.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    description:
      "Modern authentication and privacy-first features keep your account safe.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Why Choose CCApp?
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Everything you need to build meaningful connections
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Connect, share, discover, and engage on a modern social platform
            built for meaningful interactions.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
