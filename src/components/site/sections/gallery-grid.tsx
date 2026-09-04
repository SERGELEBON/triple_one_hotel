"use client";

import { useState } from "react";
import { GALLERY, GALLERY_FILTERS } from "../site-data";
import { GalleryTile } from "../gallery-item";

export function GalleryGrid() {
  const [active, setActive] = useState<(typeof GALLERY_FILTERS)[number]>("All");
  const items =
    active === "All"
      ? GALLERY
      : GALLERY.filter((g) => g.category === active);

  return (
    <div className="flex flex-col gap-10">
      {/* Filter tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {GALLERY_FILTERS.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 text-[0.76rem] font-bold uppercase tracking-[0.14em] border transition-colors ${
                isActive
                  ? "bg-brand text-white border-brand"
                  : "bg-white text-ink border-frame hover:border-brand hover:text-brand"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <GalleryTile key={it.src} item={it} />
        ))}
      </div>
      {items.length === 0 && (
        <p className="text-center text-textgray">No items in this category yet.</p>
      )}
    </div>
  );
}
