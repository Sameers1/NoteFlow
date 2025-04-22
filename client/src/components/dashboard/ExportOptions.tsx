import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ExportOptions: React.FC = () => {
  const handleDownloadTranscript = () => {
    // Implement download functionality here
    console.log("Downloading transcript...");
  };

  const handleGenerateSummary = () => {
    // Implement summary generation here
    console.log("Generating summary...");
  };

  return (
    <Card className="glass-card">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Export Options</h2>
        <Button 
          variant="secondary" 
          onClick={handleDownloadTranscript}
          className="w-full py-3 px-4 mb-3 transition-colors duration-300 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Transcript
        </Button>
        <Button 
          variant="secondary" 
          onClick={handleGenerateSummary}
          className="w-full py-3 px-4 transition-colors duration-300 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Generate Summary
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExportOptions;
