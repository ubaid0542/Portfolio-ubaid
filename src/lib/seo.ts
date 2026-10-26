import { Metadata } from 'next';
import { profile } from '@/data/profile';

export function generateSiteMetadata(): Metadata {
  return {
    title: `${profile.name} — ${profile.title}`,
    description: `${profile.name} is a ${profile.title} based in ${profile.location}. ${profile.bio}`,
    metadataBase: new URL(profile.siteUrl),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: `${profile.name} — ${profile.title}`,
      description: profile.bio,
      url: profile.siteUrl,
      siteName: `${profile.name} Portfolio`,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${profile.name} — ${profile.title}`,
      description: profile.bio,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateProjectMetadata(
  title: string,
  description: string,
  slug: string
): Metadata {
  return {
    title: `${title} — ${profile.name}`,
    description,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${title} — ${profile.name}`,
      description,
      url: `${profile.siteUrl}/projects/${slug}`,
      siteName: `${profile.name} Portfolio`,
      type: 'article',
    },
  };
}
