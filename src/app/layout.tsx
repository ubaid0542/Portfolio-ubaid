import type { Metadata, Viewport } from 'next';
import './globals.css';
import { profile } from '@/data/profile';
import Navigation from '@/components/navigation/Navigation';
import Footer from '@/components/navigation/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: `${profile.name} is a ${profile.title} based in ${profile.location}. Interactive explainer developer portfolio built with modern motion design and thoughtful engineering.`,
  keywords: [
    'Full Stack Web Developer',
    'Full Stack Developer',
    'Creative Developer',
    'Freelance Web Developer Varanasi',
    'GSAP Animation Specialist',
    'Interactive Portfolio',
    'Next.js Developer',
    'Varanasi Developer',
    'Ubaid',
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: profile.siteUrl,
    title: `${profile.name} — ${profile.title}`,
    description: profile.bio,
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: '/images/ubaid-profile.png',
        width: 1200,
        height: 630,
        alt: `${profile.name} — ${profile.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.title}`,
    description: profile.bio,
    images: ['/images/ubaid-profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#F3F0E8',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Varanasi',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'India',
    },
    url: profile.siteUrl,
    sameAs: [
      profile.social.github,
      profile.social.linkedin,
      profile.social.instagram,
    ],
    knowsAbout: [
      'Frontend Development',
      'Full Stack Development',
      'GSAP Animations',
      'Next.js',
      'React',
      'Tailwind CSS',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${profile.name} Portfolio`,
    url: profile.siteUrl,
    description: profile.bio,
    publisher: {
      '@type': 'Person',
      name: profile.name,
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F3F0E8] text-[#171715] antialiased selection:bg-[#F7E84B] selection:text-[#171715]">
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
