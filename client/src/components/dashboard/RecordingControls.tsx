import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface RecordingControlsProps {
  onRecordingChange: (isRecording: boolean) => void;
}

const RecordingControls: React.FC<RecordingControlsProps> = ({ onRecordingChange }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, []);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    onRecordingChange(!isRecording);

    if (!isRecording) {
      // Start recording
      setRecordingTime(0);
      timerRef.current = window.setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } else {
      // Stop recording
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
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
          <button
            onClick={toggleRecording}
            className={`w-24 h-24 rounded-full border-4 flex items-center justify-center mb-4 transition-all duration-300 hover:bg-muted ${
              isRecording 
                ? "bg-red-600 border-red-500" 
                : "bg-muted border-primary"
            }`}
            aria-label={isRecording ? "Stop recording" : "Start recording"}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-10 w-10 ${isRecording ? "text-white recording-pulse" : "text-primary"}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isRecording 
                  ? "M5 5h14v14H5z" // Stop icon (square)
                  : "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" // Microphone icon
                }
              />
            </svg>
          </button>
          <span className={`text-lg mb-2 ${isRecording ? "text-red-500" : "text-gray-300"}`}>
            {isRecording ? "Recording..." : "Ready to record"}
          </span>
          <span className="text-gray-400 text-sm font-mono">
            {formatTime(recordingTime)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecordingControls;
