import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, MessageSquare, ListChecks, Clock } from "lucide-react";

interface TranscriptionAreaProps {
  isRecording: boolean;
  transcriptionData?: Array<{
    speaker: string;
    text: string;
  }>;
}

// Sample key topics - would come from AI processing in a real app
const sampleKeyTopics = [
  { topic: "Q2 Performance Results", summary: "15% increase in user engagement since the last update." },
  { topic: "Onboarding Flow Improvements", summary: "Direct correlation between new user onboarding and increased retention rates." },
  { topic: "Feature Release Schedule", summary: "New dashboard features planned for next month with beta testing starting in 2 weeks." },
  { topic: "Customer Feedback Analysis", summary: "Mobile app reviews showing positive response to latest UI changes." }
];

// Sample action items - would come from AI processing in a real app
const sampleActionItems = [
  { person: "John", task: "Share Q2 report with the team", due: "Today" },
  { person: "Sarah", task: "Schedule follow-up meeting with UX team", due: "Apr 25" },
  { person: "Michael", task: "Submit budget proposal for new features", due: "Apr 30" }
];

const TranscriptionArea: React.FC<TranscriptionAreaProps> = ({ 
  isRecording,
  transcriptionData = []
}) => {
  const [liveView, setLiveView] = useState(false);
  
  return (
    <Card className="glass-card h-full">
      <CardHeader className="flex flex-row items-center justify-between p-6 pb-2">
        <h2 className="text-xl font-semibold flex items-center">
          <span className="gradient-text">NoteFlow</span> 
          {isRecording && (
            <Badge variant="outline" className="ml-2 bg-red-500/20 text-red-400 border-red-500/50">
              <span className="animate-pulse mr-1">●</span> Recording
            </Badge>
          )}
        </h2>
        <div className="flex items-center space-x-3">
          <button 
            className={`p-2 ${liveView ? 'bg-primary/20 text-primary' : 'text-gray-400'} hover:text-white rounded-lg transition-colors duration-300`} 
            aria-label="Toggle live view"
            onClick={() => setLiveView(!liveView)}
          >
            <Clock className="h-5 w-5" />
          </button>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <Tabs defaultValue="main-points" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-30 backdrop-blur-xl"></div>
            <TabsTrigger value="main-points" className="flex items-center justify-center transition-all duration-500 ease-out z-10">
              <Lightbulb className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
              <span>Key Points</span>
            </TabsTrigger>
            <TabsTrigger value="action-items" className="flex items-center justify-center transition-all duration-500 ease-out z-10">
              <ListChecks className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
              <span>Action Items</span>
            </TabsTrigger>
            <TabsTrigger value="transcript" className="flex items-center justify-center transition-all duration-500 ease-out z-10">
              <MessageSquare className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
              <span>Full Transcript</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent 
            value="main-points" 
            className="space-y-4 transition-opacity duration-500 animate-in fade-in-50 slide-in-from-bottom-5"
          >
            {!isRecording && transcriptionData.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center shadow-lg shadow-blue-500/5">
                  <Lightbulb className="h-8 w-8 text-blue-400 animate-pulse-slow" />
                </div>
                <h3 className="text-lg font-medium text-gray-300 mb-2">Key Points Will Appear Here</h3>
                <p className="text-gray-400 max-w-md text-sm">
                  Start recording to automatically identify and organize the main discussion topics.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {sampleKeyTopics.map((topic, idx) => (
                  <div 
                    key={idx} 
                    className="bg-background/30 p-4 rounded-lg border border-gray-800 hover:border-primary/40 hover:bg-background/50 transition-all duration-300 transform-gpu hover:-translate-y-1"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <h3 className="text-md font-medium text-primary mb-1">{topic.topic}</h3>
                    <p className="text-sm text-gray-300">{topic.summary}</p>
                  </div>
                ))}
                {isRecording && (
                  <div className="relative bg-background/30 p-4 rounded-lg border border-primary/20 animate-pulse-slow">
                    <div className="flex items-center text-primary">
                      <span className="animate-pulse mr-2">●</span>
                      <span className="text-sm">Identifying key points in real-time...</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </TabsContent>
          
          <TabsContent 
            value="action-items" 
            className="space-y-4 transition-opacity duration-500 animate-in fade-in-50 slide-in-from-bottom-5"
          >
            {!isRecording && transcriptionData.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center shadow-lg shadow-purple-500/5">
                  <ListChecks className="h-8 w-8 text-purple-400 animate-pulse-slow" />
                </div>
                <h3 className="text-lg font-medium text-gray-300 mb-2">No Action Items Yet</h3>
                <p className="text-gray-400 max-w-md text-sm">
                  Start recording to automatically identify and track action items from your meeting.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {sampleActionItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex justify-between bg-background/30 p-3 rounded-lg border border-gray-800 hover:border-purple-500/40 hover:bg-background/50 transition-all duration-300 transform-gpu hover:-translate-y-1"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <Badge variant="outline" className="bg-purple-500/10 border-purple-500/20 text-xs px-2 mr-2 transition-colors">
                          {item.person}
                        </Badge>
                        <span className="text-sm text-gray-300">{item.task}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs px-2 self-start ml-2 border-gray-700 bg-gray-800/50">
                      {item.due}
                    </Badge>
                  </div>
                ))}
                {isRecording && (
                  <div className="relative bg-background/30 p-4 rounded-lg border border-purple-500/20 animate-pulse-slow">
                    <div className="flex items-center text-purple-400">
                      <span className="animate-pulse mr-2">●</span>
                      <span className="text-sm">Detecting action items in real-time...</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </TabsContent>
          
          <TabsContent 
            value="transcript" 
            className="space-y-4 max-h-80 overflow-y-auto transition-opacity duration-500 animate-in fade-in-50 slide-in-from-bottom-5"
          >
            {!isRecording && transcriptionData.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center shadow-lg shadow-teal-500/5">
                  <MessageSquare className="h-8 w-8 text-teal-400 animate-pulse-slow" />
                </div>
                <h3 className="text-lg font-medium text-gray-300 mb-2">No Transcript Yet</h3>
                <p className="text-gray-400 max-w-md text-sm">
                  Click the microphone button to start recording your meeting. 
                  The full transcript will appear here in real-time.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-sm">
                {transcriptionData.map((item, idx) => (
                  <div 
                    key={idx}
                    className="pb-3 border-b border-gray-800 hover:border-teal-500/20 transition-all duration-300"
                  >
                    <div className="flex items-center mb-1">
                      <Badge className="bg-blue-500/20 text-blue-400 border-none mr-2">{item.speaker}</Badge>
                      <span className="text-xs text-gray-500">{new Date().toLocaleTimeString()}</span>
                    </div>
                    <p className="text-gray-300 hover:text-white transition-colors duration-300">{item.text}</p>
                  </div>
                ))}
                
                {isRecording && (
                  <div className="relative bg-background/30 p-3 rounded-lg border border-teal-500/20 animate-pulse-slow">
                    <div className="flex items-center text-teal-400">
                      <span className="animate-pulse mr-2">●</span>
                      <span className="text-sm">Listening...</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TranscriptionArea;
