import Link from "next/link";
import { RoomCard } from "../room-card";
import { SectionHeading } from "../section-heading";
import { ROOMS } from "../site-data";
import { FaChevronRight } from "react-icons/fa";

export function RoomsSection() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Stay With Us"
          title="Our Rooms"
          align="center"
        />
        <p className="mx-auto mt-5 max-w-2xl text-center text-textgray leading-relaxed">
          Six thoughtfully designed room categories — from cozy standard rooms
          to our opulent VIP suite. Each room blends warm finishes, modern
          comfort and complimentary Wi-Fi.
        </p>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {ROOMS.slice(0, 6).map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Link
            href="/accommodation"
            className="inline-flex items-center gap-2 text-[0.8rem] font-bold uppercase tracking-[0.16em] text-brand hover:text-brand-dark transition-colors"
          >
            View All Rooms
            <FaChevronRight className="text-[0.7rem]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
