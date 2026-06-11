const stats = [
  { value: "10,000+", label: "Questions" },
  { value: "5", label: "Assessment Categories" },
  { value: "100+", label: "Topics Covered" },
  { value: "Unlimited", label: "Practice Attempts" },
];

export default function Statistics() {
  return (
    <section className="relative overflow-hidden bg-lavender py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.12)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(196,181,253,0.2)_0%,_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-lavender-light sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
