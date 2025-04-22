import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sans">
            <span className="gradient-text">NoteFlow</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your meetings into actionable notes with AI-powered transcription
          </p>
          <Link href="/dashboard">
            <Button variant="gradient" size="xl">
              Get Started
            </Button>
          </Link>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-500">
            <div className="bg-background/80 rounded-xl p-4 min-h-[300px] md:min-h-[400px] relative overflow-hidden">
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="pt-8 px-4">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <div className="w-32 h-6 bg-muted rounded-md animate-pulse"></div>
                    <div className="w-24 h-4 bg-muted rounded-md mt-2 animate-pulse"></div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-24 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg animate-pulse"></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="w-full h-5 bg-muted rounded-md animate-pulse"></div>
                  <div className="w-5/6 h-5 bg-muted rounded-md animate-pulse"></div>
                  <div className="w-full h-5 bg-muted rounded-md animate-pulse"></div>
                  <div className="w-4/6 h-5 bg-muted rounded-md animate-pulse"></div>
                  <div className="w-full h-5 bg-muted rounded-md animate-pulse"></div>
                  <div className="w-3/6 h-5 bg-muted rounded-md animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
