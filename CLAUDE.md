# CLAUDE.md — Mélo Beauty Lounge Website

> **Source of truth for Claude Code working in this repo.**
> Read this file fully before making any change. If anything here conflicts with files inside `/brand_assets`, **the brand_assets folder wins** — and update this doc.
>
> Last updated: 2026-05-13
> Maintainer: <!-- your name -->

---

## 1. Project Overview

This repo builds the public marketing website for **Mélo Beauty Lounge**, a ladies-only beauty lounge in Barbar, Bahrain. The salon offers hair services, hair treatments, nail services (hands and feet), and operates an in-house café.

**Strategic context:**

- No website currently exists. SEO is greenfield.
- Google rating is **3.5 stars from 58 reviews**. The owner is not actively running a review-recovery program. **The Google Reviews widget is not embedded on the site** — Instagram social proof is used instead.
- Competing salons (Bella Brazil Saar, Color Cravings Bu Quwah, Hairpage Saar) sit at 4.8–5.0 with hundreds of reviews. Launching at a reputational disadvantage; the site cannot fix that, only avoid amplifying it.

**Primary goals, in priority order:**

1. Drive WhatsApp bookings — every page must make WhatsApp the obvious next step.
2. Communicate the brand visually: warm nude/taupe palette, terrazzo accents, soft minimal typography.
3. Publish services, prices, location, and hours so customers stop DMing Instagram for the basics.
4. Showcase the in-house café as a differentiator.

**Explicit non-goals (do not let scope creep in):**

- E-commerce / retail product sales.
- Customer accounts, loyalty, memberships.
- Arabic version (English only).
- Embedded Google Reviews widget.
- Blog or content marketing.
- Gift vouchers / packages.
- Cancellation policy page.
- Online booking forms — WhatsApp only.

---

## 2. Tech Stack

- **Framework:** Next.js 14 (App Router) — chosen for SEO, ISR, and `next/image`.
- **Language:** TypeScript.
- **Styling:** Tailwind CSS with custom design tokens (see §3).
- **Hosting:** Vercel.
- **Booking integration:** WhatsApp deeplink only.
- **Analytics:** Plausible (privacy-respecting, no cookie banner required).
- **Forms backend:** None at launch (no contact form — WhatsApp covers it).
- **Domain:** Not yet acquired. <!-- Update once secured. Recommend melobeauty.bh or melobeautylounge.com -->

---

## 3. Brand Identity

> Visual identity is **warm nude / taupe with pink and terrazzo accents** — *not* a pink-themed site. Pink is a secondary, decorative color, never the page-level fill.

### 3.1 Color Palette

> Hex values are eyedropper estimates from the supplied brand assets. Treat as authoritative for V1 unless a brand designer supplies revised values later.

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#E5D5C8` | Page background — warm nude/taupe |
| `--color-bg-soft` | `#EFE3D8` | Card backgrounds, sections |
| `--color-pink` | `#EBC4BD` | Pink accent — used sparingly |
| `--color-pink-deep` | `#D4A8A0` | Terrazzo pink chip, hover states on pink elements |
| `--color-ink` | `#1A1A1A` | Headings, body text, logo |
| `--color-ink-soft` | `#3A3A3A` | Captions, secondary text |
| `--color-cream` | `#F5EDE5` | Optional lighter background variant |
| `--color-white` | `#FFFFFF` | Inner cards, modals |

**Terrazzo accent particles** in the brand: pink (`#D4A8A0`), white (`#FFFFFF`), charcoal (`#2D2D2D`), warm brown (`#8B6F5C`). Reserve terrazzo for footer bands, dividers, and 404/empty states. Never under body text.

**Rules:**
- Never use raw hex values in components — only the CSS variables / Tailwind tokens above.
- Do not use pink as the dominant page color. It is an accent.
- Do not introduce new colors without updating this table.

### 3.2 Typography

- **Display / headings:** **Sansation** (weights 300, 400, 700). Closest match available on Google Fonts to the logo and printed menu treatment — thin, geometric, slightly extended caps. Use uppercase with wide tracking (`tracking-wider` to `tracking-widest`) for all headings to mirror the brand's printed materials.
- **Body:** **Inter** (weights 400, 500). Neutral, highly legible at small sizes, pairs cleanly with Sansation without competing.
- **Loading method:** Google Fonts via `next/font` (self-hosted, zero layout shift).
- **Fallback stack:** `system-ui, -apple-system, "Segoe UI", sans-serif`.
- **Minimum body size:** 16px on mobile, 17px desktop. The display face is thin — do not undersize.

### 3.3 Voice & Tone

The brand slogan is **"Be Bold, Be Bright, Be You!"** and the takeaway cups print **"I'M BRIGHT, I'M BOLD, I'M [name]."**

> The visual identity is quiet and restrained; the verbal identity is bold and energetic. Resolve it by letting the visuals stay quiet and letting the copy carry the energy. Do not amplify both at once.

- Warm, confident, conversational. Not corporate. Not "salon-deal-yelling."
- Sentences short. Adjectives sparingly.
- Personal pronouns ("you", "your") over third-person.
- **Banned words:** "elevate", "unleash", "transform your journey", "pamper yourself", "indulge", "treat yourself" — beauty-cliché filler.
- Light Arabic-English code-switching is fine for service names where natural; never forced.

### 3.4 Logo Usage

- Full logo: circular monogram (M-in-a-frame) + wordmark "MÉLO BEAUTY LOUNGE."
- Monogram alone: favicon, social avatar, image watermarks.
- Clear space: at least the height of the circle on all sides.
- Minimum size: 120px wide for the full lockup; 32px for the monogram alone.
- Logo color: always charcoal/black on light backgrounds. No reversed white-on-dark variant exists — do not invent one.

---

## 4. Services & Pricing

> **All prices are inclusive of 10% VAT.** State this in the page footer and at the top of the services page.
>
> Prices live in `/src/data/services.ts` only — never hardcoded in JSX.

### 4.1 Currency display

Format: `BD 11` (no decimal when whole), `BD 8.8`, `BD 13.2` (one decimal when non-whole). Matches the printed menus. Do **not** use three-decimal fils format.

### 4.2 Hair

| Service | Price (BHD) |
|---|---|
| **Hair Wash** | |
| Hair wash | 2.2 |
| Hair wash + Airdry | 4.4 |
| **Haircut** | |
| Hair trim | 5.5 |
| Haircut | 11 |
| **Blow Dry** | |
| Short | 6.6 |
| Medium | 8.8 |
| Long | 11 |
| Blowdry wavy | 13.2 |
| **Wavy** | |
| Short | 11 |
| Medium | 13.2 |
| Long | 16.5 |
| Retro | 33 |
| **Hairstyle** (starting price) | 27.5 |

### 4.3 Hair Treatments

| Service | Price (BHD) |
|---|---|
| Olaplex | 22 |
| Tea tree | 11 |
| L'Oréal Power Mix | 8.8 |
| **Nashi Filler Therapy** | |
| Short | 19.8 |
| Medium | 23.1 |
| Long | 27.5 |
| **Express Filler** | |
| Short | 16.5 |
| Medium | 22 |
| Long | 27.5 |
| Extra long | 31.9 |

### 4.4 Hair Coloring

| Service | Price (BHD) |
|---|---|
| Hair color (Full) | 33 |
| Hair color (Roots) | 16.5 |
| Hair color (Half roots) | 11 |
| Balayage | 38.5 |
| Highlights | 33 |
| Lowlights | 33 |
| Toner | 16.5 |

### 4.5 Nails — Hands

| Service | Price (BHD) |
|---|---|
| Manicure | 6.6 |
| Manicure + normal polish | 7.7 |
| Manicure + gel polish | 11 |
| Manicure + french polish | 9.9 |
| Manicure + french gel polish | 13.2 |
| Manicure + chrome mirror gel polish | 13.2 |
| Nail color | 2.2 |
| French nail color | 4.4 |
| Nail color removal | 1.1 |
| Gel color | 7.7 |
| French gel color | 9.9 |
| Gel color removal | 4.4 |
| Cut & file | 3.3 |
| Cut & file + color | 5.5 |
| False nails + manicure + color | 16.5 |
| False nails + manicure + french color | 18.7 |
| False nails + color | 12.1 |
| False nails per nail | 1.7 |
| False nails removal | 4.4 |
| Soft gel set | 27.5 |
| Soft gel per nail | 2.2 |
| Builder per nail | 2.2 |
| Acrylic / poly gel full set | 30.8 |
| Acrylic / poly gel refill | 19.8 |
| Acrylic / poly gel per nail | 2.75 |
| Acrylic / poly gel removal | 8.8 |
| Poly gel ombré | 35.2 |
| Nail art (per nail) | 1.1 |

### 4.6 Nails — Feet

| Service | Price (BHD) |
|---|---|
| Pedicure | 7.7 |
| Pedicure + normal polish | 8.8 |
| Pedicure + gel polish | 12.1 |
| Pedicure + french polish | 11 |
| Pedicure + french gel polish | 14.3 |
| Pedicure + chrome mirror gel polish | 14.3 |
| Nail color | 2.2 |
| French nail color | 4.4 |
| Nail color removal | 1.1 |
| Gel color | 6.6 |
| French gel color | 8.8 |
| Gel color removal | 4.4 |
| Cut & file | 3.3 |
| Cut & file + color | 5.5 |

> The printed Feet menu lists "Nail color removal" twice — the correct price is **BD 1.1** (confirmed). The BD 2.2 entry on the printed card is an error and is removed from the website.

---

## 5. Business Information

| Field | Value |
|---|---|
| Trading name | Mélo Beauty Lounge |
| Tagline | Be Bold, Be Bright, Be You! |
| Audience | Ladies-only |
| Instagram | [@melobeauty.bh](https://www.instagram.com/melobeauty.bh/) |
| Phone | +973 1777 2209 |
| WhatsApp | +973 1777 2209 (same number) |
| Address | 2025 Road, Barbar, Bahrain (located in AIN 520) |
| Landmarks | Near Bagh Restaurant & Café and McDonald's, on شارع البديع (Budaiya Highway) |
| Google Maps | <!-- paste canonical URL from GBP --> |
| Hours | 10:00 AM – 9:00 PM, 7 days a week |

The site must state **"Ladies only"** clearly — on the home page, the contact page, and the footer. This sets correct expectations and is standard practice for ladies-only salons in Bahrain.

### 5.1 Primary CTAs (in priority order)

1. **WhatsApp** — `https://wa.me/97317772209?text=Hi%20M%C3%A9lo%2C%20I%27d%20like%20to%20book%20...` — pre-fill a polite booking message.
2. **Call** — `tel:+97317772209`
3. **Directions** — direct Google Maps link.
4. **Instagram** — for browsing previous work / social proof.

There is no online booking form. There is no contact form. WhatsApp is the booking channel.

---

## 6. Site Structure

```
/                         Home — hero, services overview, café strip, gallery, CTA, hours, map
/services                 Full menu (tabbed: Hair · Treatments · Color · Nails Hands · Nails Feet)
/gallery                  Curated work — or embedded Instagram feed
/about                    Story, philosophy, the café
/contact                  Map, phone, hours, WhatsApp, directions
```

The café is mentioned on the home page as a mid-fold strip and gets a dedicated section on `/about`. No standalone `/cafe` page — not enough content to justify it.

Every page footer must include: phone, WhatsApp link, hours summary, map link, Instagram, "Ladies only" note, and the VAT-inclusive disclaimer.

---

## 7. The Café — A Differentiator

The salon has an **in-house café** (visible in interior photos: coffee machine, takeaway cups, seated café area, dried floral installation overhead). Branded pink takeaway cups read *"I'M BRIGHT, I'M BOLD, I'M ___"* with space for the customer's name.

This is rare in Bahrain salons and is a reason to choose Mélo over a competitor. Strategic use:

- Home page mid-fold strip: hero shot of the café area + one line of copy.
- Section on `/about` with two or three photos and a short paragraph.
- Mentioned in meta descriptions and `BeautySalon` schema `description` field — helps long-tail SEO for "salon with café Bahrain".
- The personalized cup imagery should appear in the hero on the home page; it is the brand's most ownable visual.

---

## 8. Photography Direction

The supplied brand assets are usable. Strong areas: interior shots, before/after hair, nail work close-ups, the branded pink cup. Weak areas: no founder/team portraits, limited in-service lifestyle shots.

**Use:**
- Interior salon shots — establish quality and atmosphere. Lead the hero with these.
- Nail work close-ups — wide variety on display (French, chrome, art, pastel) — populate the gallery.
- Before/after hair transformations — earn trust for the treatment services.
- The pink branded cup — hero candidate.

**Avoid:**
- Stock photos of Western salons.
- AI-generated faces or hands.
- Heavy filters that drift away from the warm-nude palette.

**Recommend to client:** commission a founder portrait, two or three "service in progress" shots, and a café shot with a named cup in focus. None of this blocks V1.

---

## 9. Development Commands

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm build
pnpm start
pnpm lint
pnpm typecheck
pnpm format
```

---

## 9a. Git & Deploy Workflow

**Repo:** https://github.com/hassandevelopment/Melo-Beauty-Lounge
**Hosting:** Vercel (auto-deploy on push to `main`)

After every confirmed change:
1. Verify on `http://localhost:3000` (never `file://`)
2. Run `/polish` — full visual review, fix anything off
3. Commit and push:
   ```bash
   git add .
   git commit -m "..."
   git push origin main
   ```

**Never skip the push.** Every confirmed change goes to the repo immediately.

---

## 9b. Skills — Read in This Order, Every Session

**Step 1 — UI/UX Pro Max** (structure & conversion):
`~/.claude/skills/ui-ux-pro-max/CLAUDE.md`
Apply first. Governs layout decisions, conversion structure, CTA placement, mobile scrolling behavior, and visual hierarchy.

**Step 2 — Taste Skill** (aesthetic refinement):
`~/.claude/skills/design-taste-frontend/CLAUDE.md`
Apply second. Governs how the design *feels* — premium vs generic, typography polish, motion, depth, and grain.

**How they work together:**
- UI/UX Pro Max answers: *Does this section convert?*
- Taste Skill answers: *Does this look premium?*
- When they conflict, UI/UX Pro Max wins on structure. Taste Skill wins on visual execution.

**No frontend code before both skills are read. No exceptions.**

---

**Pre-deploy checklist:**

- [ ] `pnpm typecheck` passes
- [ ] `pnpm lint` zero warnings
- [ ] Lighthouse mobile ≥ 90 on Performance, Accessibility, SEO
- [ ] All images have explicit `width`/`height` and `alt`
- [ ] No `console.log` in production
- [ ] VAT disclaimer in footer and on services page
- [ ] "Ladies only" notice in footer and on home page
- [ ] All prices match `/src/data/services.ts` (no inline hardcoded values)
- [ ] WhatsApp link tested on iOS Safari and Chrome Android
- [ ] `BeautySalon` schema validates in Google Rich Results Test

---

## 10. Coding Conventions

- Components: `PascalCase.tsx`, one component per file unless tightly coupled.
- Hooks: `useCamelCase.ts`.
- Utilities / data: `kebab-case.ts`.
- Tailwind class order: layout → box → spacing → typography → color → state → motion. Enforce with Prettier Tailwind plugin.
- No inline styles unless dynamic and unavoidable.
- Imports order: node_modules → absolute aliases → relative → styles → types.
- No barrel files (`index.ts` re-exports) for shared components.
- Images: WebP / AVIF, `loading="lazy"` below the fold, always set `width`/`height`. Use `next/image`.
- Static-first: services, hours, contact info baked at build time, never client-fetched.

---

## 11. Design Principles (non-negotiable)

- **Mobile first.** Most traffic comes from the Instagram bio link on a phone. Design every component at 375px first.
- **The brand is quiet. The copy is loud.** Don't double up.
- **White space is the luxury.** Don't crowd. If a section feels empty, the answer is better photography, not more text.
- **One primary CTA per screen.** WhatsApp on top, secondary actions visually subordinate.
- **Pink is an accent, not a theme.** Page backgrounds are warm nude/taupe. If pink covers more than ~20% of any viewport, something is wrong.
- **Terrazzo, used carefully.** Reserve for footers, dividers, 404/empty states. Never under body text.
- **Generous type sizing.** Body ≥ 16px on mobile. The display face is thin and benefits from larger sizing.
- **Interior shots lead, nails support.** Most Bahrain salon sites lead with nail close-ups. Mélo's interior is the differentiator and should anchor the hero.

---

## 12. Accessibility (WCAG AA minimum)

- **Color contrast:** ≥ 4.5:1 for body text, ≥ 3:1 for large text. Pink-on-nude commonly fails — test every combination.
- **Thin typography risk:** Sansation is very thin in light weights. Do not use weight 300 below 16px.
- **Keyboard:** every interactive element reachable. Visible focus rings preserved.
- **Forms:** N/A at V1 (no forms).
- **Images:** meaningful `alt`; decorative get `alt=""`.
- **Motion:** respect `prefers-reduced-motion`. No auto-playing video with sound.
- **Semantic HTML.**

---

## 13. SEO

Local SEO dominates. Target intent: "salon Barbar", "ladies salon Bahrain", "nails Bahrain", "hair color Bahrain", "balayage Bahrain", "Olaplex Bahrain", "Nashi filler Bahrain", "salon café Bahrain".

- `<title>` template: `<Page> | Mélo Beauty Lounge — Barbar, Bahrain`
- Meta description: handwritten per page, 140–160 chars, mentions Barbar and a specific service.
- `BeautySalon` schema.org JSON-LD on every page: `address`, `geo`, `openingHoursSpecification` (10:00–21:00, all days), `telephone`, `priceRange: "BD"`, `image`, `sameAs: ["https://www.instagram.com/melobeauty.bh/"]`.
- Embed an interactive Google Map on `/contact` (not a screenshot).
- Open Graph + Twitter card images: 1200×630, generated per page.
- `sitemap.xml` and `robots.txt`.
- Core Web Vitals: LCP < 2.5s on 4G, CLS < 0.1, INP < 200ms.

**NAP consistency:** Name / Address / Phone on the site must match GBP **character for character**. After launch, submit corrections to Fresha and Odoo (Odoo currently lists Saar — wrong; it's Barbar) to repair citations.

---

## 14. Things To Avoid

- Pink as the dominant page color — that's not the brand.
- Embedding the Google Reviews widget at current 3.5★. Instagram social proof only.
- Stock photos of Western salons.
- AI-generated images of people.
- "Book Now" buttons that go to a non-existent booking page. WhatsApp is the only booking channel.
- Contact forms — there are none in V1.
- Pop-ups on first load.
- Auto-playing hero video with sound.
- Hardcoded prices in JSX — always pull from `/src/data/services.ts`.
- `lorem ipsum` in production. Add a pre-commit hook.
- More than two pink shades on screen at once.
- Drop-shadows on pink-on-pink elements (turns muddy).
- Script / cursive fonts for body. Reserve for the logo only.
- Advertising any price ex-VAT.
- Mentioning gift vouchers, packages, or cancellation policy (none exist).

---

## 15. Working With Claude Code on This Repo

When asked to make a change:

1. **Read this file first.** If a request contradicts it, surface the conflict before acting.
2. **Read `/brand_assets` second.** Treat its contents as authoritative on visual identity.
3. **Never invent brand values.** No fabricated hex codes, fonts, or prices. If unknown, ask.
4. **Prefer the smallest viable change.** Marketing site, not a platform.
5. **Flag accessibility regressions** — especially thin type and pink-on-nude contrast.
6. **Update this file** when project-level decisions change. The CLAUDE.md should not drift from reality.
7. **Brand voice anchor:** the slogan ("Be Bold, Be Bright, Be You!") and the cup ("I'M BRIGHT, I'M BOLD, I'M ___"). Quiet visuals, loud-friendly copy.

---

## 16. Decisions Locked for V1

> These were the open questions in earlier drafts; all are now closed. Listed here so future contributors can see the rationale without rereading chat history.

- **Audience:** Ladies-only. Stated explicitly on site.
- **WhatsApp number:** Same as phone (+973 1777 2209).
- **Booking method:** WhatsApp deeplink only. No forms, no Fresha embed, no Calendly.
- **Arabic:** Not in V1.
- **Google Reviews widget:** Not embedded. Owner not running review-recovery; site should not direct traffic to the 3.5★ listing for social proof.
- **Gift vouchers / packages:** Not offered. Do not mention.
- **Cancellation policy:** Not displayed.
- **Café:** Mentioned. Home page strip + `/about` section. No standalone page.
- **Display font:** Sansation (Google Fonts), with Inter for body.
- **Color palette:** As locked in §3.1.
- **Feet menu typo:** "Nail color removal" is **BD 1.1**. The BD 2.2 entry on the printed card is an error.
- **Domain:** Not yet acquired. Update §2 when secured.
