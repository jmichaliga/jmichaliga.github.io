"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Slider } from "@/components/ui/slider";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    inquiryType: "project",
    budget: 0,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prevData) => ({ ...prevData, inquiryType: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Your message has been sent successfully!",
        });
        setFormData({
          name: "",
          email: "",
          mobile: "",
          inquiryType: "project",
          budget: 0,
          message: "",
        });
      } else if (response.status === 429) {
        toast({
          title: "Rate Limit Exceeded",
          description: "You've reached the maximum number of messages allowed in 24 hours. Please try again later.",
          variant: "destructive",
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const inputStyle = "mt-1 placeholder:text-slate-600 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label className="font-bold" htmlFor="name">Name</Label>
          <Input
            placeholder="Your Name"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputStyle}
          />
        </div>
        <div>
          <Label className="font-bold" htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputStyle}
          />
        </div>
        <div>
          <Label className="font-bold" htmlFor="mobile">Mobile (optional)</Label>
          <Input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className={inputStyle}
          />
        </div>
        <div>
          <Label className="font-bold">Inquiry Type</Label>
          <RadioGroup
            defaultValue="project"
            onValueChange={handleRadioChange}
            className="flex space-x-4 mt-1 text-slate-600 dark:text-slate-400"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="project" id="project" />
              <Label htmlFor="project">Start a Project</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="client" id="client" />
              <Label htmlFor="client">Client Work</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="consult" id="consult" />
              <Label htmlFor="consult">Consultation</Label>
            </div>
          </RadioGroup>
        </div>
        {/* <div>
            <Label className="font-bold" htmlFor="budget">Estimated Budget</Label>
            <Slider
                id="budget"
                name="budget"
                defaultValue={[10000, 50000]}
                min={0}
                max={100000}
                step={2500}
                value={[formData.budget]}
                onValueChange={(value) => setFormData((prevData) => ({ ...prevData, budget: value[0] }))}
            />
            <span className="text-sm text-slate-600">${formData.budget}</span>
        </div> */}
        <div>
          <Label className="font-bold" htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={inputStyle}
            rows={4}
          />
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </motion.div>
  );
}
