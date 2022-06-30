import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      <ScrollAnimation
        animateIn="animate__fadeInRight"
        duration={1}
        animateOut="fadeIn"
        delay={0}
      >
        <ProjectsSection />
      </ScrollAnimation>

      <ContactBanner />
    </div>
  );
}
