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
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Quick Actions</h2>
          <div className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
            Pro Features
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-4 mb-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => handleExport('download')}
                  className="h-12 w-12 rounded-xl border-gray-800 bg-background/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <Download className="h-5 w-5" />
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
                  size="icon"
                  onClick={() => handleExport('summary')}
                  className="h-12 w-12 rounded-xl border-gray-800 bg-background/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <FileText className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Generate summary</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => handleExport('share')}
                  className="h-12 w-12 rounded-xl border-gray-800 bg-background/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share transcript</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => handleExport('email')}
                  className="h-12 w-12 rounded-xl border-gray-800 bg-background/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Email transcript</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => handleExport('copy')}
                  className="h-12 w-12 rounded-xl border-gray-800 bg-background/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <Copy className="h-5 w-5" />
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
                  variant="outline" 
                  size="icon"
                  onClick={() => handleExport('print')}
                  className="h-12 w-12 rounded-xl border-gray-800 bg-background/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <Printer className="h-5 w-5" />
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
                  variant="outline" 
                  size="icon"
                  onClick={() => handleExport('json')}
                  className="h-12 w-12 rounded-xl border-gray-800 bg-background/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <FileJson className="h-5 w-5" />
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
                  variant="outline" 
                  size="icon"
                  onClick={() => handleExport('archive')}
                  className="h-12 w-12 rounded-xl border-gray-800 bg-background/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                >
                  <FolderOpenDot className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Save to archive</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExportOptions;
