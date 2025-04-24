import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mic, Volume2, AlertTriangle, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AudioSource: React.FC = () => {
  const [audioLevel, setAudioLevel] = useState(0);
  const [audioDevices, setAudioDevices] = useState<{ value: string; label: string }[]>([]);
  const [selectedDevice, setSelectedDevice] = useState("default");
  const [sampleRate, setSampleRate] = useState(0);
  const [bitDepth, setBitDepth] = useState(0);
  const [signalQuality, setSignalQuality] = useState("Good signal quality");
  const [lastQualityChange, setLastQualityChange] = useState(Date.now());
  const [lastLevel, setLastLevel] = useState(0);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    // Initialize audio context and get available devices
    const initAudio = async () => {
      try {
        // Initialize audio context first
        audioContextRef.current = new AudioContext();
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 256;
        
        // Get available audio devices
        const devices = await navigator.mediaDevices.enumerateDevices();
        const audioInputs = devices
          .filter(device => device.kind === 'audioinput')
          .map(device => ({
            value: device.deviceId || `device-${Math.random().toString(36).substr(2, 9)}`,
            label: device.label || `Microphone ${device.deviceId?.slice(0, 5) || 'Default'}`
          }));
        
        // Ensure we have at least one device
        if (audioInputs.length === 0) {
          audioInputs.push({
            value: 'default',
            label: 'Default Microphone'
          });
        }
        
        setAudioDevices(audioInputs);
        
        // Start monitoring immediately with default device
        await startMonitoring(audioInputs[0].value);
        
        // Start monitoring levels right away
        monitorAudioLevel();
      } catch (error) {
        console.error('Error initializing audio:', error);
      }
    };

    initAudio();

    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const startMonitoring = async (deviceId: string) => {
    try {
      // Stop previous stream if exists
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
      }

      // Get new stream with fallback to default
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          deviceId: deviceId === "default" ? undefined : deviceId,
          sampleRate: 48000,
          channelCount: 1,
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false
        }
      }).catch(async (error) => {
        console.warn('Failed to access selected device, falling back to default:', error);
        return navigator.mediaDevices.getUserMedia({
          audio: {
            sampleRate: 48000,
            channelCount: 1,
            echoCancellation: false,
            noiseSuppression: false,
            autoGainControl: false
          }
        });
      });
      
      mediaStreamRef.current = stream;
      
      // Connect to analyser
      const source = audioContextRef.current!.createMediaStreamSource(stream);
      source.connect(analyserRef.current!);
      
      // Get audio track settings
      const audioTrack = stream.getAudioTracks()[0];
      const settings = audioTrack.getSettings();
      setSampleRate(settings.sampleRate || 48000);
      setBitDepth(settings.sampleSize || 24);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      setSignalQuality("Microphone access denied");
      setSelectedDevice("default");
    }
  };

  const monitorAudioLevel = () => {
    const analyser = analyserRef.current;
    if (!analyser) return;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    
    const updateLevel = () => {
      analyser.getByteFrequencyData(dataArray);
      
      // Calculate average level with emphasis on higher frequencies (voice range)
      const voiceRange = dataArray.slice(20, 100);
      const average = voiceRange.reduce((a, b) => a + b) / voiceRange.length;
      
      // Boost sensitivity for voice detection
      const rawLevel = Math.min(100, Math.round((average / 128) * 100));
      
      // Apply less aggressive smoothing
      const smoothedLevel = Math.round(lastLevel * 0.3 + rawLevel * 0.7);
      setLastLevel(smoothedLevel);
      setAudioLevel(smoothedLevel);
      
      // Update signal quality with hysteresis and debouncing
      const now = Date.now();
      if (now - lastQualityChange > 1000) { // Reduced to 1 second
        let newQuality = signalQuality;
        
        if (smoothedLevel < 5) {
          newQuality = "No signal";
        } else if (smoothedLevel < 20) {
          newQuality = "Weak signal";
        } else if (smoothedLevel < 50) {
          newQuality = "Good signal";
        } else {
          newQuality = "Strong signal";
        }
        
        if (newQuality !== signalQuality) {
          setSignalQuality(newQuality);
          setLastQualityChange(now);
        }
      }
      
      requestAnimationFrame(updateLevel);
    };
    
    updateLevel();
  };

  const handleDeviceChange = (value: string) => {
    setSelectedDevice(value);
    startMonitoring(value);
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
                  <SelectItem key={device.value} value={device.value} className="hover:bg-primary/10">
                    {device.label}
                  </SelectItem>
                ))}
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
            <span className={`h-2 w-2 rounded-full mr-1.5 ${
              signalQuality.includes("No") ? "bg-red-500" :
              signalQuality.includes("Weak") ? "bg-yellow-500" :
              signalQuality.includes("Good") ? "bg-green-500" :
              "bg-blue-500"
            }`}></span>
            {signalQuality}
          </span>
          <span className="text-gray-500">{sampleRate}Hz / {bitDepth}-bit</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AudioSource;
