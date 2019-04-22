import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import IconLink from '../components/iconlink'

import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`creative`, `web design`, `mobile web designer`, `baltimore`, `justin michaliga`, `jmichaliga`, `logo design`, `mobile web`, `mobile apps`, `web developer`, `front-end`, `front end`, `maryland`, `new york`, `nyc`, `html5`, `javascript`, `east village`]} />
    <Box width={[1, 1 / 2]}>
      <article>
        <p>
          Several years of professional experience in agency, 
          direct service, and in-house brand capacities &mdash; 
          specializing in Interactive Design, Mobile/Web Development, 
          HTML5 Adoption <abbr title="and" className="amp">&amp;</abbr> User Experiences.
        </p>
        <p>		
          <IconLink href="https://twitter.com/jmichaliga" icon="twitter" text="Follow @jmichaliga on twitter." />
          <IconLink href="https://github.com/jmichaliga" icon="github" text="Follow @jmichaliga on github." />
        </p>
      </article>
    </Box>
    <Box mb={4}>
      <Image />
    </Box>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
