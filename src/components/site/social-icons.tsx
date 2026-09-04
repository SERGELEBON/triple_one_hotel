import Link from "next/link";
import { HOTEL } from "./site-data";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const items = [
  { key: "facebook", href: HOTEL.social.facebook, Icon: FaFacebookF, label: "Facebook" },
  { key: "instagram", href: HOTEL.social.instagram, Icon: FaInstagram, label: "Instagram" },
  { key: "whatsapp", href: HOTEL.social.whatsapp, Icon: FaWhatsapp, label: "WhatsApp" },
];

export function SocialIcons({
  variant = "light",
  size = "md",
}: {
  variant?: "light" | "dark";
  size?: "sm" | "md";
}) {
  const border = variant === "light" ? "border-white/40" : "border-frame";
  const hoverBg = variant === "light" ? "hover:bg-white hover:text-ink" : "hover:bg-brand hover:text-white";
  const text = variant === "light" ? "text-white" : "text-ink";
  const dims = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const iconSize = size === "sm" ? "text-xs" : "text-sm";
  return (
    <div className="flex items-center gap-3">
      {items.map(({ key, href, Icon, label }) => (
        <Link
          key={key}
          href={href}
          aria-label={label}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`inline-flex ${dims} items-center justify-center rounded-full border ${border} ${text} ${hoverBg} transition-colors duration-200`}
        >
          <Icon className={iconSize} />
        </Link>
      ))}
    </div>
  );
}
