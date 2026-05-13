"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const [pos, setPos] = useState(50); // percentage 0–100
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  /* ── Mouse ── */
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    updatePos(e.clientX);
    const onMove = (ev: MouseEvent) => { if (dragging.current) updatePos(ev.clientX); };
    const onUp = () => { dragging.current = false; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  /* ── Touch ── */
  const onTouchStart = (e: React.TouchEvent) => {
    updatePos(e.touches[0].clientX);
    const onMove = (ev: TouchEvent) => updatePos(ev.touches[0].clientX);
    const onEnd = () => { window.removeEventListener("touchmove", onMove); window.removeEventListener("touchend", onEnd); };
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onEnd);
  };

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden aspect-[3/4] md:aspect-[4/3] cursor-col-resize"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* After (base layer — full width) */}
      <div className="absolute inset-0">
        <Image
          src="/images/IMG_3923.jpg"
          alt="After — balayage result at Mélo"
          fill
          sizes="(max-width: 768px) 100vw, 70vw"
          className="object-cover object-top pointer-events-none"
          draggable={false}
        />
        <span className="absolute bottom-4 right-4 bg-brand-pink-deep text-brand-cream font-display text-xs tracking-display uppercase px-3 py-1.5 z-10">
          After
        </span>
      </div>

      {/* Before (clipped to left side) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src="/images/IMG_3922.jpg"
          alt="Before — hair transformation at Mélo"
          fill
          sizes="(max-width: 768px) 100vw, 70vw"
          className="object-cover object-top pointer-events-none"
          draggable={false}
        />
        <span className="absolute bottom-4 left-4 bg-brand-ink text-brand-cream font-display text-xs tracking-display uppercase px-3 py-1.5 z-10">
          Before
        </span>
      </div>

      {/* Divider line */}
      <div
        className="absolute inset-y-0 z-20 pointer-events-none"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-px h-full bg-white/80 shadow-[0_0_6px_rgba(0,0,0,0.4)]" />
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center gap-1">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M4 7H1M10 7h3M7 4V1M7 10v3" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M2.5 5L1 7l1.5 2M11.5 5L13 7l-1.5 2" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Hint text (fades after interaction) */}
      <div className="absolute inset-x-0 bottom-14 flex justify-center z-10 pointer-events-none">
        <span className="font-display text-xs tracking-display uppercase text-white/60 bg-black/20 backdrop-blur-sm px-3 py-1">
          Drag to compare
        </span>
      </div>
    </div>
  );
}
