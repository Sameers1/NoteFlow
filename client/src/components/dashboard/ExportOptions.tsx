import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Download, FileText, Share2, Mail, Copy, Printer, 
  FileJson, FolderOpenDot, FileOutput 
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ExportOptions: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleExport = (type: string) => {
    // Implement export functionality here
    console.log(`Exporting as ${type}...`);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <Card className="glass-card">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Quick Actions</h2>
              <p className="text-sm text-gray-400 mt-1">Export or share your meeting notes</p>
            </div>
            <div className="flex items-center">
              <div className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                Pro Features
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="flex items-center space-x-2 border-gray-800 bg-background/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    onClick={() => handleExport('download')}
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download transcript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="flex items-center space-x-2 border-gray-800 bg-background/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    onClick={() => handleExport('summary')}
                  >
                    <FileText className="h-4 w-4" />
                    <span>Summary</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Generate AI summary</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="flex items-center space-x-2 border-gray-800 bg-background/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    onClick={() => handleExport('share')}
                  >
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share with team</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <div className="flex space-x-1 bg-background/20 p-2 rounded-md border border-gray-800">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleExport('copy')}
                    className="h-8 w-8 rounded-md hover:bg-primary/10 hover:text-primary"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy to clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleExport('print')}
                    className="h-8 w-8 rounded-md hover:bg-primary/10 hover:text-primary"
                  >
                    <Printer className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Print transcript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleExport('json')}
                    className="h-8 w-8 rounded-md hover:bg-primary/10 hover:text-primary"
                  >
                    <FileJson className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Export as JSON</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleExport('email')}
                    className="h-8 w-8 rounded-md hover:bg-primary/10 hover:text-primary"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Email transcript</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleExport('archive')}
                    className="h-8 w-8 rounded-md hover:bg-primary/10 hover:text-primary"
                  >
                    <FolderOpenDot className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Save to archive</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExportOptions;
