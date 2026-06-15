"use client";

import Link from "next/link";
import AuthLayout from "@/components/auth/AuthLayout";
import FormField from "@/components/auth/FormField";
import GoogleButton from "@/components/auth/GoogleButton";
import Divider from "@/components/auth/Divider";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const genderOptions = ["Male", "Female", "Other"] as const;

export default function RegisterPage() {
  const router = useRouter();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const fullName = (
      form.elements.namedItem("fullName") as HTMLInputElement
    ).value;

    const gender = (
      form.elements.namedItem("gender") as RadioNodeList
    ).value;

    const userType = (
      form.elements.namedItem("userType") as HTMLSelectElement
    ).value;

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value;

    const password = (
      form.elements.namedItem("password") as HTMLInputElement
    ).value;

    const confirmPassword = (
      form.elements.namedItem("confirmPassword") as HTMLInputElement
    ).value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", userCredential.user.uid), {
        uid: userCredential.user.uid,
        fullName,
        gender,
        userType,
        email,
        createdAt: new Date().toISOString(),
      });

      router.push("/dashboard");
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start measuring skills and elevating your career today."
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <FormField
          id="fullName"
          label="Full Name"
          placeholder="John Doe"
          autoComplete="name"
        />

        <fieldset>
          <legend className="block text-sm font-medium text-gray-700">
            Gender
          </legend>

          <div className="mt-2 flex flex-wrap gap-3">
            {genderOptions.map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 transition-colors has-[:checked]:border-lavender has-[:checked]:bg-lavender-muted/50 has-[:checked]:text-lavender"
              >
                <input
                  type="radio"
                  name="gender"
                  value={option.toLowerCase()}
                  className="h-4 w-4 border-gray-300 text-lavender focus:ring-lavender/30"
                  required
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>

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
          placeholder="Create a password"
          autoComplete="new-password"
        />

        <FormField
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          autoComplete="new-password"
        />

        <div>
          <label
            htmlFor="userType"
            className="block text-sm font-medium text-gray-700"
          >
            User Type
          </label>

          <select
            id="userType"
            name="userType"
            required
            defaultValue=""
            className="mt-1.5 block w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 transition-colors focus:border-lavender focus:outline-none focus:ring-2 focus:ring-lavender/20"
          >
            <option value="" disabled>
              Select user type
            </option>

            <option value="student">Student</option>
            <option value="college">College</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-lavender px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-lavender/90 hover:shadow-md"
        >
          Register
        </button>

        <Divider />

        <GoogleButton />

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-lavender hover:text-lavender/80"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}