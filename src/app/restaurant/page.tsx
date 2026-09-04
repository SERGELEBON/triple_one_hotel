import Link from "next/link";
import { SiteShell } from "@/components/site/site-shell";
import { PageBanner } from "@/components/site/page-banner";
import { SectionHeading } from "@/components/site/section-heading";
import { CULINARY } from "@/components/site/site-data";
import { FaClock, FaUtensils, FaArrowRight } from "react-icons/fa";

export const metadata = {
  title: "Dinning | Triple One Hotel",
  description:
    "Dine at Triple One Hotel — authentic Ghanaian cuisine, continental favourites and fresh grilled seafood, served daily by our chef.",
};

export default function RestaurantPage() {
  return (
    <SiteShell>
      <PageBanner
        title="Dinning"
        image="/images/restaurant.png"
        crumb="Dinning"
      />

      {/* Intro */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-brand">
              A Taste of Ghana
            </span>
            <h2 className="section-title text-ink text-3xl md:text-[2.6rem] leading-tight">
              The Triple One Kitchen
            </h2>
            <div className="flex flex-col gap-4 text-textgray leading-relaxed">
              <p>
                Our on-site restaurant welcomes guests and visitors to a warm,
                elegant setting where local tradition meets continental craft.
                Each dish is prepared fresh by our chef using quality
                ingredients and a generous helping of Ghanaian hospitality.
              </p>
              <p>
                From a hearty breakfast to a relaxed dinner, every meal at
                Triple One is an invitation to slow down and savour the moment —
                whether you are celebrating, meeting, or simply unwinding after
                a day of travel.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2 text-sm text-ink">
                <FaClock className="text-brand" />
                <span className="font-semibold">Open Daily</span>
                <span className="text-textgray">7:00 AM – 10:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-ink">
                <FaUtensils className="text-brand" />
                <span className="font-semibold">Breakfast &middot; Lunch &middot; Dinner</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 photo-frame">
            <div className="photo-frame__inner">
              <img
                src="/images/restaurant.png"
                alt="Triple One Hotel restaurant"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Culinary offerings */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <SectionHeading
            eyebrow="Our Menu"
            title="Our Culinary Offerings"
            align="center"
          />
          <p className="mx-auto mt-5 max-w-2xl text-center text-textgray leading-relaxed">
            A curated selection of dishes celebrating local flavour and
            continental classics.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {CULINARY.map((c) => (
              <article key={c.name} className="bg-white border border-pearl overflow-hidden flex flex-col">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-60 w-full object-cover"
                />
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-base font-bold uppercase tracking-[0.06em] text-brand">
                    {c.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-textgray flex-1">
                    {c.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14 flex justify-center">
            <Link href="/contact-us" className="btn-cta">
              Reserve a Table
              <FaArrowRight className="text-[0.7rem]" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
