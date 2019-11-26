import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Icon from '../components/icon'
import IconLink from '../components/iconlink'
import Svg from '../components/svg'

import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

import theme from '../theme'

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
const Flex = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  margin-top: -1.45rem;
`

const Center = styled(Box)`
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const HoverBulge = styled(Box)`
  transition-duration: ${theme.duration.normal};
  transform: scale(1);
  &:hover{
    transform: scale(0.9);
    filter: invert(100%);
  }
`

const skills = [
  'adobeillustrator', 
  'adobephotoshop',
  'css3',
  'docker',
  'eslint',
  'figma',
  'firebase',
  'gatsby',
  'graphql',
  'html5',
  'javascript',
  'jest',
  'kubernetes',
  'node-dot-js',
  'npm',
  'nuxt-dot-js',
  'postgresql',
  'react',
  'rollup-dot-js',
  'vue-dot-js'
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`creative`, `web design`, `mobile web designer`, `baltimore`, `justin michaliga`, `jmichaliga`, `logo design`, `mobile web`, `mobile apps`, `web developer`, `front-end`, `front end`, `maryland`, `new york`, `nyc`, `html5`, `javascript`, `east village`]} />
    <Flex>
      <Box mt={5} width={[1, 1 / 2]}>
        <Center>
          <HoverBulge>
            <Svg name="jm" />
          </HoverBulge>
        </Center>
      </Box>

      <Box width={[1, 1 / 2]} p={3}>
        <Center mt={3}>
          <p>
            Over a decade of professional experience in agency, 
            direct service, and in-house brand capacities &mdash; 
            specializing in Interactive Design, Mobile/Web Development, 
            Full-Stack Engineering, <abbr title="and" className="amp">&amp;</abbr> User Experiences.
          </p>
          <section style={{ position: 'fixed', right: '8px', bottom: '0px' }}>
            {skills.map(skill => (
              <Box ml={2}>
                <Icon icon={skill} inverted={false} ml={1}/>
              </Box>
            ))}
          </section>
          <p>
            <IconLink href="https://github.com/jmichaliga" icon="github" text="Follow @jmichaliga on Github." />
          </p>
          <p>
            <IconLink href="https://dribbble.com/jmichaliga" icon="dribbble" text="Follow @jmichaliga on Dribbble." />
          </p>
          <p>
            <IconLink href="https://codepen.com/jmichaliga" icon="codepen" text="Follow @jmichaliga on Codepen." />
          </p>
          <p>		
            <IconLink href="https://twitter.com/jmichaliga" icon="twitter" text="Follow @jmichaliga on twitter." />
          </p>
          <p>
            <IconLink href="https://codepen.io/jmichaliga/full/GBNWXx" icon="vue-dot-js" text="Check out his resume." />
          </p>
        </Center>
      </Box>
    </Flex>

  </Layout>
)

export default IndexPage
