"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Home,
  GiftIcon,
  ShieldQuestion,
  //Contact,
  Mail,
} from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/", icon: <Home /> },
  { name: "About", href: "/about", icon: <ShieldQuestion /> },
  { name: "Projects", href: "/projects", icon: <GiftIcon /> },
  // { name: "Clients", href: "/clients", icon: <Contact /> },
  { name: "Contact", href: "/contact", icon: <Mail /> },
];

const MobileNav = ({
  externalNavItems,
}: {
  externalNavItems: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[400px] dark:bg-slate-800"
      >
        <nav className="flex flex-col space-y-4 mt-8">
          {navItems.map((item, index) => (
            <div key={item.name} className="relative">
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-accent rounded-md z-0"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </AnimatePresence>
              <Link
                href={item.href}
                className="flex items-center gap-2 py-2 px-4 text-lg font-medium relative z-10 transition-colors duration-200"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 flex justify-center items-center my-4 w-full">
          {externalNavItems}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
