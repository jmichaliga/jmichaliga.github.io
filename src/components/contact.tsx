import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PopupButton } from "react-calendly";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "./contact-form";
import Image from "next/image";

const Contact = ({ calRef }: { calRef: HTMLElement }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h3 className="font-spaceGrotesk text-2xl font-semibold mb-4 border-b border-slate-200 dark:border-slate-800">
        Let&apos;s Work Together
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8 mb-6 mx-auto justify-center items-center">
          <p className=" text-slate-700 dark:text-slate-400">
            I&apos;m always excited to discuss new projects, creative ideas, and
            potential collaborations. If you&apos;re looking for consultation on your
            startup or a new initiative, or if you just want to say hello, don&apos;t
            hesitate to reach out using the form below or through my contact
            information. I look forward to connecting!
          </p>

          <div className="mt-8 flex gap-2 justify-center items-center">
            <a
              href="mailto:justin.michaliga@gmail.com"
              className="cursor-pointer"
            >
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
        </div>
        <div className="col-span-12 md:col-span-4 flex justify-center items-center">
          <Image
            src="/justin-pixar.png"
            alt="Call Me"
            width={300}
            height={300}
          />
        </div>
      </div>
      <Card className="bg-white dark:bg-black bg-opacity-10 dark:bg-opacity-10">
        <CardHeader>
          <CardTitle>Contact Form</CardTitle>
        </CardHeader>

        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </motion.section>
  );
};

export default Contact;
