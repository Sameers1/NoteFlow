import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TranscriptionAreaProps {
  isRecording: boolean;
  transcriptionData?: Array<{
    speaker: string;
    text: string;
  }>;
}

const TranscriptionArea: React.FC<TranscriptionAreaProps> = ({ 
  isRecording,
  transcriptionData = []
}) => {
  return (
    <Card className="glass-card h-full">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Live Transcription</h2>
          <div className="flex items-center space-x-3">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-300" aria-label="Settings">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors duration-300" aria-label="Expand">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="transcription-area bg-muted p-5 rounded-xl">
          {!isRecording && transcriptionData.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 mb-6 rounded-full bg-background flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-300 mb-3">No Recording Yet</h3>
              <p className="text-gray-400 max-w-md">
                Click the microphone button to start recording your meeting. 
                Your transcription will appear here in real-time.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Sample transcription content - would be populated by real data */}
              <div className="mb-4">
                <span className="font-medium text-primary-400">John:</span>
                <p className="text-white">Welcome everyone to our weekly product meeting. I'd like to start by discussing our Q2 results and then move on to the upcoming feature releases.</p>
              </div>
              
              <div className="mb-4">
                <span className="font-medium text-primary-400">Sarah:</span>
                <p className="text-white">Thanks John. I've prepared a brief overview of our performance metrics. We're seeing a 15% increase in user engagement since the last update.</p>
              </div>
              
              <div className="mb-4">
                <span className="font-medium text-primary-400">Michael:</span>
                <p className="text-white">That's great news. I think it's directly related to the improvements we made to the onboarding flow.</p>
              </div>
              
              {isRecording && (
                <div className="mb-4 relative">
                  <span className="font-medium text-primary-400">Current Speaker:</span>
                  <p className="text-white">
                    <span className="inline-block w-4 h-4 bg-primary-400 rounded-full mr-2 animate-pulse"></span>
                    Listening...
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TranscriptionArea;
