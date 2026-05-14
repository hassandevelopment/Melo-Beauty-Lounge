"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { href: "#home",     label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery",  label: "Gallery" },
  { href: "#about",    label: "About" },
  { href: "#contact",  label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-brand-bg/95 backdrop-blur-md border-b border-brand-pink/30 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-site mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/images/IMG_3910.jpg"
            alt="Mélo Beauty Lounge"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="font-display font-bold tracking-display text-brand-ink text-sm uppercase">
            Mélo Beauty Lounge
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-xs tracking-display uppercase text-brand-ink-soft hover:text-brand-ink transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-px bg-brand-pink-deep w-0 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/97317772209?text=Hi%20M%C3%A9lo%2C%20I%27d%20like%20to%20book%20..."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-brand-pink-deep text-brand-cream text-xs font-display tracking-display uppercase px-5 py-2.5 transition-all duration-200 hover:-translate-y-px hover:shadow-md active:scale-[0.98]"
        >
          Book Now
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-px w-5 bg-brand-ink transition-all duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-brand-ink transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-brand-ink transition-all duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <nav className="flex flex-col px-6 pb-6 gap-4 bg-brand-bg/98 backdrop-blur-md">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-xs tracking-display uppercase py-2 border-b border-brand-pink/20 text-brand-ink-soft"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/97317772209?text=Hi%20M%C3%A9lo%2C%20I%27d%20like%20to%20book%20..."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center bg-brand-pink-deep text-brand-cream text-xs font-display tracking-display uppercase px-5 py-3"
          >
            Book via WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
