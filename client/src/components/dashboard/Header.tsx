import React, { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Monitor } from "lucide-react";

const Header: React.FC = () => {
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  const startScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true
      });
      
      setIsScreenSharing(true);
      
      // Handle stream end
      stream.getVideoTracks()[0].onended = () => {
        setIsScreenSharing(false);
      };
    } catch (error) {
      console.error('Error starting screen share:', error);
      setIsScreenSharing(false);
    }
  };

  return (
    <header className="px-6 py-4 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold font-sans">
              Note<span className="gradient-text">Flow</span>
          </Link>
          <Button
            onClick={startScreenShare}
            variant={isScreenSharing ? "default" : "outline"}
            className={`flex items-center gap-2 transition-all duration-300 relative ${
              isScreenSharing 
                ? "bg-primary text-white shadow-lg shadow-primary/20" 
                : "hover:bg-primary/10 hover:text-primary"
            }`}
          >
            <div className="absolute inset-0 rounded-md bg-primary/20 animate-pulse" />
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/30 to-purple-500/30 animate-[pulse_2s_ease-in-out_infinite]" />
            <Monitor className="w-4 h-4 relative z-10" />
            <span className="relative z-10">{isScreenSharing ? "Sharing Screen" : "Share Screen"}</span>
          </Button>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Button variant="ghost" className="flex items-center text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="hidden md:inline">Home</span>
            </Button>
          </Link>
          <Link href="/history">
            <Button variant="ghost" className="flex items-center text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="hidden md:inline">History</span>
            </Button>
          </Link>
          <Link href="/stats">
            <Button variant="ghost" className="flex items-center text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="hidden md:inline">Stats</span>
            </Button>
          </Link>
          <Link href="/settings">
            <Button variant="ghost" className="flex items-center text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="hidden md:inline">Settings</span>
            </Button>
          </Link>
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-medium">JD</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
