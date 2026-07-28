import Link from "next/link";

import AuthHeader from "./AuthHeader";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginForm() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
      <AuthHeader
        title="Welcome Back 👋"
        subtitle="Sign in to continue building meaningful connections."
      />

      <form className="mt-8 space-y-5">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <Button type="submit" className="w-full">
          Login
        </Button>

        <div className="text-right">
          <Link
            href="#"
            className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />

          <span className="text-sm text-slate-500">OR</span>

          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <Button variant="outline" type="button" className="w-full">
          Continue with Google
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-600">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-blue-600 transition hover:text-blue-700"
        >
          Create one
        </Link>
      </p>
    </div>
  );
}