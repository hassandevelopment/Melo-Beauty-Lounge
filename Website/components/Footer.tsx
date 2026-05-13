import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-bg-soft border-t border-brand-pink/30">
      <div className="max-w-site mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-brand-pink/20">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/IMG_3910.jpg"
              alt="Mélo Beauty Lounge"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <p className="font-display text-xs tracking-display uppercase text-brand-pink-deep">
              Ladies Only
            </p>
            <p className="text-brand-ink-soft text-sm leading-relaxed max-w-[260px]">
              Be Bold, Be Bright, Be You!
            </p>
            <a
              href="https://www.instagram.com/melobeauty.bh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-pink-deep hover:text-brand-ink transition-colors duration-200"
            >
              @melobeauty.bh
            </a>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-xs tracking-display uppercase text-brand-pink-deep mb-5">
              Hours
            </h3>
            <p className="text-sm text-brand-ink">Every day</p>
            <p className="text-base font-display text-brand-ink mt-1">
              10:00 AM – 9:00 PM
            </p>
            <p className="text-xs text-brand-ink-soft/60 mt-1">7 days a week</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xs tracking-display uppercase text-brand-pink-deep mb-5">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://wa.me/97317772209?text=Hi%20M%C3%A9lo%2C%20I%27d%20like%20to%20book%20..."
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-ink hover:text-brand-pink-deep transition-colors duration-200 font-medium"
              >
                WhatsApp — Book Now
              </a>
              <a
                href="tel:+97317772209"
                className="text-brand-ink-soft hover:text-brand-ink transition-colors duration-200"
              >
                +973 1777 2209
              </a>
              <p className="text-brand-ink-soft/60 text-xs leading-relaxed">
                2025 Road, Barbar, Bahrain
                <br />
                AIN 520 — near Bagh Restaurant &amp; McDonald&apos;s
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <nav className="flex flex-wrap gap-6">
            {[
              { href: "#home",     label: "Home" },
              { href: "#services", label: "Services" },
              { href: "#gallery",  label: "Gallery" },
              { href: "#about",    label: "About" },
              { href: "#contact",  label: "Contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display text-xs tracking-display uppercase text-brand-ink-soft/60 hover:text-brand-ink transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <p className="text-xs text-brand-ink-soft/40 leading-relaxed">
            All prices inclusive of 10% VAT · Ladies only
          </p>
        </div>
      </div>
    </footer>
  );
}
