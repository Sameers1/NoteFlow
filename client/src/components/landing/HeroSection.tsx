import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mic, FileText, Sparkles } from "lucide-react";

const HeroSection: React.FC = () => {
  const [typingText, setTypingText] = useState(false);
  
  useEffect(() => {
    // Start typing animation after a short delay
    const timer = setTimeout(() => {
      setTypingText(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-20 pb-24 px-6 md:px-12 overflow-hidden">
      {/* Ambient Glowing Orbs */}
      <div className="glowing-orbs">
        <div className="orb bg-blue-500/30 w-96 h-96 left-1/4 top-1/4 animate-float"></div>
        <div className="orb bg-purple-500/30 w-96 h-96 right-1/4 bottom-1/4 animate-float-delay-1"></div>
        <div className="orb bg-indigo-500/20 w-72 h-72 left-1/3 bottom-1/3 animate-float-delay-2"></div>
        <div className="orb bg-pink-500/20 w-60 h-60 right-1/5 top-1/5"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="relative inline-flex items-center justify-center">
              <div className="absolute -inset-px rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-50 blur-xl"></div>
              <div className="relative bg-background/30 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
                <span className="text-xs md:text-sm text-white flex items-center">
                  <Sparkles className="h-3 w-3 mr-2 text-purple-400" />
                  <span>AI-Powered Meeting Assistant</span>
                </span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-sans glow-text">
            <span className="gradient-text">NoteFlow</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto ${typingText ? "typing-animation typing-cursor" : ""}`}>
            Transform your meetings into actionable notes
          </p>
          
          <Link href="/dashboard">
            <Button variant="default" size="lg" className="glow-effect px-8 py-6 text-lg relative group">
              <span className="relative z-10 flex items-center">
                Get Started
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
          </Link>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card-highlighted rounded-2xl p-6 md:p-8 transition-all duration-500 breathe">
            <div className="bg-background/80 rounded-xl p-4 min-h-[300px] md:min-h-[400px] relative overflow-hidden">
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="pt-8 px-4">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg animate-float">
                    <Mic className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="w-32 h-6 bg-muted rounded-md shimmer-effect"></div>
                    <div className="w-24 h-4 bg-muted rounded-md mt-2 shimmer-effect"></div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-24 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shimmer-effect"></div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 h-full">
                    <div className="h-full w-0.5 bg-gradient-to-b from-indigo-600/50 to-purple-600/50"></div>
                  </div>
                  
                  <div className="space-y-3 pl-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-500/30 mr-3"></div>
                      <div className="w-full h-5 bg-muted rounded-md shimmer-effect"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500/30 mr-3"></div>
                      <div className="w-5/6 h-5 bg-muted rounded-md shimmer-effect"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-purple-500/30 mr-3"></div>
                      <div className="w-full h-5 bg-muted rounded-md shimmer-effect"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-pink-500/30 mr-3"></div>
                      <div className="w-4/6 h-5 bg-muted rounded-md shimmer-effect"></div>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-800">
                      <div className="flex items-start space-x-2">
                        <div className="mt-1">
                          <FileText className="h-5 w-5 text-indigo-400" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="text-xs text-gray-400">Key Points Summary</div>
                          <div className="w-full h-4 bg-muted rounded-md shimmer-effect"></div>
                          <div className="w-5/6 h-4 bg-muted rounded-md shimmer-effect"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-600/10 rounded-full blur-xl"></div>
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-600/10 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
