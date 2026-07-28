import Card from "@/components/ui/Card";
import { LucideIcon } from "lucide-react";

type StepCardProps = {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function StepCard({
  step,
  icon: Icon,
  title,
  description,
}: StepCardProps) {
  return (
    <Card className="relative h-full p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Step Number */}
      <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-lg">
        {step}
      </div>

      {/* Icon */}
      <div className="mx-auto mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-slate-900">{title}</h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </Card>
  );
}
