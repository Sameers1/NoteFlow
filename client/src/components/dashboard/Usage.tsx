import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowUpCircle, Clock, Calendar, BarChart3 } from "lucide-react";

const Usage: React.FC = () => {
  return (
    <Card className="glass-card overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold">Usage Stats</h2>
          <span className="text-xs text-gray-400 bg-gray-800/50 rounded-full px-3 py-1 flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            April 2025
          </span>
        </div>
        
        <div className="space-y-5">
          {/* Minutes Used */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">Recording Time</span>
              </div>
              <div className="text-sm font-medium">240 / 500 min</div>
            </div>
            <Progress value={48} className="h-2 bg-gray-800" 
              indicatorClassName="bg-gradient-to-r from-blue-500 to-indigo-500" />
          </div>
          
          {/* Transcription Credits */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm">
                <ArrowUpCircle className="h-4 w-4 mr-2 text-purple-400" />
                <span className="text-gray-300">AI Processing</span>
              </div>
              <div className="text-sm font-medium">12 / 25 hrs</div>
            </div>
            <Progress value={12/25*100} className="h-2 bg-gray-800" 
              indicatorClassName="bg-gradient-to-r from-purple-500 to-pink-500" />
          </div>
          
          {/* API Usage */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center text-sm">
                <BarChart3 className="h-4 w-4 mr-2 text-teal-400" />
                <span className="text-gray-300">Exports</span>
              </div>
              <div className="text-sm font-medium">18 / 50</div>
            </div>
            <Progress value={36} className="h-2 bg-gray-800" 
              indicatorClassName="bg-gradient-to-r from-teal-500 to-emerald-500" />
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-background/20 p-3 rounded-lg border border-gray-800 backdrop-blur-sm">
              <div className="text-sm text-gray-400">Total meetings</div>
              <div className="text-xl font-medium mt-1">24</div>
            </div>
            <div className="bg-background/20 p-3 rounded-lg border border-gray-800 backdrop-blur-sm">
              <div className="text-sm text-gray-400">Action items</div>
              <div className="text-xl font-medium mt-1">86</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Usage;