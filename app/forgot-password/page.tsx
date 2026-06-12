"use client";

import Link from "next/link";
import AuthLayout from "@/components/auth/AuthLayout";
import FormField from "@/components/auth/FormField";

export default function ForgotPasswordPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your email and we'll send you a link to reset your password."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-lavender px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-lavender/90 hover:shadow-md"
        >
          Send Reset Link
        </button>

        <p className="text-center text-sm text-gray-600">
          Remember your password?{" "}
          <Link href="/login" className="font-semibold text-lavender hover:text-lavender/80">
            Back to Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
