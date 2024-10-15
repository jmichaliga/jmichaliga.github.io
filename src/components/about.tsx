import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-4">
        Modern Web Development Expertise, Right here in NYC
      </h2>
      <p className="text-xl mb-6 font-spaceGrotesk">
        Specializing in Next.js migrations and building high-performance web
        applications, design systems, and immersive user experiences.
      </p>

      <p className="text-sm mt-4">
        A seasoned Fractional CTO and Full-Stack JavaScript Engineer with over
        15 years of experience building robust web and mobile applications.
        Expertise in delivering seamless user experiences and optimizing
        technical architectures across diverse industries. Proven leadership in
        managing cross-functional teams, delivering high-impact solutions for
        top-tier clients, and driving innovation through modern technologies.
        <br />
        Based in Greenpoint, Brooklyn, NYC 🍎.
      </p>

      <div className="flex items-center font-spaceGrotesk space-x-4 mt-4">
        <Badge
          variant="outline"
          className="text-green-600 bg-green-600/20 dark:text-green-400 dark:bg-green-400/20 border-2 border-green-400/20"
        >
          <div className="w-2 h-2 rounded bg-green-600 dark:bg-green-400 mr-2" />{" "}
          Available for Hire
        </Badge>
        <Badge variant="outline" className="text-slate-400 bg-slate-400/20">
          Remote
        </Badge>
        <Badge variant="outline" className="text-slate-400 bg-slate-400/20">
          Full-time
        </Badge>
      </div>
    </motion.section>
  );
};

export default About;
