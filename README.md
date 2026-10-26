# Ubaid — Interactive Explainer Developer Portfolio

A production-ready personal developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and GSAP ScrollTrigger. Inspired by the interaction design and storytelling principles of editorial explainers like [Avi Vashishta's Explained](https://www.avivashishta.com/lab/explained).

## Narrative Storyboard & Chapters

- **Ch. 00 — The Opening**: Editorial paper headline reveal ("Every website has a story. Here's mine.") with marker underline and subtle scroll exit.
- **Ch. 01 — Meet Ubaid**: Personal developer introduction with taped halftone portrait cut-out, camera zoom, handwritten annotations, and bio.
- **Ch. 02 — Education & Journey**: Animated editorial timeline featuring B.Sc. Computer Science (MGKVP Varanasi, 2019–2023) and Master of Computer Applications (MCA).
- **Ch. 03 — Wall Infra Case Study**: Real estate website case study with browser window mockup, zoom effect, architectural design decisions, and technology stack.
- **Ch. 04 — RevwriteAI Case Study**: AI-powered review-generation SaaS product concept, problem-solution cards, product preview, and engineering status.
- **Ch. 05 — Creative Projects**: Sundown Studio, Obys Agency recreation, and Sorting Visualizer algorithm tool with technical details and status labels.
- **Ch. 06 — How I Build**: Five-stage engineering process (Understand, Structure, Design, Develop, Refine) connected by an animated stroke SVG.
- **Ch. 07 — Technical Toolkit**: Layered paper groups displaying Frontend, Motion/Interaction, Backend, and Tooling.
- **Ch. 08 — What I Can Build For Clients**: Freelance service offerings focused on real estate websites, business portals, animated sites, and full-stack apps.
- **Ch. 09 — Let's Work Together**: Project inquiry form with mail client draft integration, direct social channels, and handwritten sign-off.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict)
- **Styling**: Tailwind CSS
- **Animation**: GSAP 3 & ScrollTrigger (`@gsap/react`)
- **Icons**: Lucide React
- **SEO**: Dynamic JSON-LD (Person & WebSite schemas), Open Graph, Twitter Cards, `robots.txt`, and XML `sitemap.xml`

## Setup & Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Build for production:
   ```bash
   npm run build
   ```

4. Start production server:
   ```bash
   npm run start
   ```

## Configuration & Personalization

Update your personal links and domain in [`src/data/profile.ts`](./src/data/profile.ts):
- `social.email`: Your primary contact email
- `social.linkedin`: Your LinkedIn profile URL
- `social.github`: Your GitHub profile URL
- `social.whatsapp`: Your WhatsApp contact number
- `siteUrl`: Your production Vercel domain

## Real Portrait Asset

Your real profile portrait was located from your system (`Ubaid_Profile.png`) and preserved at:
- `public/images/ubaid-profile.png`
- `public/images/ubaid-halftone.png`

## Deployment to Vercel

1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. The build command `npm run build` will automatically run static site generation and bundle the application.
