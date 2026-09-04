import Link from "next/link";
import { SectionHeading } from "../section-heading";
import { GalleryTile } from "../gallery-item";
import { GALLERY } from "../site-data";
import { FaChevronRight } from "react-icons/fa";

export function GalleryPreviewSection() {
  const items = GALLERY.slice(0, 4);
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="A Glimpse Inside"
          title="Triple One Hotel Gallery"
          align="center"
        />
        <p className="mx-auto mt-5 max-w-2xl text-center text-textgray leading-relaxed">
          From cozy rooms to our lush Event Garden and modern Conference Hall —
          explore the spaces that make Triple One Hotel special.
        </p>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <GalleryTile key={it.src} item={it} />
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-[0.8rem] font-bold uppercase tracking-[0.16em] text-brand hover:text-brand-dark transition-colors"
          >
            View Full Gallery
            <FaChevronRight className="text-[0.7rem]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
