"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaPlay } from "react-icons/fa";

export function VideoSection() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
      <img
        src="/images/video-poster.png"
        alt="Aerial view of Triple One Hotel"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="relative h-full mx-auto max-w-7xl px-6 flex flex-col items-center justify-center text-center gap-6">
        <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
          Discover Triple One
        </span>
        <h2 className="section-title text-white text-3xl md:text-[2.6rem] max-w-2xl">
          Take a closer look at our hotel
        </h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              type="button"
              aria-label="Play video"
              className="group inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-xl transition-transform hover:scale-105"
            >
              <span className="absolute h-20 w-20 rounded-full bg-brand/40 animate-ping" />
              <FaPlay className="text-xl translate-x-0.5" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl border-0 p-0 overflow-hidden bg-ink">
            <img
              src="/images/video-poster.png"
              alt="Triple One Hotel aerial view"
              className="w-full h-auto"
            />
            <div className="p-5 text-center">
              <p className="section-title text-white text-xl">
                A bird&apos;s-eye view of Triple One Hotel
              </p>
              <p className="text-white/60 text-sm mt-1">
                Full video tour coming soon.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
