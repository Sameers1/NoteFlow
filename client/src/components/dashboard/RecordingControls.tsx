import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

// TypeScript definitions for Web Speech API
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
  error: any;
}

interface SpeechRecognitionResult {
  isFinal: boolean;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  start(): void;
  stop(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionEvent) => void;
}

interface Window {
  SpeechRecognition: new () => SpeechRecognition;
  webkitSpeechRecognition: new () => SpeechRecognition;
}

interface RecordingControlsProps {
  onRecordingChange: (isRecording: boolean) => void;
  onTranscriptUpdate: (text: string) => void;
}

const RecordingControls: React.FC<RecordingControlsProps> = ({ onRecordingChange, onTranscriptUpdate }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const timerRef = useRef<number | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    // Initialize Web Speech API
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join(' ');
        onTranscriptUpdate(transcript);
      };

      recognition.onerror = (event: SpeechRecognitionEvent) => {
        console.error('Speech recognition error:', event.error);
        stopRecording();
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const startRecording = () => {
    const recognition = recognitionRef.current;
    if (recognition) {
      recognition.start();
      setIsRecording(true);
      onRecordingChange(true);
      setRecordingTime(0);
      timerRef.current = window.setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
  };

  const stopRecording = () => {
    const recognition = recognitionRef.current;
    if (recognition) {
      recognition.stop();
    }
    setIsRecording(false);
    onRecordingChange(false);
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="glass-card">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-6">Recording Controls</h2>
        
        <div className="flex flex-col items-center">
          <div className="relative">
            {isRecording && (
              <>
                <div className="absolute inset-0 bg-red-500/20 rounded-full animate-pulse-slow" style={{ animationDelay: "200ms" }}></div>
                <div className="absolute inset-[-8px] bg-red-500/10 rounded-full animate-pulse-slow" style={{ animationDelay: "400ms" }}></div>
                <div className="absolute inset-[-16px] bg-red-500/5 rounded-full animate-pulse-slow" style={{ animationDelay: "600ms" }}></div>
              </>
            )}
            
            <button
              onClick={toggleRecording}
              className={`w-24 h-24 rounded-full border-4 flex items-center justify-center mb-4 transition-all duration-500 z-10 relative 
                transform hover:scale-105 ${
                isRecording 
                  ? "bg-red-600 border-red-400 shadow-lg shadow-red-500/30" 
                  : "bg-background/50 border-primary/80 hover:border-primary hover:bg-primary/5"
              }`}
              aria-label={isRecording ? "Stop recording" : "Start recording"}
            >
              <div className="relative z-20">
                {isRecording ? (
                  <div className="w-8 h-8 bg-white rounded-sm transition-all duration-300 ease-out"></div>
                ) : (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10 text-primary transition-transform duration-500 transform hover:scale-110" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>
          
          <div className="animate-in fade-in-50 slide-in-from-bottom-3 duration-500">
            <span className={`text-lg mb-2 font-medium ${isRecording ? "text-red-400" : "text-gray-300"}`}>
              {isRecording ? "Recording..." : "Ready to record"}
            </span>
          </div>
          
          <div className={`mt-2 px-4 py-2 bg-background/30 rounded-full border ${isRecording ? 'border-red-500/20' : 'border-gray-800'} 
            transition-all duration-500 ease-in-out animate-in fade-in-0 slide-in-from-bottom-2`}>
            <span className={`text-sm font-mono ${isRecording ? 'text-red-400' : 'text-gray-400'}`}>
              {formatTime(recordingTime)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecordingControls;
