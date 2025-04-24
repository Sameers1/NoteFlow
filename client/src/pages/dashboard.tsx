import React, { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import RecordingControls from "@/components/dashboard/RecordingControls";
import AudioSource from "@/components/dashboard/AudioSource";
import ExportOptions from "@/components/dashboard/ExportOptions";
import TranscriptionArea from "@/components/dashboard/TranscriptionArea";
import Usage from "@/components/dashboard/Usage";

const Dashboard: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);

  const handleRecordingChange = (recording: boolean) => {
    setIsRecording(recording);
  };

  const handleTranscriptUpdate = (text: string) => {
    setTranscript(text);
  };

  const handleAudioStart = (stream: MediaStream) => {
    setAudioStream(stream);
  };

  const handleAudioStop = () => {
    setAudioStream(null);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Column: Control Panel */}
        <div className="md:w-1/3 space-y-6">
          <RecordingControls 
            onRecordingChange={handleRecordingChange} 
            onTranscriptUpdate={handleTranscriptUpdate}
          />
          <AudioSource 
            onAudioStart={handleAudioStart}
            onAudioStop={handleAudioStop}
          />
          <ExportOptions />
        </div>
        
        {/* Right Column: Transcription Area */}
        <div className="md:w-2/3">
          <TranscriptionArea 
            isRecording={isRecording} 
            transcriptionData={[
              {
                speaker: "You",
                text: transcript
              }
            ]}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
