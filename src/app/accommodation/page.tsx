import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { PageBanner } from "@/components/site/page-banner";
import { RoomCard } from "@/components/site/room-card";
import { ROOMS, HOTEL } from "@/components/site/site-data";
import { FaWifi, FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Accommodations | Triple One Hotel",
  description:
    "Explore our six room categories at Triple One Hotel — from cozy Standard rooms to the opulent VIP Suite. Cozy rooms for long and short stays in Ghana.",
};

export default function AccommodationPage() {
  return (
    <SiteShell>
      <PageBanner
        title="Accommodations"
        image="/images/room-suite.png"
        crumb="Accommodations"
      />

      {/* Intro */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand">
            Where You&apos;ll Stay
          </span>
          <h2 className="section-title text-ink text-3xl md:text-[2.4rem] mt-3">
            Rooms &amp; Suites
          </h2>
          <p className="mt-5 text-textgray leading-relaxed">
            Every room at Triple One Hotel is designed for rest and ease. Choose
            from six categories — each with complimentary Wi-Fi, warm finishes
            and the thoughtful touches that make a stay feel like home. Prices
            are per night in {HOTEL.currency} (Ghanaian Cedi).
          </p>
        </div>
      </section>

      {/* Room cards grid */}
      <section className="bg-ivory pb-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-textgray text-sm">
            Ready to reserve your room? Contact our front desk to book.
          </p>
          <Link href="/contact-us" className="btn-cta">
            Book Online
            <FaArrowRight className="text-[0.7rem]" />
          </Link>
        </div>
      </section>

      {/* Amenities strip */}
      <section className="bg-white border-t border-pearl">
        <div className="mx-auto max-w-7xl px-6 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            { t: "Complimentary Wi-Fi", d: "High-speed internet in every room" },
            { t: "Daily Housekeeping", d: "Fresh linens and a tidy space" },
            { t: "24/7 Front Desk", d: "Assistance any time of day" },
            { t: "Long & Short Stays", d: "Flexible durations for every guest" },
          ].map((a) => (
            <div key={a.t} className="flex flex-col items-center gap-2 px-2">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-brand">
                <FaWifi />
              </span>
              <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-ink">
                {a.t}
              </h3>
              <p className="text-xs text-textgray">{a.d}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
