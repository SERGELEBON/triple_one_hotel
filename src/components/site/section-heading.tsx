import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  variant = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
  variant?: "dark" | "light";
  className?: string;
}) {
  const titleColor = variant === "dark" ? "text-ink" : "text-white";
  const eyebrowColor = variant === "dark" ? "text-brand" : "text-white/70";
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.32em]",
            eyebrowColor
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={cn("section-title text-3xl md:text-[2.4rem]", titleColor)}>
        {title}
      </h2>
    </div>
  );
}
