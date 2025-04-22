import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mic, Volume2, AlertTriangle, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AudioSource: React.FC = () => {
  const [audioLevel, setAudioLevel] = useState(0);
  const [audioDevices, setAudioDevices] = useState<{ value: string; label: string }[]>([
    { value: "default", label: "Default Microphone" }
  ]);
  const [selectedDevice, setSelectedDevice] = useState("default");

  // Generate audio spectrum visualization
  useEffect(() => {
    // Simulate audio level visualization with a 1 second update interval
    let interval: number | null = null;
    
    const simulateAudioLevel = () => {
      interval = window.setInterval(() => {
        const randomLevel = Math.floor(Math.random() * 100);
        setAudioLevel(randomLevel);
      }, 1000); // Update every 1 second as requested
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

  const handleDeviceChange = (value: string) => {
    setSelectedDevice(value);
  };

  return (
    <Card className="glass-card overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold flex items-center">
            <Mic className="w-5 h-5 mr-2 text-primary" />
            Audio Source
          </h2>
          <Badge variant="outline" className="bg-background/50 text-xs">
            Live Input
          </Badge>
        </div>
        
        <div className="mb-5">
          <Label htmlFor="audio-source" className="block text-sm text-gray-400 mb-2">
            Input Device
          </Label>
          <div className="relative">
            <Select defaultValue="default" onValueChange={handleDeviceChange}>
              <SelectTrigger 
                id="audio-source" 
                className="w-full bg-background/50 text-white border-gray-800 transition-all duration-300 focus:border-primary/40 hover:border-gray-700 group"
              >
                <div className="flex items-center justify-between w-full">
                  <SelectValue placeholder="Select microphone" />
                  <ChevronDown className="w-4 h-4 opacity-50 group-hover:text-primary transition-colors" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-background/80 backdrop-blur-lg border-gray-800">
                {audioDevices.map((device) => (
                  <SelectItem key={device.value} value={device.value} className="hover:bg-primary/10">
                    {device.label}
                  </SelectItem>
                ))}
                <SelectItem value="built-in" className="hover:bg-primary/10">Built-in Microphone</SelectItem>
                <SelectItem value="headset" className="hover:bg-primary/10">Headset Microphone</SelectItem>
                <SelectItem value="external" className="hover:bg-primary/10">External USB Mic</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Audio Visualizer */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2">
            <Label className="text-sm text-gray-400 flex items-center">
              <Volume2 className="w-4 h-4 mr-1" />
              Input Level
            </Label>
            <span className="text-xs text-gray-500 px-2 py-0.5 bg-background/50 rounded-full">{audioLevel}%</span>
          </div>
          
          {/* Audio level bar */}
          <div className="w-full h-2 bg-background rounded-full overflow-hidden mb-4 shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-200 ease-out animate-gradient-shift" 
              style={{ width: `${audioLevel}%` }}
            ></div>
          </div>
        </div>
        
        {/* Audio quality indicator */}
        <div className="text-xs text-gray-400 flex items-center justify-between">
          <span className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-green-500 mr-1.5"></span>
            Good signal quality
          </span>
          <span className="text-gray-500">48kHz / 24-bit</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudioSource;
