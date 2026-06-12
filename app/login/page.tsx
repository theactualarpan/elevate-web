"use client";

import Link from "next/link";
import AuthLayout from "@/components/auth/AuthLayout";
import FormField from "@/components/auth/FormField";
import GoogleButton from "@/components/auth/GoogleButton";
import Divider from "@/components/auth/Divider";

export default function LoginPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue your assessment journey."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
        />

        <FormField
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
        />

        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              name="remember"
              className="h-4 w-4 rounded border-gray-300 text-lavender focus:ring-lavender/30"
            />
            <span className="text-sm text-gray-600">Remember me</span>
          </label>
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-lavender hover:text-lavender/80"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-lavender px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-lavender/90 hover:shadow-md"
        >
          Login
        </button>

        <Divider />

        <GoogleButton />

        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-lavender hover:text-lavender/80">
            Register
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
