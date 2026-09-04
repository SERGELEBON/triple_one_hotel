import { SiteShell } from "@/components/site/site-shell";
import { PageBanner } from "@/components/site/page-banner";
import { SectionHeading } from "@/components/site/section-heading";
import { GalleryGrid } from "@/components/site/sections/gallery-grid";
import { VideoSection } from "@/components/site/sections/video";

export const metadata = {
  title: "Gallery | Triple One Hotel",
  description:
    "Browse our gallery — rooms, Event Garden, Conference Hall and hotel facilities at Triple One Hotel in Ghana.",
};

export default function GalleryPage() {
  return (
    <SiteShell>
      <PageBanner
        title="Gallery"
        image="/images/gallery-lobby.png"
        crumb="Gallery"
      />

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <SectionHeading
            eyebrow="A Picture of Comfort"
            title="Triple One Hotel Gallery"
            align="center"
          />
          <p className="mx-auto mt-5 max-w-2xl text-center text-textgray leading-relaxed">
            Explore our rooms, event spaces and facilities. Filter by category
            to find exactly what you&apos;re looking for.
          </p>
          <div className="mt-14">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <VideoSection />
    </SiteShell>
  );
}
