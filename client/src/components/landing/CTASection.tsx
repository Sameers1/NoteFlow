import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CTASection: React.FC = () => {
  const benefits = [
    "Save hours on meeting documentation",
    "Never miss important action items",
    "Easily share insights with your team",
    "Focus on conversations, not note-taking"
  ];
  
  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-60 h-60 bg-primary/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-purple-600/20 rounded-full filter blur-3xl animate-float-delay-1"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="glass-card-highlighted rounded-3xl overflow-hidden">
          <div className="px-8 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to transform your <span className="gradient-text">meetings</span>?
              </h2>
              
              <p className="text-lg text-gray-300 mb-8">
                Start using NoteFlow today and never worry about taking meeting notes again.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/dashboard">
                  <Button className="glow-effect relative w-full sm:w-auto group">
                    <span className="relative z-10 flex items-center">
                      Get Started for Free
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" className="w-full sm:w-auto">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-75 blur-md"></div>
                <div className="relative bg-background rounded-lg p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg mr-4">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">14-day free trial</h3>
                      <p className="text-sm text-gray-400">No credit card required</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-900/50 rounded-md border border-gray-800">
                      <div className="text-sm text-gray-400 mb-1">What users are saying</div>
                      <p className="text-sm text-gray-300">
                        "NoteFlow has saved our team countless hours. The AI summaries are incredibly accurate."
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div 
                            key={i} 
                            className="w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs text-white font-medium"
                          >
                            {String.fromCharCode(64 + i)}
                          </div>
                        ))}
                      </div>
                      <div className="text-sm text-gray-400">
                        Joined by 10,000+ teams
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;