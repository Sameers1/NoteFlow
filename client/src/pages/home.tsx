import React from "react";
import LandingLayout from "@/layouts/LandingLayout";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";

const Home: React.FC = () => {
  return (
    <LandingLayout>
      <HeroSection />
      <FeaturesSection />
    </LandingLayout>
  );
};

export default Home;
