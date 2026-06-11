export default function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-lavender/20 via-lavender-light/30 to-lavender-muted/50 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-lavender-light/40 bg-white p-6 shadow-xl shadow-lavender/10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-lavender">Skill Analytics</p>
            <p className="text-2xl font-bold text-gray-900">87%</p>
            <p className="text-xs text-gray-500">Overall readiness score</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lavender-muted">
            <svg className="h-6 w-6 text-lavender" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>

        <div className="mb-6 flex items-end justify-between gap-2">
          {[40, 65, 55, 80, 70, 90, 75].map((height, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-lavender to-lavender-light transition-all"
                style={{ height: `${height}px` }}
              />
              <span className="text-[10px] text-gray-400">
                {["M", "T", "W", "T", "F", "S", "S"][i]}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {[
            { label: "Quantitative Aptitude", progress: 92, color: "bg-lavender" },
            { label: "Logical Reasoning", progress: 78, color: "bg-lavender-light" },
            { label: "Career Readiness", progress: 85, color: "bg-lavender" },
          ].map((item) => (
            <div key={item.label}>
              <div className="mb-1 flex justify-between text-xs">
                <span className="font-medium text-gray-700">{item.label}</span>
                <span className="text-lavender">{item.progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-xl bg-lavender-muted/60 p-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lavender text-white">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Verified Certificate</p>
            <p className="text-xs text-gray-500">Industry-aligned assessment completed</p>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-lavender text-white shadow-lg">
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
        </svg>
      </div>

      <div className="absolute -bottom-3 -left-3 rounded-xl border border-lavender-light/50 bg-white px-4 py-2 shadow-md">
        <p className="text-xs font-medium text-gray-500">Career Growth</p>
        <p className="text-sm font-bold text-lavender">+24% this month</p>
      </div>
    </div>
  );
}
