import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import IconLink from '../components/iconlink'
import Svg from '../components/svg'

import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
const Flex = styled(Box)`
  display: flex;
`

const Center = styled(Box)`
  text-align: center;
`

const HoverBulge = styled(Box)`
  transition-duration: 400ms;
  tranform: scale(1);
  &:hover{
    transform: scale(0.9);
    filter: invert(100%);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`creative`, `web design`, `mobile web designer`, `baltimore`, `justin michaliga`, `jmichaliga`, `logo design`, `mobile web`, `mobile apps`, `web developer`, `front-end`, `front end`, `maryland`, `new york`, `nyc`, `html5`, `javascript`, `east village`]} />
    
    <Flex>
      <Box width={[1, 1 / 2]} mt={4}>
        <Center>
          <HoverBulge>
            <Svg name="jm" />
          </HoverBulge>
        </Center>
      </Box>

      <Box width={[1, 1 / 2]}>
        <Center>
          <p>
            Several years of professional experience in agency, 
            direct service, and in-house brand capacities &mdash; 
            specializing in Interactive Design, Mobile/Web Development, 
            HTML5 Adoption <abbr title="and" className="amp">&amp;</abbr> User Experiences.
          </p>
          <p>		
            <IconLink href="https://twitter.com/jmichaliga" icon="twitter" text="Follow @jmichaliga on twitter." />
          </p>
          <p>
            <IconLink href="https://github.com/jmichaliga" icon="github" text="Follow @jmichaliga on Github." />
          </p>
          <p>
            <IconLink href="https://dribbble.com/jmichaliga" target="_blank" icon="dribbble" text="Follow @jmichaliga on Dribbble." />
          </p>
        </Center>
      </Box>
    </Flex>
  </Layout>
)

export default IndexPage
