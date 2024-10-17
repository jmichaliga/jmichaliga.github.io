import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PopupButton } from "react-calendly";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "./contact-form";

const Contact = ({ calRef }: { calRef: HTMLElement }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h3 className="font-spaceGrotesk text-2xl font-semibold mb-4">
        Let&apos;s Work Together
      </h3>
      <p className="mb-6 text-slate-700 dark:text-slate-400">
        I am always open to discussing new projects, creative ideas, or
        opportunities to be part of your visions. If you&apos;re looking for
        consultation on your startup, a new project, or just want to say hi,
        feel free to get in touch using the form below or through my contact
        information.
      </p>
      <Card className="bg-white dark:bg-black bg-opacity-10 dark:bg-opacity-10">
        <CardHeader>
          <CardTitle>Contact Form</CardTitle>
        </CardHeader>

        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
      <p className="mt-8 text-center">Or reach out directly:</p>
      <div className="mt-4 flex gap-2 justify-center items-center">
        <a href="mailto:justin.michaliga@gmail.com" className="cursor-pointer">
          <Button className="flex font-spaceGrotesk">
            <Mail className="mr-2 w-4 h-4" />
            Send an Email
          </Button>
        </a>
        <span className="mx-2">|</span>
        <PopupButton
          url="https://calendly.com/jmichaliga"
          text="Schedule a Chat 📆"
          className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 flex font-spaceGrotesk"
          rootElement={calRef as HTMLElement}
        />
      </div>
    </motion.section>
  );
};

export default Contact;
