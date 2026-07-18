# Product Requirements Document (PRD)

## Company Landing Page — Website Build Services & NFC Digital Identity Cards

---

### 1. Executive Summary

**Product Name:** Flow  
**Page Type:** Single-page promotional landing site (static, no user accounts or backend dashboard)  
**Target Audience:** Freelancers, entrepreneurs, small business owners, job seekers, and professionals who want an online presence and a smart networking tool.

**Value Proposition:**  
Flow provides professional website-building services alongside a physical NFC card that instantly shares a user's digital identity (phone number, LinkedIn, email, and more) with a single tap. The landing page exists solely to promote both offerings, build trust, and drive qualified inquiries.

**Scope Boundary — What this page is NOT:**

- NOT a web application with user accounts or login.
- NOT an ordering/checkout platform (orders placed via WhatsApp/email/form).
- NOT an NFC profile hosting or management system (that is a separate deliverable; this page only explains and promotes the NFC card product).
- NO admin dashboard or internal tooling is part of this build.

---

### 2. Problem Statement

- Small business owners and freelancers lack the time or skills to build a professional website.
- Traditional business cards are static, easily lost, and cannot be updated.
- Professionals need a fast, memorable way to share contact info without requiring apps to be installed on both sides.
- Flow's target customers need a single place to understand both services before reaching out.

---

### 3. Product / Service Overview

The landing page promotes two complementary offerings:

| Product                   | Description (as communicated on the page)                                                                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Website Build Service** | Custom, responsive websites for individuals and small businesses. Covers design, development, hosting setup, and basic SEO. Described in detail on the page; orders taken via inquiry. |
| **Flow NFC Card**         | A physical NFC-enabled card that, when tapped against a smartphone, opens a digital profile page with the user's contact details (phone, LinkedIn, email, etc.). No app required.      |

---

### 4. Target Users / Personas

#### Persona A: The Freelancer / Consultant

- Needs a portfolio website to showcase work.
- Attends networking events regularly.
- Wants an impressive, modern way to share contact info.

#### Persona B: The Small Business Owner

- Needs an online presence for their shop or service.
- Wants a simple way for customers to reach them.
- Values speed and ease of setup.

#### Persona C: The Job Seeker / Professional

- Wants a personal landing page / resume site.
- Uses the NFC card at career fairs and interviews.
- Needs LinkedIn and email prominently shared.

---

### 5. Functional Requirements — Landing Page Sections

| ID    | Section / Element        | Priority | Description                                                                                                                                                      |
| ----- | ------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LP-01 | Hero Section             | P0       | Compelling headline, subheadline, and two primary CTA buttons: "Get a Website" and "Get Your NFC Card". Both scroll to their respective sections or open a form. |
| LP-02 | Services Overview        | P0       | Two detailed cards or side-by-side blocks explaining the Website Build Service and the NFC Card product, with icons/illustrations.                               |
| LP-03 | How It Works             | P0       | A simple 3–4 step visual guide for each service (Consult → Design → Build → Deliver / Ship).                                                                     |
| LP-04 | Pricing                  | P1       | Display pricing tiers or "Starting at" prices for websites (e.g., Basic, Pro, Enterprise) and per-card / bulk NFC card pricing. No dynamic calculator needed.    |
| LP-05 | Portfolio / Work Gallery | P0       | Grid or carousel of past website projects with screenshots, project descriptions, and live-site links. Static data, hardcoded or via a simple JSON/JS array.     |
| LP-06 | NFC Card Demo            | P1       | Static image sequence, GIF, embedded Lottie animation, or short embedded video showing the tap-to-open flow.                                                     |
| LP-07 | Testimonials             | P1       | Customer quotes with name, photo, and role/company. Static or from a simple data array.                                                                          |
| LP-08 | FAQ (Accordion)          | P1       | Expand/collapse accordion answering common questions about websites, NFC cards, turnaround time, revisions, shipping, etc.                                       |
| LP-09 | Contact / Inquiry Form   | P0       | Form with fields: Name, Email, Phone, Service Interest (Website / NFC Card / Both), Message. Submits to a single email address or form-to-email service.         |
| LP-10 | Footer                   | P1       | Company name, brief tagline, social media icon links, privacy policy link, terms link.                                                                           |
| LP-11 | WhatsApp Floating Button | P1       | Floating WhatsApp icon in the bottom corner linking to a pre-filled WhatsApp number for instant chat inquiries.                                                  |
| LP-12 | Responsive Design        | P0       | Mobile-first, fully responsive across all device widths (320px → 1440px+).                                                                                       |
| LP-13 | SEO Metadata             | P1       | Proper `<title>`, `<meta description>`, Open Graph tags, Twitter card tags, favicon, and a static `sitemap.xml`.                                                 |
| LP-14 | Analytics                | P1       | Google Analytics 4 script or a lightweight privacy-friendly alternative (e.g., Plausible) for page views and form conversion tracking.                           |
| LP-15 | Loading Performance      | P0       | Static site, optimized images (WebP, lazy-loaded), minimal JS. Lighthouse Performance ≥ 95.                                                                      |

---

### 6. NFC Card Product — Promotional Content Only

The landing page **does not** host NFC profile pages or provide a profile management dashboard. It **promotes** the Flow NFC Card by communicating the following capabilities to potential buyers:

- Tap the card on any modern smartphone → a profile page opens instantly. No app needed.
- Profile displays: Full Name, Title/Role, Phone Number, Email Address, LinkedIn URL.
- A "Save to Contacts" button downloads a vCard (.vcf) file.
- Each card includes a printed QR code on the back as a fallback for phones without NFC.
- Users can request profile updates via the company (the actual update mechanism is outside the landing page scope).
- Card physical options shown on the page: matte/glossy finish, color variants, optional logo.

All of these are communicated through text, icons, and imagery — no interactive NFC features live on the landing page itself.

---

### 7. Non-Functional Requirements

| ID     | Requirement     | Description                                                                  |
| ------ | --------------- | ---------------------------------------------------------------------------- |
| NFR-01 | Performance     | Lighthouse score ≥ 95 for Performance, Accessibility, Best Practices, SEO.   |
| NFR-02 | Security        | HTTPS enforced. Form endpoint secured. No sensitive data stored on the page. |
| NFR-03 | Accessibility   | WCAG 2.1 AA compliant. Semantic HTML, proper ARIA labels, keyboard nav.      |
| NFR-04 | Browser Support | Chrome, Firefox, Safari, Edge — latest 2 versions.                           |
| NFR-05 | Hosting         | Deployed to a CDN-backed static host (Vercel, Netlify, Cloudflare Pages).    |
| NFR-06 | No Backend      | Zero server-side runtime. The page is 100% static HTML/CSS/JS.               |

---

### 8. User Flows (How visitors use the page)

#### Flow 1: Learn about website service → Inquire

```
Landing Page → Scroll to Services or Pricing
→ Click CTA "Get a Website" → Contact Form or WhatsApp
→ User fills form → Form submits via email service → Auto-reply confirmation
```

#### Flow 2: Learn about NFC card → Inquire

```
Landing Page → Scroll to NFC Card section → Read features, see demo
→ Click CTA "Get Your NFC Card" → Contact Form or WhatsApp
→ User fills form with interest "NFC Card" → Form submits → Company follows up
```

#### Flow 3: Browse Portfolio → Build Trust → Inquire

```
Landing Page → Scroll to Portfolio → Browse projects
→ Click a project to see details or visit live site
→ Scroll to Contact Form → Submit inquiry
```

---

### 9. Page Structure (Single-Page Layout)

All sections live on one scrollable page with a sticky navigation bar that anchors to each section:

```
/
├── Navigation Bar (sticky, smooth-scroll anchors)
├── Hero Section (LP-01)
├── Services / What We Offer (LP-02)
├── How It Works (LP-03)
├── Pricing (LP-04)
├── Portfolio / Our Work (LP-05)
├── NFC Card Demo (LP-06)
├── Testimonials (LP-07)
├── FAQ (LP-08)
├── Contact / Inquiry Form (LP-09)
├── Footer (LP-10)
└── Floating WhatsApp Button (LP-11)
```

Optional secondary static pages (simple HTML files, same styling):

- `/privacy-policy`
- `/terms`

No multi-page routing, no subdomain for NFC profiles, no dynamic routes.

---

### 10. Tech Stack Recommendations

| Layer             | Technology                                                                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Page**          | Pure HTML + CSS + Vanilla JS, OR Astro (static mode), OR Hugo                                                                |
| **Styling**       | Tailwind CSS (utility-first, small bundle, fast to build)                                                                    |
| **Icons**         | Lucide Icons or Phosphor Icons (tree-shakable, SVG)                                                                          |
| **Animations**    | CSS animations + Intersection Observer for scroll-reveal. Optional: Lottie for NFC demo.                                     |
| **Form Handling** | Formspree, Web3Forms, or a simple serverless function (e.g., Vercel Serverless / Netlify Functions) that emails submissions. |
| **Analytics**     | Google Analytics 4 (simple script tag) or Plausible.                                                                         |
| **Hosting**       | Vercel, Netlify, or Cloudflare Pages (free tier sufficient).                                                                 |
| **Domain**        | Custom domain (e.g., `flow.my` or `flowdigital.com`).                                                                        |

No database. No auth. No CMS (portfolio data hardcoded or in a static JSON file). No payment integration on the page — orders happen offline/manually after inquiry.

---

### 11. SEO & Content Strategy

- **Primary Keywords:** "website building service malaysia", "NFC business card", "digital identity card", "custom website design".
- **Page Meta Title:** "Flow — Professional Websites & Smart NFC Cards | Your Digital Identity"
- **Meta Description:** "Flow builds stunning websites for small businesses and provides smart NFC cards that share your contact info with a single tap. Get yours today."

---

### 12. Success Metrics / KPIs

| Metric                                         | Target           |
| ---------------------------------------------- | ---------------- |
| Landing page form submission rate (conversion) | ≥ 3%             |
| WhatsApp click-through rate                    | ≥ 5%             |
| Average page load time (Lighthouse)            | < 1.5 seconds    |
| Time to Interactive                            | < 2 seconds      |
| Organic search impressions (monthly)           | ≥ 500 by month 3 |
| Bounce rate                                    | < 50%            |

---

### 13. Risks & Mitigations

| Risk                                         | Mitigation                                                                                               |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| NFC not widely understood by target audience | Include clear how-it-works steps, visual demo/GIF, and FAQ explaining NFC in simple terms.               |
| Visitors unsure how to order                 | Multiple clear CTAs, WhatsApp floating button, and a simple contact form with service-interest dropdown. |
| Slow page from heavy images                  | Use WebP format, lazy loading, responsive srcset, and a CDN for all assets.                              |
| Competitors in the NFC business card space   | Differentiate by bundling website build service with the NFC card — a one-stop digital presence.         |

---

### 14. Timeline

| Phase            | Duration  | Deliverables                                                                                            |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------------- |
| **Design**       | 1 week    | High-fidelity mockups (mobile + desktop) for all sections. Color palette, typography, imagery selected. |
| **Development**  | 2–3 weeks | Fully coded static landing page with all sections, responsive, form wired up, deployed to staging.      |
| **Content & QA** | 1 week    | Final copy, portfolio screenshots, testimonial gathering, cross-browser testing, Lighthouse audit.      |
| **Launch**       | 1 day     | Point domain, enable analytics, go live.                                                                |

**Total: ~4–5 weeks** for a polished, production-ready landing page.

---

### 15. Appendices

- **NFC Card Specs (for reference when creating promotional copy):** NTAG215 chip, 504 bytes usable memory, stores an NDEF-formatted URL record, reads at ~2–4 cm range, compatible with iOS 11+ and Android 4.4+.
- **vCard Format Example (for reference when explaining the "Save to Contact" feature on the page):**

```
BEGIN:VCARD
VERSION:3.0
FN:John Doe
ORG:Flow Digital
TEL:+60123456789
EMAIL:john@example.com
URL:https://linkedin.com/in/johndoe
END:VCARD
```

---

_Document Version: 2.0 | Last Updated: 18 July 2026 | Author: Flow Product Team_
