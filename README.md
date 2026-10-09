# LDTA — Leisure Delite Travel Academy Website

A single-page, responsive marketing/informational website for **Leisure Delite Travel
Academy (LDTA)**, built with React, TypeScript, Vite, and Tailwind CSS.

This project was built as a client demo. It reflects the LDTA logo, brand colors
(royal purple + gold, with autumn tones for the seasonal camp section), and the content
from the supplied Fall Break Camp 2026 flyer. All program details, dates, and pricing are
kept in clearly separated config files so they are easy to update as LDTA confirms more
information.

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- lucide-react (icons)

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build (outputs to dist/)
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  components/   Reusable UI: Header, Footer, ProgramCard, FAQItem, ContactForm, Lightbox, etc.
  sections/     Page sections: Hero, Programs, FeaturedCamp, About, Enrollment, WhyLDTA,
                Gallery, ParentInfo, Contact
  data/         Centralized content — edit these files to update real content
    siteConfig.ts    Contact info, navigation, enrollment link, logo path
    programs.ts      The 4 program category cards
    featuredCamp.ts  Fall Break Camp 2026 details (dates, price, highlights)
    faqs.ts          Parent/Guardian FAQ content
    gallery.ts       Gallery images + captions
  hooks/        useReveal.ts — scroll-reveal animation hook (respects reduced motion)
public/
  images/       Local images, including the LDTA logo (also used as favicon)
```

## Updating Content

**Everything a non-developer needs to change lives in `src/data/`.**

### Replace demo imagery
- Hero photo: `src/sections/Hero.tsx` (`<img src=... />` in the right column).
- About photo: `src/sections/About.tsx`.
- Fall Break Camp photo: `src/data/featuredCamp.ts` → `image` field.
- Program card photos: `src/data/programs.ts` → each program's `image` field.
- Gallery photos: `src/data/gallery.ts`.
- LDTA logo: replace `public/images/ldta-logo.png` with the official logo file (same
  filename, or update the `logo` path in `src/data/siteConfig.ts`). The same file is used
  for the header, footer, and favicon.

All current photography is licensed stock imagery used for demonstration purposes only —
it does not depict real LDTA students. Swap it for approved LDTA photography (with proper
permissions) before launch.

### Update the Featured Camp / seasonal program
Edit `src/data/featuredCamp.ts`:
- `isActive`: set to `false` to hide the section entirely, or swap the content for the
  next seasonal program once Fall Break Camp 2026 has concluded.
- `dateRange`, `location`, `price`, `priceNote`, `highlights`, `details`, `image`: update
  as confirmed by LDTA.

### Update the enrollment link
Edit `src/data/siteConfig.ts` → `enrollmentUrl`. By default, "Get Enrollment Information"
buttons scroll to the Contact section. Once LDTA provides an official registration URL,
replace the value with that URL (the button will automatically link out instead of
scrolling).

### Update contact information
Edit `src/data/siteConfig.ts` → `contact` object (name, email, phone). Please verify the
phone number against LDTA's current contact information before launch.

### Update programs & FAQs
Edit `src/data/programs.ts` and `src/data/faqs.ts`. Each program card's `anchor` field
controls which section its button scrolls to.

### Contact form behavior
The inquiry form (`src/components/ContactForm.tsx`) runs entirely in the browser. On
submit, it validates the fields and opens a pre-filled `mailto:` link to LDTA's email —
no data is transmitted or stored anywhere. To connect a real backend (e.g. Formspree,
a serverless function, etc.), replace the `handleSubmit` logic with an API call and keep
the existing success/error UI states.

## Deploying

### GitHub
```bash
git init
git add .
git commit -m "Initial LDTA website"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Vercel
1. Import the GitHub repository at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Vite**.
3. Build command: `npm run build` — Output directory: `dist` (Vercel detects this
   automatically for Vite projects).
4. Deploy. No environment variables or backend services are required for the site to
   function.

This is a static single-page site with anchor-based navigation (no client-side router),
so no special Vercel routing configuration is needed.

## Accessibility & SEO Notes

- Semantic headings, labeled form fields, visible focus states, and keyboard-accessible
  gallery lightbox (Esc to close, arrow keys to navigate).
- Respects `prefers-reduced-motion`.
- Favicon, Open Graph tags, and meta description are set in `index.html`.

## Honesty & Content Guardrails

This demo intentionally avoids fabricating information that LDTA has not confirmed,
including: founding date, accreditations, staff credentials, testimonials, cancellation
policies, transportation details, and age eligibility. Sections that reference this kind
of information direct users to contact LDTA directly instead. Please update copy once
LDTA confirms these details.
