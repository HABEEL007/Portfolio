import { Metadata } from 'next';

export const siteConfig = {
  name: 'Muhammad Habeel',
  role: 'AI Engineer',
  tagline: 'Building intelligent systems that See · Understand · Automate.',
  bio: 'AI Engineer specialized in Computer Vision, Multi-modal Biometrics, Deep Learning pipelines, and scalable AI systems.',
  url: 'https://habeel.dev',
  ogImage: 'https://habeel.dev/profile.jpg',
  links: {
    github: 'https://github.com/HABEEL007',
    linkedin: 'https://www.linkedin.com/in/muhammad-habeel-ai-engineer/',
    email: 'mailto:habeelnaveed@gmail.com',
  },
  location: 'Lahore, Pakistan',
};

export function constructMetadata({
  title = `${siteConfig.name} | ${siteConfig.role}`,
  description = siteConfig.tagline,
  image = siteConfig.ogImage,
  canonicalUrl = siteConfig.url,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    keywords: [
      'Muhammad Habeel',
      'AI Engineer',
      'Computer Vision Engineer',
      'Machine Learning Engineer',
      'FastAPI AI',
      'InsightFace',
      'FAISS',
      'Biometric AI',
      'Liveness Detection',
      'Deepfake Detection',
      'Full Stack AI',
      'Synavos Global',
    ],
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: `${siteConfig.name} — AI Engineer Portfolio`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.role}`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@habeel_ai',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export function generatePersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.bio,
    url: siteConfig.url,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    worksFor: {
      '@type': 'Organization',
      name: 'Synavos Global',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Computer Vision',
      'Biometrics',
      'Deep Learning',
      'FastAPI',
      'Python',
      'PyTorch',
      'TensorFlow',
      'FAISS',
      'Full-Stack Web Development',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'Pakistan',
    },
  };
}
