"use client";

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import Button from "@/components/ui/Button";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      !fullName.trim() ||
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    // Backend registration will be connected here later.
    console.log({
      fullName,
      username,
      email,
      password,
    });
  };

  return (
    <div className="w-full max-w-md">
      <h1 className="text-4xl font-bold text-slate-900">
        Create Account
      </h1>

      <p className="mt-3 text-slate-600">
        Join ChiConnectly and start building meaningful
        connections.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >
        {/* Full Name */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Full Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            value={fullName}
            onChange={(event) =>
              setFullName(event.target.value)
            }
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Username */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Username
          </label>

          <input
            type="text"
            placeholder="@johndoe"
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Email
          </label>

          <input
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Password
          </label>

          <div className="relative">
            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="••••••••"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword((prev) => !prev)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Confirm Password
          </label>

          <div className="relative">
            <input
              type={
                showConfirm
                  ? "text"
                  : "password"
              }
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(
                  event.target.value
                )
              }
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirm((prev) => !prev)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
              aria-label={
                showConfirm
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
            >
              {showConfirm ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          className="w-full"
        >
          Create Account
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-600">
        Already have an account?{" "}

        <Link
          href="/login"
          className="font-semibold text-blue-600 hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
}