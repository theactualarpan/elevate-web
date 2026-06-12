import Link from "next/link";
import HeroIllustration from "./HeroIllustration";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-lavender-muted/60 via-white to-white" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lavender-light/60 bg-lavender-muted/50 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-lavender" />
              <span className="text-sm font-medium text-lavender">
                Trusted by students & colleges
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Measure Skills.{" "}
              <span className="text-lavender">Discover Potential.</span>{" "}
              Elevate Careers.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Industry-aligned assessments and verified certifications for
              students, colleges and future professionals.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-lg bg-lavender px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-lavender/25 transition-all hover:bg-lavender/90 hover:shadow-lg hover:shadow-lavender/30"
              >
                Start Assessment
              </Link>
              <a
                href="#assessments"
                className="inline-flex items-center justify-center rounded-lg border-2 border-lavender-light bg-white px-7 py-3.5 text-sm font-semibold text-lavender transition-all hover:border-lavender hover:bg-lavender-muted/40"
              >
                Explore Categories
              </a>
            </div>
          </div>

          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
