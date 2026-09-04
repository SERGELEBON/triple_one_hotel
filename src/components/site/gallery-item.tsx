import type { GalleryItem } from "./site-data";

export function GalleryTile({ item }: { item: GalleryItem }) {
  return (
    <figure className="group relative overflow-hidden bg-ink">
      <img
        src={item.src}
        alt={item.title}
        className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent px-5 py-4">
        <span className="block text-[0.62rem] uppercase tracking-[0.28em] text-white/60">
          {item.category}
        </span>
        <span className="block text-white font-semibold text-sm mt-0.5">
          {item.title}
        </span>
      </figcaption>
    </figure>
  );
}
