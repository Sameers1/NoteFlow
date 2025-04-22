import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const AudioSource: React.FC = () => {
  const [audioLevel, setAudioLevel] = useState(0);
  const [audioDevices, setAudioDevices] = useState<{ value: string; label: string }[]>([
    { value: "default", label: "Default Microphone" }
  ]);

  useEffect(() => {
    // Simulate audio level visualization
    let interval: number | null = null;
    
    const simulateAudioLevel = () => {
      interval = window.setInterval(() => {
        const randomLevel = Math.floor(Math.random() * 100);
        setAudioLevel(randomLevel);
      }, 200);
    };

    // In a real app, we would check if user is recording
    // and only simulate when recording is active
    simulateAudioLevel();

    return () => {
      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, []);

  return (
    <Card className="glass-card">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Audio Source</h2>
        <div className="mb-4">
          <Label htmlFor="audio-source" className="block text-sm text-gray-400 mb-2">
            Select input device
          </Label>
          <div className="relative">
            <Select defaultValue="default">
              <SelectTrigger id="audio-source" className="w-full bg-muted text-white border-muted">
                <SelectValue placeholder="Select microphone" />
              </SelectTrigger>
              <SelectContent>
                {audioDevices.map((device) => (
                  <SelectItem key={device.value} value={device.value}>
                    {device.label}
                  </SelectItem>
                ))}
                <SelectItem value="built-in">Built-in Microphone</SelectItem>
                <SelectItem value="headset">Headset Microphone</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="mb-4">
          <Label className="block text-sm text-gray-400 mb-2">Input Level</Label>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-indigo-600 to-purple-600" 
              style={{ width: `${audioLevel}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudioSource;
