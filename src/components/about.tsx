import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const About = () => {
  return (
    <motion.section
      className="mt-4 md:mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl lg:text-5xl font-bold mb-4 inline-block h-50 md:h-28 text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-500 to-[#FA1979] dark:from-slate-100 dark:via-[#FA1979] dark:to-blue-500">
        Modern Web Development Expertise.
        <br />
        Right here in the big 🍎.
      </h2>

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-8">
          <p className="text-xl mb-6 font-spaceGrotesk">
            Specializing in Next.js migrations and building high-performance web
            applications, design systems, and immersive user experiences.
          </p>

          <p className="text-sm mt-4 text-slate-600 dark:text-slate-400">
            A seasoned Fractional CTO and Full-Stack JavaScript Engineer with
            over 15 years of experience building robust web and mobile
            applications. Expertise in delivering seamless user experiences and
            optimizing technical architectures across diverse industries. Proven
            leadership in managing cross-functional teams, delivering
            high-impact solutions for top-tier clients, and driving innovation
            through modern technologies.
          </p>

          <p className="text-sm mt-4 text-slate-600 dark:text-slate-400">
            A rare breed of a design/engineer who is equally comfortable with the
            front-end, back-end, as well as in design tooling. Having a knack
            for building scalable and secure applications as well as designing
            delightful user experiences and doing research for user-centric
            applications.
          </p>

          <p className="text-sm mt-4 text-slate-600 dark:text-slate-400">
            Formally educated with a degree in Computer Science and a minor
            in Mathematics, also earned a dual degree in Arts with a
            concentration in Graphic Design from <a className="text-blue-500" href="https://salisbury.edu/" target="_blank" rel="noopener noreferrer">Salisbury University</a>. Most
            recently earned a Master&apos;s in User Experience Design from the
            <a className="text-blue-500" href="https://mica.edu/" target="_blank" rel="noopener noreferrer"> Maryland Institute College of Art</a>.
          </p>

          <p className="text-md mt-4 font-spaceGrotesk">📍 Currently based in Greenpoint, Brooklyn.</p>

          <div className="flex flex-wrap gap-2 items-center font-spaceGrotesk mt-4">
            <Badge
              variant="outline"
              className="text-green-600 bg-green-600/20 dark:text-green-400 dark:bg-green-400/20 border-2 border-green-400/20"
            >
              <div className="w-2 h-2 rounded bg-green-600 dark:bg-green-400 mr-2" />{" "}
              Available for Hire
            </Badge>
            <Badge variant="outline" className="text-slate-400 bg-slate-400/20">
              Remote / NYC
            </Badge>
            <Badge variant="outline" className="text-slate-400 bg-slate-400/20">
              Part-time / Full-time
            </Badge>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex justify-center items-center">
          <Image
            className="filter hue-rotate-90 saturate-100"
            src="/react-native-illustration.webp"
            alt="JM"
            width={300}
            height={300}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
