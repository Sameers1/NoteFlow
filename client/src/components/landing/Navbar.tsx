import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="px-6 py-4 flex items-center justify-between bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold font-sans">
            Note<span className="gradient-text">Flow</span>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">
          Features
        </a>
        <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-300">
          Pricing
        </Link>
        <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
          About
        </Link>
        <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
          Contact
        </Link>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-sm font-medium">
          Sign In
        </Button>
        <Link href="/dashboard">
          <Button variant="default" className="text-sm font-medium">
            Get Started
          </Button>
        </Link>
      </div>
      
      <button className="md:hidden text-gray-300 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
