import React, { useEffect } from "react";
import LandingLayout from "@/layouts/LandingLayout";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CTASection from "@/components/landing/CTASection";

const Home: React.FC = () => {
  // Add a subtle scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        
        if (isVisible) {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    };
    
    // Initial check on load
    setTimeout(handleScroll, 100);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <LandingLayout>
      <HeroSection />
      
      <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000 ease-out">
        <FeaturesSection />
      </div>
      
      <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000 ease-out">
        <TestimonialsSection />
      </div>
      
      <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000 ease-out">
        <CTASection />
      </div>
    </LandingLayout>
  );
};

export default Home;
