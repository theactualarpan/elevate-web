import Link from "next/link";
import Logo from "../Logo";

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
};

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-gray-100 bg-white/90 px-4 py-4 backdrop-blur-md sm:px-6">
        <Link href="/" className="inline-block">
          <Logo />
        </Link>
      </header>

      <div className="flex flex-1">
        <div className="relative hidden w-1/2 overflow-hidden bg-lavender lg:flex lg:flex-col lg:justify-between lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(255,255,255,0.15)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(196,181,253,0.3)_0%,_transparent_50%)]" />

          <div className="relative">
            <p className="text-sm font-medium uppercase tracking-wider text-lavender-light">
              Welcome to Elevate
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white xl:text-4xl">
              Measure • Learn • Grow
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-lavender-light/90">
              Join thousands of students and colleges using industry-aligned
              assessments to discover potential and elevate careers.
            </p>
          </div>

          <div className="relative space-y-4">
            {[
              "10,000+ practice questions",
              "Verified certificates",
              "Unlimited attempts",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-white/90">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col justify-center px-4 py-10 sm:px-6 lg:w-1/2 lg:px-12 xl:px-20">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8 lg:mb-10">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {title}
              </h1>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">{subtitle}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
