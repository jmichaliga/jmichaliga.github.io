import React, { useState } from "react"
import IconLink from "../src/components/iconlink"
import Layout from "../src/components/layout"
import SEO from "../src/components/seo"
import { Box, Center, Flex } from "../src/components/elements"
import StyledLink from "../src/components/link"
import Skills, { skills } from "../src/components/skills"
import Image from "next/image"
import { InlineWidget } from "react-calendly"

import { motion } from "framer-motion"
import styled from "@emotion/styled"
import theme from "../src/theme"

const Bar = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 4px;
  background: ${theme.colors.jmRed};
`

const Social = styled.section`
  display: flex;
  justify-content: space-evenly;
  & svg {
    margin-top: 4px;
    fill: white;
  }
`

const HoverBulge = styled(Box)`
  transition-duration: ${theme.duration.normal};
  transform: scale(1);
  &:hover {
    transform: scale(0.9) rotate(-15deg);
    filter: brightness(80%);
  }
`

const variants = {
  open: { opacity: 1, x: 0, height: "100%" },
  closed: { opacity: 0, x: "-100%", height: 0 },
}

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Bar />
      <Skills />
      <Layout>
        <SEO
          title="Home"
          keywords={[
            "brooklyn",
            "creative",
            "engineer",
            "web design",
            "justin michaliga",
            "jmichaliga",
            "logo design",
            "design systems",
            "mobile apps",
            "web developer",
            "full-stack",
            "front end",
            "new york",
            "nyc",
            "ecmascript6",
            "east village",
            "greenpoint",
            "nextjs",
          ].concat(skills)}
        />

        <Flex>
          <Box width={[1, 1 / 2]}>
            <Center>
              <HoverBulge>
                <Image src="/thinker.png" width="250" height="250" alt="JM" />
              </HoverBulge>
            </Center>
          </Box>

          <Box width={[1, 1 / 2]} p={3}>
            <motion.div
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
            <Center>
              <p>
                Full-Stack Javascript Engineer with over a decade of
                professional experience in agency, direct service, and in-house
                brand capacities &mdash; specializing in Interactive Design,
                Mobile/Web Development, GraphQL Adoption, Design Systems,{" "}
                <abbr title="and">&amp;</abbr> Immersive User Experiences.
                <br />
                Based in Brooklyn, NYC 🍎.
              </p>

              <Social>
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
              </Social>

                <Box mt="3">

              <StyledLink onClick={() => setIsOpen((isOpen) => !isOpen)}>
                Schedule a Chat
              </StyledLink>
              </Box>
            </Center>
          </Box>
        </Flex>
      </Layout>
    </>
  )
}

export default IndexPage
