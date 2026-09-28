import React from 'react';
import Hero from '@/components/Hero';
import CapabilityTiles from '@/components/CapabilityTiles';
import FeaturedProjects from '@/components/FeaturedProjects';
import ExperiencePreview from '@/components/ExperiencePreview';
import ContactCTA from '@/components/ContactCTA';

export default function HomePage() {
  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Quick Intro / What I Build */}
      <CapabilityTiles />

      {/* 3. Featured Projects Showcase */}
      <FeaturedProjects />

      {/* 4. Experience Preview */}
      <ExperiencePreview />

      {/* 5. Contact CTA */}
      <ContactCTA />
    </div>
  );
}
