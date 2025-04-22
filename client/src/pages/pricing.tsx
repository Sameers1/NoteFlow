import React from "react";
import LandingLayout from "@/layouts/LandingLayout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingTier = ({ 
  title, 
  price, 
  popular = false, 
  features, 
  buttonText 
}: { 
  title: string; 
  price: string; 
  popular?: boolean; 
  features: string[]; 
  buttonText: string;
}) => {
  return (
    <Card className={`flex flex-col w-full ${popular ? 'border-primary/50 shadow-lg shadow-primary/20' : 'border-gray-800'} bg-background/80 backdrop-blur-md`}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          {popular && <Badge className="bg-primary/20 hover:bg-primary/30 text-primary">Most Popular</Badge>}
        </div>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Custom" && <span className="text-gray-400 ml-2">/month</span>}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
              <span className="text-sm text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant={popular ? "default" : "outline"} className="w-full">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Pricing: React.FC = () => {
  return (
    <LandingLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <PricingTier
            title="Starter"
            price="$9"
            features={[
              "Up to 5 hours of recording per month",
              "Basic transcription accuracy",
              "Email support",
              "Export to PDF and TXT",
              "7-day history"
            ]}
            buttonText="Start Free Trial"
          />

          {/* Pro Plan */}
          <PricingTier
            title="Professional"
            price="$29"
            popular={true}
            features={[
              "Up to 20 hours of recording per month",
              "Enhanced transcription accuracy",
              "Priority email support",
              "Export to PDF, TXT, DOCX, and CSV",
              "30-day history",
              "Speaker identification"
            ]}
            buttonText="Start Free Trial"
          />

          {/* Enterprise Plan */}
          <PricingTier
            title="Enterprise"
            price="Custom"
            features={[
              "Unlimited recording time",
              "Highest transcription accuracy",
              "24/7 dedicated support",
              "All export formats",
              "Unlimited history",
              "Speaker identification",
              "Custom integrations",
              "SSO and advanced security"
            ]}
            buttonText="Contact Sales"
          />
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-400">Yes, you can change your plan at any time. Changes take effect at the start of your next billing cycle.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What happens when I reach my recording limit?</h3>
              <p className="text-gray-400">You can purchase additional recording time or upgrade to a higher plan for more hours.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Is my data secure?</h3>
              <p className="text-gray-400">Yes, we use industry-standard encryption and security practices to protect your data.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-400">Yes, you can cancel your subscription at any time without any cancellation fees.</p>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Pricing;