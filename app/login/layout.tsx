import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Elevate",
  description: "Sign in to your Elevate account to access assessments and certifications.",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
