import Link from "next/link";
import type { Room } from "./site-data";
import { HOTEL } from "./site-data";
import { FaWifi, FaArrowRight } from "react-icons/fa";

export function RoomCard({ room }: { room: Room }) {
  return (
    <article className="flex flex-col bg-white">
      <div className="photo-frame">
        <div className="photo-frame__inner relative">
          <img
            src={room.image}
            alt={room.name}
            className="h-60 w-full object-cover"
          />
          {/* Wi-Fi badge */}
          <span className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand shadow-sm border border-pearl">
            <FaWifi className="text-xs" />
          </span>
          {/* Price badge */}
          <span className="absolute bottom-3 left-3 bg-brand text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
            {HOTEL.currency}
            {room.price} <span className="font-medium opacity-80">/ night</span>
          </span>
        </div>
      </div>
      <div className="pt-5 flex flex-col gap-3">
        <div className="flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.16em] text-textgray font-semibold">
          <span>{room.beds}</span>
          <span className="h-1 w-1 rounded-full bg-pearl" />
          <span>{room.size}</span>
        </div>
        <h3 className="text-lg font-bold uppercase tracking-[0.06em] text-brand">
          {room.name}
        </h3>
        <p className="text-sm leading-relaxed text-textgray">{room.description}</p>
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-ink hover:text-brand transition-colors mt-1"
        >
          Book Now
          <FaArrowRight className="text-[0.7rem]" />
        </Link>
      </div>
    </article>
  );
}
