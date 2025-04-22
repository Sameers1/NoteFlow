import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  index: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  author, 
  role, 
  company, 
  avatar,
  index
}) => {
  // Create alternating card styles
  const isEven = index % 2 === 0;
  
  return (
    <Card className={`glass-card h-full transition-all duration-500 overflow-hidden group hover:scale-[1.02] relative ${isEven ? 'border-indigo-800/20' : 'border-purple-800/20'}`}>
      <CardContent className="p-8">
        <div className="absolute -right-8 -top-8 w-16 h-16 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-full blur-xl"></div>
        
        <Quote className={`h-10 w-10 mb-6 ${isEven ? 'text-indigo-400/40' : 'text-purple-400/40'}`} />
        
        <p className="text-gray-300 mb-6 relative z-10">
          "{quote}"
        </p>
        
        <div className="flex items-center">
          <Avatar className="h-12 w-12 border-2 border-white/10">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
              {author.split(' ').map(name => name[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="ml-4">
            <h4 className="font-medium text-white">{author}</h4>
            <p className="text-sm text-gray-400">{role}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "NoteFlow has completely transformed our team meetings. I no longer worry about missing important points and can focus on the discussion.",
      author: "Sarah Johnson",
      role: "Product Manager",
      company: "TechVision",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      quote: "The AI-powered summaries save me hours every week. The action items feature ensures nothing falls through the cracks.",
      author: "Michael Chen",
      role: "Engineering Director",
      company: "BuildStack",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      quote: "As a UX researcher, I need accurate transcripts of user interviews. NoteFlow delivers perfect transcripts every time.",
      author: "Emma Rodriguez",
      role: "UX Research Lead",
      company: "DesignFusion",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative blurred gradient */}
      <div className="absolute left-0 top-1/3 h-96 w-1/2 bg-gradient-to-r from-primary/30 to-transparent rounded-full filter blur-[120px] opacity-30 -z-10"></div>
      <div className="absolute right-0 bottom-1/3 h-96 w-1/2 bg-gradient-to-l from-purple-600/30 to-transparent rounded-full filter blur-[120px] opacity-30 -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <div className="relative">
              <div className="px-4 py-1 rounded-full border border-gray-800 bg-background text-sm text-gray-400 animate-float-delay-2">
                TRUSTED BY TEAMS EVERYWHERE
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sans">
            Don't take our <span className="gradient-text">word</span> for it
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear from our customers who have transformed their meeting productivity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatar={testimonial.avatar}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-md opacity-75"></div>
            <button className="relative bg-background hover:bg-background/90 text-white font-medium py-4 px-8 rounded-full border border-white/10 transition-all">
              Read more success stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;