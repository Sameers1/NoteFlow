import React from "react";
import LandingLayout from "@/layouts/LandingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Github, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Phone
} from "lucide-react";

const Contact: React.FC = () => {
  return (
    <LandingLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="border-gray-800 bg-background/80 backdrop-blur-md h-full">
              <CardContent className="pt-6">
                <div className="space-y-8">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur-xl"></div>
                    <div className="relative bg-background/50 backdrop-blur-md p-6 rounded-lg border border-gray-800">
                      <div className="flex items-center mb-4">
                        <div className="bg-primary/20 p-2 rounded-full mr-4">
                          <Github className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">GitHub</h3>
                          <a 
                            href="https://github.com/Sameers1" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            github.com/Sameers1
                          </a>
                        </div>
                      </div>
                      <p className="text-gray-400">
                        Check out my GitHub profile to see my other projects and contributions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Email</h3>
                      <a href="mailto:contact@noteflow.app" className="text-blue-400 hover:text-blue-300 transition-colors">
                        contact@noteflow.app
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-primary/20 p-2 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Location</h3>
                      <p className="text-gray-300">San Francisco, CA</p>
                    </div>
                  </div>

                  <div className="pt-8">
                    <h3 className="text-xl font-semibold mb-4">Connect with us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-background/50 p-3 rounded-full border border-gray-700 hover:border-primary/50 transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="#" className="bg-background/50 p-3 rounded-full border border-gray-700 hover:border-primary/50 transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                      <a href="#" className="bg-background/50 p-3 rounded-full border border-gray-700 hover:border-primary/50 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-gray-800 bg-background/80 backdrop-blur-md h-full">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                        Your Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        className="bg-background/30 border-gray-700 focus:border-primary/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                        Your Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        className="bg-background/30 border-gray-700 focus:border-primary/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?" 
                      className="bg-background/30 border-gray-700 focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message..." 
                      rows={6}
                      className="bg-background/30 border-gray-700 focus:border-primary/50"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h3 className="text-lg font-semibold mb-2">How quickly do you respond to inquiries?</h3>
              <p className="text-gray-400">We aim to respond to all inquiries within 24 hours during business days.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you offer technical support?</h3>
              <p className="text-gray-400">Yes, we provide technical support for all of our plans. Premium and Enterprise customers receive priority support.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I request a custom feature?</h3>
              <p className="text-gray-400">Absolutely! We're always open to feature requests. Enterprise plans can include custom feature development.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">How can I report a bug?</h3>
              <p className="text-gray-400">You can report bugs through our contact form or by emailing support@noteflow.app directly.</p>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Contact;