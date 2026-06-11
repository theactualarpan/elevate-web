type LogoProps = {
  variant?: "default" | "footer";
};

export default function Logo({ variant = "default" }: LogoProps) {
  const isFooter = variant === "footer";

  return (
    <div className="flex flex-col">
      <span
        className={`font-bold tracking-tight ${
          isFooter ? "text-xl text-white" : "text-2xl text-lavender"
        }`}
      >
        Elevate
      </span>
      <span
        className={`text-xs tracking-widest uppercase ${
          isFooter ? "text-lavender-light/80" : "text-gray-500"
        }`}
      >
        Measure • Learn • Grow
      </span>
    </div>
  );
}
