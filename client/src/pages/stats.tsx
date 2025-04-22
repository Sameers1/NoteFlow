import React from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowUpCircle, Clock, Calendar, BarChart3, 
  PieChart, FileBarChart, Users, HeadphonesIcon,
  TimerIcon, ClockIcon, BarChart2, LineChart
} from "lucide-react";
import { 
  ResponsiveContainer, PieChart as RechartsPieChart, 
  Pie, Cell, BarChart, Bar, XAxis, YAxis, 
  Tooltip, CartesianGrid, LineChart as RechartsLineChart,
  Line, Legend, AreaChart, Area
} from "recharts";

// Sample data for charts
const monthlyUsageData = [
  { name: 'Jan', minutes: 120, transcriptions: 8 },
  { name: 'Feb', minutes: 180, transcriptions: 12 },
  { name: 'Mar', minutes: 210, transcriptions: 14 },
  { name: 'Apr', minutes: 240, transcriptions: 18 },
  { name: 'May', minutes: 150, transcriptions: 10 },
  { name: 'Jun', minutes: 190, transcriptions: 15 },
];

const pieData = [
  { name: 'Team Meetings', value: 40 },
  { name: 'Client Calls', value: 25 },
  { name: 'Interviews', value: 20 },
  { name: 'Webinars', value: 15 },
];

const COLORS = ['#8b5cf6', '#3b82f6', '#10b981', '#f43f5e'];

const UsageStats: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1">Usage Statistics</h1>
        <p className="text-gray-400">Monitor your service usage and subscription details</p>
      </div>
      
      {/* Current plan info */}
      <Card className="glass-card mb-6 border-primary/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-2 flex items-center">
                <span className="gradient-text">Pro Plan</span>
                <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-primary/20 text-primary">Active</span>
              </h2>
              <p className="text-gray-400 mb-4">Billed monthly • Renews on May 22, 2025</p>
              <div className="flex space-x-3">
                <button className="px-4 py-2 rounded-md bg-primary/10 text-primary border border-primary/20 text-sm hover:bg-primary/20 transition-colors">
                  Upgrade Plan
                </button>
                <button className="px-4 py-2 rounded-md bg-background/50 border border-gray-800 text-sm hover:bg-background/80 transition-colors">
                  Billing History
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col justify-center items-center bg-background/40 rounded-lg border border-gray-800 p-3 md:p-4">
                <span className="text-gray-400 text-sm">Recording Time</span>
                <span className="text-2xl font-bold mt-2">48%</span>
                <span className="text-xs text-gray-500 mt-1">240/500 minutes</span>
              </div>
              <div className="flex flex-col justify-center items-center bg-background/40 rounded-lg border border-gray-800 p-3 md:p-4">
                <span className="text-gray-400 text-sm">API Processing</span>
                <span className="text-2xl font-bold mt-2">36%</span>
                <span className="text-xs text-gray-500 mt-1">12/25 hours</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Usage details with charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <h3 className="text-lg font-medium flex items-center">
              <Clock className="w-5 h-5 mr-2 text-primary/80" />
              Monthly Usage Trend
            </h3>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={monthlyUsageData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorTranscriptions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <Tooltip contentStyle={{ backgroundColor: '#111', borderColor: '#333' }} />
                <Legend />
                <Area type="monotone" dataKey="minutes" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorMinutes)" />
                <Area type="monotone" dataKey="transcriptions" stroke="#3b82f6" fillOpacity={1} fill="url(#colorTranscriptions)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <h3 className="text-lg font-medium flex items-center">
              <PieChart className="w-5 h-5 mr-2 text-primary/80" />
              Meeting Types Distribution
            </h3>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={250}>
              <RechartsPieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#111', borderColor: '#333' }} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed usage metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="space-y-6">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-medium flex items-center">
                  <TimerIcon className="w-4 h-4 mr-2 text-blue-400" />
                  Recording Time
                </h3>
                <span className="text-xs text-gray-400 bg-gray-800/50 rounded-full px-3 py-1">
                  This Month
                </span>
              </div>
              
              <div className="text-3xl font-bold mb-2">240 <span className="text-sm text-gray-400 font-normal">/ 500 min</span></div>
              
              <Progress value={48} className="h-2 bg-gray-800" 
                indicatorClassName="bg-gradient-to-r from-blue-500 to-indigo-500" />
              
              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>0 min</span>
                <span>250 min</span>
                <span>500 min</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-medium flex items-center">
                  <ArrowUpCircle className="w-4 h-4 mr-2 text-purple-400" />
                  AI Processing
                </h3>
                <span className="text-xs text-gray-400 bg-gray-800/50 rounded-full px-3 py-1">
                  This Month
                </span>
              </div>
              
              <div className="text-3xl font-bold mb-2">12 <span className="text-sm text-gray-400 font-normal">/ 25 hrs</span></div>
              
              <Progress value={12/25*100} className="h-2 bg-gray-800" 
                indicatorClassName="bg-gradient-to-r from-purple-500 to-pink-500" />
              
              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>0 hrs</span>
                <span>12.5 hrs</span>
                <span>25 hrs</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-medium flex items-center">
                  <BarChart3 className="w-4 h-4 mr-2 text-teal-400" />
                  Exports
                </h3>
                <span className="text-xs text-gray-400 bg-gray-800/50 rounded-full px-3 py-1">
                  This Month
                </span>
              </div>
              
              <div className="text-3xl font-bold mb-2">18 <span className="text-sm text-gray-400 font-normal">/ 50</span></div>
              
              <Progress value={36} className="h-2 bg-gray-800" 
                indicatorClassName="bg-gradient-to-r from-teal-500 to-emerald-500" />
              
              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>0</span>
                <span>25</span>
                <span>50</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Activity summary */}
      <Card className="glass-card mb-6">
        <CardHeader className="pb-2">
          <h3 className="text-lg font-medium">Activity Summary</h3>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-background/20 p-4 rounded-lg border border-gray-800 backdrop-blur-sm text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-blue-400" />
              <div className="text-sm text-gray-400">Total meetings</div>
              <div className="text-2xl font-medium mt-1">24</div>
            </div>
            <div className="bg-background/20 p-4 rounded-lg border border-gray-800 backdrop-blur-sm text-center">
              <ClockIcon className="w-6 h-6 mx-auto mb-2 text-purple-400" />
              <div className="text-sm text-gray-400">Hours recorded</div>
              <div className="text-2xl font-medium mt-1">18.2</div>
            </div>
            <div className="bg-background/20 p-4 rounded-lg border border-gray-800 backdrop-blur-sm text-center">
              <FileBarChart className="w-6 h-6 mx-auto mb-2 text-pink-400" />
              <div className="text-sm text-gray-400">Action items</div>
              <div className="text-2xl font-medium mt-1">86</div>
            </div>
            <div className="bg-background/20 p-4 rounded-lg border border-gray-800 backdrop-blur-sm text-center">
              <HeadphonesIcon className="w-6 h-6 mx-auto mb-2 text-teal-400" />
              <div className="text-sm text-gray-400">Active devices</div>
              <div className="text-2xl font-medium mt-1">3</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default UsageStats;