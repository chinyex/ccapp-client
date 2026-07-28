import Container from "@/components/ui/Container";
import StepCard from "./StepCard";

import { UserPlus, PenSquare, Users } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Create an Account",
    description:
      "Sign up in minutes and personalize your profile to let others know who you are.",
  },
  {
    step: "02",
    icon: PenSquare,
    title: "Share Your Moments",
    description:
      "Create posts, upload photos, and express your thoughts with your community.",
  },
  {
    step: "03",
    icon: Users,
    title: "Build Connections",
    description:
      "Follow people, engage in conversations, and grow meaningful relationships.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Get started in three simple steps
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Joining CCApp is quick and simple. From creating your profile to
            building lasting connections, everything is designed to feel
            effortless.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-20">
          {/* Timeline - Desktop */}
          <div className="absolute left-0 right-0 top-12 hidden h-1 bg-slate-200 lg:block" />

          <div className="relative grid gap-12 lg:grid-cols-3">
            {steps.map((step) => (
              <StepCard
                key={step.step}
                step={step.step}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}