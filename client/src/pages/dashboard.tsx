import React, { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import RecordingControls from "@/components/dashboard/RecordingControls";
import AudioSource from "@/components/dashboard/AudioSource";
import ExportOptions from "@/components/dashboard/ExportOptions";
import TranscriptionArea from "@/components/dashboard/TranscriptionArea";
import Usage from "@/components/dashboard/Usage";

const Dashboard: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handleRecordingChange = (recording: boolean) => {
    setIsRecording(recording);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Column: Control Panel */}
        <div className="md:w-1/3 space-y-6">
          <RecordingControls onRecordingChange={handleRecordingChange} />
          <AudioSource />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ExportOptions />
            <Usage />
          </div>
        </div>
        
        {/* Right Column: Transcription Area */}
        <div className="md:w-2/3">
          <TranscriptionArea isRecording={isRecording} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
