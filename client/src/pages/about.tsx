import React from "react";
import LandingLayout from "@/layouts/LandingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Mic, FileText, Clock, Users, MessageSquare, LightbulbIcon } from "lucide-react";

const AboutCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode;
}) => {
  return (
    <Card className="border-gray-800 bg-background/80 backdrop-blur-md h-full">
      <CardContent className="pt-6">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
};

const About: React.FC = () => {
  return (
    <LandingLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">NoteFlow</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming the way teams capture, process, and utilize meeting information
          </p>
        </div>

        <div className="md:flex items-center gap-12 mb-24">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-xl"></div>
              <div className="relative bg-background/30 backdrop-blur-md p-6 rounded-lg border border-gray-800">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-300 mb-6">
                  At NoteFlow, we believe that great ideas shouldn't get lost in meetings. Our mission is to help teams focus on meaningful conversations while our AI-powered tools capture, summarize, and organize the important information.
                </p>
                <p className="text-gray-300">
                  We're dedicated to building intuitive tools that enhance productivity and collaboration, allowing teams to spend less time taking notes and more time on what truly matters: innovation, problem-solving, and building great products.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <AboutCard 
              title="Real-time Transcription" 
              description="Advanced AI algorithms that accurately capture every word in real-time." 
              icon={<Mic className="h-8 w-8" />}
            />
            <AboutCard 
              title="Smart Summaries" 
              description="Automatically identify and highlight key discussion points and action items." 
              icon={<FileText className="h-8 w-8" />}
            />
            <AboutCard 
              title="Time Savings" 
              description="Reduce time spent on meeting notes by up to 80% and focus on meaningful work." 
              icon={<Clock className="h-8 w-8" />}
            />
            <AboutCard 
              title="Enhanced Collaboration" 
              description="Share insights and decisions with your team instantly after meetings." 
              icon={<Users className="h-8 w-8" />}
            />
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              NoteFlow was born out of frustration with traditional meeting notes and the endless hours spent trying to capture important information while also participating in discussions.
            </p>
          </div>
          <div className="bg-background/30 backdrop-blur-md p-8 border border-gray-800 rounded-lg max-w-4xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">The Problem</h3>
                <p className="text-gray-300">
                  In 2022, our founder was struggling with balancing active participation in critical product meetings while also trying to document decisions and action items. He realized that this challenge was universal—professionals everywhere were splitting their attention between engagement and documentation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">The Solution</h3>
                <p className="text-gray-300">
                  We assembled a team of AI experts, UX designers, and productivity enthusiasts to build NoteFlow—a tool that would use advanced speech recognition and natural language processing to automatically capture, organize, and highlight the most important parts of any conversation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Today</h3>
                <p className="text-gray-300">
                  NoteFlow is now used by thousands of teams across the globe, from startups to Fortune 500 companies. We continue to innovate and improve our technology, with the goal of making every meeting more productive and valuable.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose NoteFlow?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Focus on the Conversation</h3>
              <p className="text-gray-400">Be fully present in your meetings without worrying about taking notes.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Records</h3>
              <p className="text-gray-400">Capture everything accurately with our advanced transcription technology.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <LightbulbIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Extract Key Insights</h3>
              <p className="text-gray-400">Automatically identify and organize the most important discussion points.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your meetings?</h2>
          <Link href="/dashboard">
            <Button size="lg" className="mx-auto">
              Try NoteFlow Free
            </Button>
          </Link>
        </div>
      </div>
    </LandingLayout>
  );
};

export default About;