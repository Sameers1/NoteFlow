import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatTime } from "@/lib/utils";
import { Link } from "wouter";
import { 
  Clock, Calendar, FileText, MessageSquare, 
  FileCheck, Play, Download, Star, 
  MoreHorizontal, ChevronRight, Filter
} from "lucide-react";

const historyItems = [
  {
    id: 1,
    title: "Weekly Product Team Meeting",
    date: "Apr 21, 2025",
    time: "10:00 AM",
    duration: 3600, // 1 hour
    participants: ["John D.", "Sarah K.", "Michael R."],
    keywords: ["product roadmap", "q2 results", "feature release"],
    starred: true
  },
  {
    id: 2,
    title: "UI/UX Design Feedback",
    date: "Apr 18, 2025",
    time: "2:30 PM",
    duration: 1800, // 30 minutes
    participants: ["Alex T.", "Emma L."],
    keywords: ["dashboard", "mobile app", "user testing"],
    starred: false
  },
  {
    id: 3,
    title: "Quarterly Stakeholder Review",
    date: "Apr 15, 2025",
    time: "11:00 AM",
    duration: 5400, // 1.5 hours
    participants: ["David M.", "Jessica H.", "Chris P.", "Amanda S."],
    keywords: ["financial results", "growth metrics", "strategic goals"],
    starred: true
  },
  {
    id: 4,
    title: "Marketing Campaign Planning",
    date: "Apr 12, 2025",
    time: "9:30 AM",
    duration: 2700, // 45 minutes
    participants: ["Sophia W.", "Marcus J."],
    keywords: ["social media", "content strategy", "budget allocation"],
    starred: false
  },
  {
    id: 5,
    title: "Customer Support Alignment",
    date: "Apr 10, 2025",
    time: "3:00 PM",
    duration: 1800, // 30 minutes
    participants: ["Ryan T.", "Olivia P."],
    keywords: ["ticket metrics", "customer satisfaction", "process improvement"],
    starred: false
  },
];

const History: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Meeting History</h1>
          <p className="text-gray-400">Access and manage your past meeting recordings</p>
        </div>
        <div className="flex space-x-2">
          <Button size="sm" variant="outline" className="border-gray-800 bg-background/50 hover:bg-background/80">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm" variant="default">
            <FileText className="h-4 w-4 mr-2" />
            New Meeting
          </Button>
        </div>
      </div>
      
      <div className="space-y-4">
        {historyItems.map((item) => (
          <Card key={item.id} className="glass-card overflow-hidden hover:border-primary/20 transition-all duration-300 group">
            <Link href={`/recording/${item.id}`}>
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Left: Play button area */}
                  <div className="w-full md:w-24 bg-primary/5 flex items-center justify-center p-6">
                    <div className="relative">
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="h-14 w-14 rounded-full bg-background/20 hover:bg-primary/20 hover:text-primary transition-all duration-300 border border-gray-800 hover:scale-105"
                      >
                        <Play className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Center: Meeting details */}
                  <div className="flex-1 p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        {item.starred && (
                          <Star className="h-4 w-4 text-yellow-500 ml-2" fill="currentColor" />
                        )}
                      </div>
                      <div className="text-gray-400 flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{formatTime(item.duration)}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.keywords.map((keyword, idx) => (
                        <Badge key={idx} variant="outline" className="bg-primary/5 border-primary/20 text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between gap-y-2">
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{item.date} • {item.time}</span>
                      </div>
                      
                      <div className="flex -space-x-2">
                        {item.participants.slice(0, 3).map((participant, idx) => (
                          <div 
                            key={idx} 
                            className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xs font-medium border-2 border-background"
                            style={{ 
                              zIndex: item.participants.length - idx,
                              background: idx % 3 === 0 ? 'linear-gradient(to bottom right, #8b5cf6, #3b82f6)' : 
                                         idx % 3 === 1 ? 'linear-gradient(to bottom right, #ec4899, #8b5cf6)' :
                                         'linear-gradient(to bottom right, #3b82f6, #10b981)'
                            }}
                          >
                            {participant.split(' ').map(n => n[0]).join('')}
                          </div>
                        ))}
                        {item.participants.length > 3 && (
                          <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs border-2 border-background" style={{ zIndex: 0 }}>
                            +{item.participants.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right: Actions */}
                  <div className="w-full md:w-auto border-t md:border-t-0 md:border-l border-gray-800 flex flex-row md:flex-col p-3 justify-around">
                    <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
        
        <Button variant="ghost" className="w-full py-4 text-gray-400 border border-dashed border-gray-800 hover:border-primary/40">
          Load more recordings
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default History;