"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Motion, { staggerItem } from "@/components/MotionSection";
import { services } from "@/lib/services";

const galleryPhotos = [
  { src: "/images/IMG_3913.jpg", alt: "Mélo branded café cup — I'm Bright, I'm Bold", span: "col-span-2 row-span-2" },
  { src: "/images/IMG_3919.jpg", alt: "French nails with moon and evil eye art", span: "" },
  { src: "/images/IMG_3921.jpg", alt: "Salon interior with café area", span: "" },
  { src: "/images/IMG_3914.jpg", alt: "Lavender nails with daisy art", span: "" },
  { src: "/images/IMG_3915.jpg", alt: "Yellow French tip nail art", span: "col-span-2" },
  { src: "/images/IMG_3916.jpg", alt: "White starfish nail art", span: "" },
  { src: "/images/IMG_3917.jpg", alt: "Pink shimmer chrome nails", span: "" },
  { src: "/images/IMG_3918.jpg", alt: "Colourful nail art", span: "" },
  { src: "/images/IMG_3912.jpg", alt: "Dark burgundy and forest green gel nails", span: "" },
];

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-[100dvh] bg-brand-bg flex items-center overflow-hidden">
      {/* Parallax photo */}
      <motion.div style={{ y }} className="absolute inset-y-0 right-0 w-full md:w-[55%]">
        <Image
          src="/images/IMG_3913.jpg"
          alt="Mélo branded café cup held with nude manicured nails"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/75 to-transparent md:via-brand-bg/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/50 via-transparent to-brand-bg/20 md:hidden" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-site mx-auto px-6 w-full pt-24 pb-16">
        <div className="max-w-[560px]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-xs tracking-display uppercase text-brand-pink-deep mb-6"
          >
            Ladies Only · Barbar, Bahrain
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold text-brand-ink leading-[1.06] mb-6"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.2rem)", letterSpacing: "0.04em" }}
          >
            Be Bold.<br />Be Bright.<br />Be You.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-brand-ink-soft text-base md:text-lg leading-relaxed mb-10 max-w-[400px]"
          >
            Hair, nails, colour, treatments — and a café. One address, everything you need.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="https://wa.me/97317772209?text=Hi%20M%C3%A9lo%2C%20I%27d%20like%20to%20book%20..."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, boxShadow: "0 8px 24px -4px rgba(26,26,26,0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 bg-brand-pink-deep text-brand-cream font-display text-xs tracking-display uppercase px-8 py-4"
            >
              Book via WhatsApp
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ backgroundColor: "#D4A8A0", color: "#F5EDE5" }}
              className="inline-flex items-center justify-center gap-2 border border-brand-pink-deep text-brand-pink-deep font-display text-xs tracking-display uppercase px-8 py-4 transition-colors duration-200"
            >
              View Services
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12 flex items-center gap-8"
          >
            {[["10–9","Daily"],["5+","Categories"],["BD 2.2","From"]].map(([num, label], i) => (
              <div key={label} className="flex items-center gap-8">
                {i > 0 && <div className="w-px h-8 bg-brand-pink" />}
                <div>
                  <div className="text-brand-ink text-xl font-bold font-display">{num}</div>
                  <div className="font-display text-xs tracking-display uppercase text-brand-ink-soft/60">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-brand-ink/30"
        />
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* ─── LADIES ONLY STRIP ──────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-brand-pink py-3 px-6 text-center"
      >
        <p className="font-display text-xs tracking-display uppercase text-brand-ink">
          Ladies Only · Open Daily 10:00 AM – 9:00 PM · Barbar, Bahrain
        </p>
      </motion.div>

      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <section id="services" className="bg-brand-bg scroll-mt-16">
        <div className="bg-brand-bg-soft py-20 px-6">
          <div className="max-w-site mx-auto">
            <Motion variant="fadeUp">
              <p className="font-display text-xs tracking-display uppercase text-brand-pink-deep mb-3">Full menu</p>
              <h2
                className="font-display font-bold text-brand-ink mb-3"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", letterSpacing: "0.04em" }}
              >
                Services &amp; Prices
              </h2>
              <p className="text-brand-ink-soft text-sm max-w-[440px]">
                All prices include 10% VAT. No hidden fees.
              </p>
            </Motion>
          </div>
        </div>
        <ServicesSection services={services} />
      </section>

      {/* ─── GALLERY ────────────────────────────────────────────────── */}
      <section id="gallery" className="bg-brand-cream py-24 px-6 scroll-mt-16">
        <div className="max-w-site mx-auto">
          <Motion variant="fadeUp">
            <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
              <div>
                <p className="font-display text-xs tracking-display uppercase text-brand-pink-deep mb-3">Our work</p>
                <h2
                  className="font-display font-bold text-brand-ink"
                  style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", letterSpacing: "0.04em" }}
                >
                  Gallery
                </h2>
              </div>
              <motion.a
                href="https://www.instagram.com/melobeauty.bh/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 3 }}
                className="font-display text-xs tracking-display uppercase text-brand-ink-soft border-b border-brand-pink-deep pb-0.5 transition-colors duration-200 hover:text-brand-ink"
              >
                @melobeauty.bh →
              </motion.a>
            </div>
          </Motion>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px] md:auto-rows-[260px]">
            {galleryPhotos.map((p, i) => (
              <motion.div
                key={p.src}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden group cursor-pointer ${p.span}`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes={p.span.includes("col-span-2") ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAFÉ STRIP ─────────────────────────────────────────────── */}
      <section className="bg-brand-bg overflow-hidden">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
          <Motion variant="slideRight" className="relative min-h-[340px] md:min-h-0">
            <Image
              src="/images/IMG_3921.jpg"
              alt="Mélo salon interior — nail polish wall, café area and dried floral installation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </Motion>
          <Motion variant="slideLeft" className="flex flex-col justify-center px-10 md:px-16 py-16">
            <p className="font-display text-xs tracking-display uppercase text-brand-pink-deep mb-4">
              Something different
            </p>
            <h2
              className="font-display font-bold text-brand-ink mb-6"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", letterSpacing: "0.04em" }}
            >
              Stay for a coffee.
            </h2>
            <p className="text-brand-ink-soft text-base leading-relaxed mb-4 max-w-[380px]">
              Our in-house café means you can relax before your appointment — or linger after. Every cup gets your name on it.
            </p>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display text-sm text-brand-ink-soft italic border-l-2 border-brand-pink pl-4"
            >
              &ldquo;I&apos;m Bright. I&apos;m Bold. I&apos;m ___&rdquo;
            </motion.p>
          </Motion>
        </div>
      </section>

      {/* ─── ABOUT ──────────────────────────────────────────────────── */}
      <section id="about" className="bg-brand-bg-soft py-24 px-6 scroll-mt-16">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Motion variant="slideRight">
            <p className="font-display text-xs tracking-display uppercase text-brand-pink-deep mb-4">Our story</p>
            <h2
              className="font-display font-bold text-brand-ink mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "0.04em" }}
            >
              A place to be you.
            </h2>
            <p className="text-brand-ink-soft text-base leading-relaxed mb-4 max-w-[440px]">
              Mélo Beauty Lounge is a ladies-only space in Barbar, Bahrain. We do hair, nails, colour, and treatments — and we do them well.
            </p>
            <p className="text-brand-ink-soft text-base leading-relaxed mb-8 max-w-[440px]">
              Walk in, sit down, and get exactly what you came for. No upselling. No fuss. Just good work and a warm cup of something.
            </p>

            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-px bg-brand-pink/20"
            >
              {[
                { label: "Ladies Only", body: "A private space — just for you." },
                { label: "Open Daily",  body: "10 AM – 9 PM, seven days." },
                { label: "VAT Inclusive", body: "What you see is what you pay." },
              ].map((v) => (
                <motion.div
                  key={v.label}
                  variants={staggerItem}
                  className="bg-brand-cream px-4 py-6"
                >
                  <h3 className="font-display text-xs tracking-display uppercase text-brand-ink mb-2">{v.label}</h3>
                  <p className="text-brand-ink-soft text-xs leading-relaxed">{v.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </Motion>

          <Motion variant="slideLeft">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/IMG_3913.jpg"
                alt="Mélo branded café cup — I'm Bright, I'm Bold"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </Motion>
        </div>
      </section>

      {/* ─── BEFORE / AFTER SLIDER ──────────────────────────────────── */}
      <section className="bg-brand-bg py-24 px-6">
        <div className="max-w-site mx-auto">
          <Motion variant="fadeUp" className="mb-12">
            <p className="font-display text-xs tracking-display uppercase text-brand-pink-deep mb-3">Real results</p>
            <h2
              className="font-display font-bold text-brand-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "0.04em" }}
            >
              Before &amp; After
            </h2>
            <p className="text-brand-ink-soft text-sm mt-3">Drag the handle to compare.</p>
          </Motion>
          <Motion variant="fadeIn">
            <BeforeAfterSlider />
          </Motion>
        </div>
      </section>

      {/* ─── CONTACT + HOURS ────────────────────────────────────────── */}
      <section id="contact" className="bg-brand-bg-soft py-24 px-6 scroll-mt-16 border-t border-brand-pink/20">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left — CTA + address */}
          <Motion variant="slideRight">
            <p className="font-display text-xs tracking-display uppercase text-brand-pink-deep mb-4">Book your visit</p>
            <h2
              className="font-display font-bold text-brand-ink mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "0.04em" }}
            >
              Ready when you are.
            </h2>

            <div className="flex flex-col gap-5 mb-10">
              <motion.a
                href="https://wa.me/97317772209?text=Hi%20M%C3%A9lo%2C%20I%27d%20like%20to%20book%20..."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, boxShadow: "0 8px 24px -4px rgba(37,211,102,0.35)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-[#25D366] text-white font-display text-xs tracking-display uppercase px-7 py-4 w-fit"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Book via WhatsApp
              </motion.a>
              <a href="tel:+97317772209" className="text-brand-ink text-base font-display hover:text-brand-ink-soft transition-colors duration-200">
                +973 1777 2209
              </a>
            </div>

            <div className="flex flex-col gap-2 text-sm text-brand-ink-soft mb-8">
              <span>2025 Road, Barbar, Bahrain</span>
              <span className="text-brand-ink-soft/60">AIN 520 — near Bagh Restaurant &amp; McDonald&apos;s</span>
              <motion.a
                href="https://maps.google.com/?q=Melo+Beauty+Lounge+Barbar+Bahrain"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 3 }}
                className="font-display text-xs tracking-display uppercase text-brand-pink-deep border-b border-brand-pink-deep/40 pb-0.5 w-fit mt-1 hover:text-brand-ink transition-colors duration-200"
              >
                Open in Maps →
              </motion.a>
            </div>

            <div className="border border-brand-pink/40 px-5 py-4 bg-brand-pink/10 w-fit">
              <p className="font-display text-xs tracking-display uppercase text-brand-ink">Ladies Only</p>
              <p className="text-brand-ink-soft text-xs mt-1">Mélo Beauty Lounge is a ladies-only space.</p>
            </div>
          </Motion>

          {/* Right — Hours */}
          <Motion variant="slideLeft">
            <div className="border border-brand-pink/30 p-8 bg-brand-cream">
              <h3 className="font-display text-xs tracking-display uppercase text-brand-pink-deep mb-6">Opening Hours</h3>
              {days.map((day, i) => (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex justify-between items-center py-3 border-b border-brand-pink/15 last:border-b-0"
                >
                  <span className="text-sm text-brand-ink">{day}</span>
                  <span className="font-display text-xs tracking-wide text-brand-ink-soft tabular-nums">
                    10:00 AM – 9:00 PM
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/melobeauty.bh/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="mt-6 flex items-center gap-4 border border-brand-pink/30 p-5 bg-brand-cream hover:border-brand-pink-deep transition-colors duration-200"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-pink-deep flex-shrink-0">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
              </svg>
              <div>
                <p className="font-display text-xs tracking-display uppercase text-brand-ink">Instagram</p>
                <p className="text-brand-ink-soft text-sm">@melobeauty.bh</p>
              </div>
            </motion.a>
          </Motion>
        </div>
      </section>

      {/* ─── JSON-LD ────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            name: "Mélo Beauty Lounge",
            description: "Ladies-only beauty lounge in Barbar, Bahrain. Hair, nails, colour, treatments and an in-house café.",
            telephone: "+97317772209",
            priceRange: "BD",
            address: { "@type": "PostalAddress", streetAddress: "2025 Road", addressLocality: "Barbar", addressCountry: "BH" },
            openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "10:00", closes: "21:00" }],
            sameAs: ["https://www.instagram.com/melobeauty.bh/"],
            image: "/images/IMG_3913.jpg",
          }),
        }}
      />
    </>
  );
}
