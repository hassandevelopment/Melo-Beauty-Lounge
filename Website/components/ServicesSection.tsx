"use client";

import { useState } from "react";
import type { ServiceCategory } from "@/lib/services";

function formatPrice(price: number | string): string {
  return `BD ${price}`;
}

export default function ServicesSection({ services }: { services: ServiceCategory[] }) {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active)!;

  return (
    <div className="bg-brand-bg">
      {/* Sticky category tabs */}
      <div className="sticky top-16 z-40 bg-brand-bg border-b border-brand-pink/30 overflow-x-auto">
        <div className="max-w-site mx-auto px-6 flex gap-0">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex-shrink-0 font-display text-xs tracking-display uppercase px-5 py-4 border-b-2 transition-colors duration-200 ${
                active === s.id
                  ? "border-brand-ink text-brand-ink"
                  : "border-transparent text-brand-ink-soft hover:text-brand-ink"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price list */}
      <div className="max-w-site mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {current.groups.map((group) => (
            <div key={group.group}>
              <h3 className="font-display text-xs tracking-display uppercase text-brand-pink-deep mb-5 pb-3 border-b border-brand-pink/30">
                {group.group}
              </h3>
              <div className="flex flex-col">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-center py-3 border-b border-brand-pink/10 last:border-b-0"
                  >
                    <span className="text-brand-ink text-sm">{item.name}</span>
                    <span className="font-display text-xs tracking-wide text-brand-ink font-bold tabular-nums ml-6 flex-shrink-0">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-brand-ink-soft/50 mt-10 pt-6 border-t border-brand-pink/20">
          All prices are inclusive of 10% VAT.
        </p>
      </div>
    </div>
  );
}
