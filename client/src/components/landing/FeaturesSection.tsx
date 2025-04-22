import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, LightbulbIcon, Repeat, MessageCircle, Clock, Stars } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
  index: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, color, index }) => {
  const animationDelay = `${index * 0.1}s`;
  
  return (
    <Card className="glass-card transition-all duration-500 hover:scale-[1.02] group relative overflow-hidden">
      <div className={`absolute inset-0 ${color} opacity-5`}></div>
      <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-gradient-to-tr from-white/5 to-transparent rounded-full"></div>
      
      <CardContent className="p-8 z-10 relative">
        <div 
          className={`w-16 h-16 ${color} rounded-2xl rotate-3 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg breathe`}
          style={{ animationDelay }}
        >
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Mic className="h-8 w-8 text-white" />,
      title: "Real-time Transcription",
      description: "Get accurate, real-time transcription of your meetings with advanced AI speech recognition technology.",
      color: "bg-gradient-to-br from-indigo-600 to-blue-700"
    },
    {
      icon: <LightbulbIcon className="h-8 w-8 text-white" />,
      title: "Smart Summarization",
      description: "AI-powered summarization extracts key points and action items, saving you hours of note-taking and review.",
      color: "bg-gradient-to-br from-purple-600 to-pink-700"
    },
    {
      icon: <Repeat className="h-8 w-8 text-white" />,
      title: "Seamless Integration",
      description: "Easily export notes to your favorite tools including Notion, Google Docs, and Microsoft 365.",
      color: "bg-gradient-to-br from-blue-600 to-cyan-700"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      title: "Speaker Identification",
      description: "Automatically detect and label different speakers for clear, organized meeting transcripts.",
      color: "bg-gradient-to-br from-green-600 to-emerald-700"
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: "Time Savings",
      description: "Save up to 80% of time spent on meeting documentation and follow-up actions.",
      color: "bg-gradient-to-br from-orange-600 to-red-700"
    },
    {
      icon: <Stars className="h-8 w-8 text-white" />,
      title: "AI Topic Detection",
      description: "Automatically identify and categorize discussion topics to create structured, searchable notes.",
      color: "bg-gradient-to-br from-pink-600 to-purple-700"
    }
  ];

  return (
    <section id="features" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 relative">
          <div className="inline-block mb-3">
            <div className="relative">
              <div className="px-4 py-1 rounded-full border border-gray-800 bg-background text-sm text-gray-400">
                WHY CHOOSE NOTEFLOW
              </div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-xl rounded-lg"></span>
              <span className="relative">Powerful </span>
            </span>
            <span className="gradient-text">Features</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto relative">
            <span className="relative z-10">Everything you need for efficient meeting documentation and knowledge extraction</span>
            <span className="absolute w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 bottom-0 left-1/2 transform -translate-x-1/2 rounded-full"></span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-20">
          <div className="inline-block glow-effect">
            <div className="relative px-8 py-4 bg-background/60 backdrop-blur rounded-lg border border-white/10">
              <p className="text-lg text-gray-300">
                Join thousands of teams who are saving time with NoteFlow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
