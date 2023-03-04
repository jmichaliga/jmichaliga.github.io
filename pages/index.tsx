import React, { useState } from "react"
import IconLink from "@/components/iconlink"
import Layout from "@/components/layout"

import { Bar, Box, Flex, HoverBulge, Social, Stack } from "@/components"

import Image from "next/image"
import { InlineWidget } from "react-calendly"

import { motion } from "framer-motion"

const variants = {
  open: { opacity: 1, x: 0, height: "100%" },
  closed: { opacity: 0, x: "-100%", height: 0 },
}

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Bar />
      <Layout>
        <Stack>
          <div className="flex flex-col md:flex-row">
            <div className="min-w-fit flex items-center justify-center">
              <Image src="/images/jm.svg" width="160" height="160" alt="JM" />
            </div>
            <p className="p-2">
              Fractional CTO <abbr title="and">&amp;</abbr> Full-Stack Javascript Engineer with over a decade of
              professional experience in agency, direct service, and in-house
              brand capacities &mdash; specializing in Interactive Design,
              Mobile/Web Development, GraphQL Adoption, Design Systems,{" "}
              <abbr title="and">&amp;</abbr> Immersive User Experiences.
              <br />
              Based in Greenpoint, Brooklyn <span className="bg-jmRed bg-clip-text text-transparent"><a href="https://gpt.nyc">🍎</a></span> - NYC.
            </p>

          </div>

          <div className="p-2 flex flex-col-reverse md:flex-row gap-2">
            <motion.div
              className="overflow-hidden w-full md:w-1/2 rounded mb-2"
              animate={isOpen ? "open" : "closed"}
              variants={variants}
            >
              <InlineWidget
                url="https://calendly.com/jmichaliga"
                prefill={{
                  customAnswers: {
                    a1: "Hello Justin! ",
                  },
                }}
              />
            </motion.div>
            <div className="flex flex-col gap-2 w-full md:w-1/2">

              <span className="flex bg-jmRed hover:bg-jmBlue duration-500 ease-in-out rounded-[4px] p-2 items-center gap-2 transition-colors" onClick={() => setIsOpen((isOpen) => !isOpen)}>
                Schedule a Chat
              </span>

              <IconLink
                href="https://github.com/jmichaliga"
                icon="github"
                text="Follow @jmichaliga on Github."
                hint={false}
              />

              <IconLink
                href="https://dribbble.com/jmichaliga"
                icon="dribbble"
                text="Follow @jmichaliga on Dribbble."
                hint={false}
              />

              <IconLink
                href="https://codepen.com/jmichaliga"
                icon="codepen"
                text="Follow @jmichaliga on Codepen."
                hint={false}
              />

              <IconLink
                href="https://twitter.com/jmichaliga"
                icon="twitter"
                text="Follow @jmichaliga on twitter."
                hint={false}
              />

              <IconLink
                href="https://www.linkedin.com/in/justin-michaliga-6b57594"
                icon="linkedin"
                text="Follow @jmichaliga on LinkedIn."
                hint={false}
              />



            </div>
          </div>
        </Stack>
      </Layout>
    </>
  )
}

export default IndexPage
