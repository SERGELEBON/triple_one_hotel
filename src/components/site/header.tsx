"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { TopBar } from "./top-bar";
import { NAV_LINKS } from "./site-data";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the slide menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40">
        <TopBar />
        <div
          className={`bg-white/95 backdrop-blur border-b transition-shadow duration-300 ${
            scrolled ? "border-pearl shadow-sm" : "border-transparent"
          }`}
        >
          <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-[72px]">
            <Logo variant="dark" />
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[0.82rem] font-semibold uppercase tracking-[0.12em] transition-colors ${
                      active
                        ? "text-brand"
                        : "text-ink hover:text-brand"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link href="/contact-us" className="btn-cta">
                Book Online
              </Link>
            </nav>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center text-ink hover:text-brand transition-colors"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide menu */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <aside className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl animate-slide-in-right flex flex-col">
            <div className="flex items-center justify-between h-[72px] px-6 border-b border-pearl">
              <Logo variant="dark" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center text-ink hover:text-brand transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto scroll-thin px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between py-3 px-3 -mx-3 rounded-sm text-sm font-semibold uppercase tracking-[0.12em] transition-colors ${
                      active
                        ? "bg-cream text-brand"
                        : "text-ink hover:bg-cream hover:text-brand"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link href="/contact-us" onClick={closeMenu} className="btn-cta mt-5 w-full">
                Book Online
              </Link>
              <a
                href="tel:+233540231074"
                className="mt-6 flex items-center gap-3 text-ink"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-frame text-brand">
                  <FaPhone className="text-sm" />
                </span>
                <span className="text-sm font-semibold">+233 (0)540 231 074</span>
              </a>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
