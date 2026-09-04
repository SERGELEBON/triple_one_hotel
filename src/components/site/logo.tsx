import Link from "next/link";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 64"
      className={className}
      role="img"
      aria-label="Triple One Hotel logo"
      fill="none"
    >
      {/* Left peak — light purple */}
      <path
        d="M10 56 L26 14 L42 56 Z"
        fill="#6A4AA8"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Right peak — red accent */}
      <path
        d="M58 56 L74 14 L90 56 Z"
        fill="#E4402C"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Center peak — brand purple (tallest, on top) */}
      <path
        d="M30 56 L50 2 L70 56 Z"
        fill="#4B2E83"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const titleColor = variant === "dark" ? "text-ink" : "text-white";
  const subColor = variant === "dark" ? "text-brand" : "text-white/80";
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-9 w-14 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-extrabold tracking-tight text-[1.05rem] sm:text-[1.15rem] ${titleColor}`}
          style={{ letterSpacing: "0.04em" }}
        >
          TRIPLE ONE
        </span>
        <span
          className={`text-[0.62rem] font-semibold tracking-[0.42em] mt-1 ${subColor}`}
        >
          HOTEL
        </span>
      </span>
    </Link>
  );
}
