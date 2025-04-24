import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mic, Volume2, AlertTriangle, ChevronDown, Monitor, MicOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface AudioSourceProps {
  onAudioStart: (stream: MediaStream) => void;
  onAudioStop: () => void;
}

const AudioSource: React.FC<AudioSourceProps> = ({ onAudioStart, onAudioStop }) => {
  const [audioDevices, setAudioDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<string>("");
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    const getAudioDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const audioInputs = devices.filter(device => device.kind === 'audioinput');
        setAudioDevices(audioInputs);
        
        if (audioInputs.length > 0) {
          const defaultDevice = audioInputs.find(d => d.deviceId === 'default') || audioInputs[0];
          setSelectedDevice(defaultDevice.deviceId || crypto.randomUUID());
        }
      } catch (error) {
        console.error('Error getting audio devices:', error);
      }
    };

    getAudioDevices();
  }, []);

  const startMonitoring = async (deviceId: string) => {
    try {
      const constraints = {
        audio: {
          deviceId: deviceId ? { exact: deviceId } : undefined,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      };

      const audioStream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(audioStream);
      setIsMonitoring(true);
      onAudioStart(audioStream);
    } catch (error) {
      console.error('Error starting audio monitoring:', error);
    }
  };

  const stopMonitoring = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setIsMonitoring(false);
      onAudioStop();
    }
  };

  const handleDeviceChange = (value: string) => {
    setSelectedDevice(value);
    if (isMonitoring) {
      stopMonitoring();
      startMonitoring(value);
    }
  };

  return (
    <Card className="glass-card overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold flex items-center">
              <Mic className="w-5 h-5 mr-2 text-primary" />
              Audio Source
            </h2>
          </div>
          <Badge variant="outline" className="bg-background/50 text-xs">
            Live Input
          </Badge>
        </div>
        
        <div className="mb-5">
          <Label htmlFor="audio-source" className="block text-sm text-gray-400 mb-2">
            Input Device
          </Label>
          <div className="relative">
            <Select value={selectedDevice} onValueChange={handleDeviceChange}>
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
                  <SelectItem key={device.deviceId || crypto.randomUUID()} value={device.deviceId || crypto.randomUUID()} className="hover:bg-primary/10">
                    {device.label || 'Default Microphone'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="mt-4 flex justify-center">
          <Button
            onClick={() => isMonitoring ? stopMonitoring() : startMonitoring(selectedDevice)}
            variant={isMonitoring ? "default" : "outline"}
            className="flex items-center gap-2"
          >
            {isMonitoring ? (
              <>
                <MicOff className="w-4 h-4" />
                Stop Monitoring
              </>
            ) : (
              <>
                <Mic className="w-4 h-4" />
                Start Monitoring
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudioSource;
