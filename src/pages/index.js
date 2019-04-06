import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`creative`, `web design`, `mobile web designer`, `baltimore`, `justin michaliga`, `jmichaliga`, `logo design`, `mobile web`, `mobile apps`, `web developer`, `front-end`, `front end`, `maryland`, `new york`, `nyc`, `html5`, `javascript`, `east village`]} />
    <div id="vignette"></div>
    <div id="content">
      
      <figure id="logo">
        <div id="notepad"></div>
      </figure>
      
      <article>
        <p>Several years of professional experience in agency, direct service, and in-house brand capacities &ndash; specializing in Interactive Design, Mobile/Web Development, HTML5 Adoption <abbr title="and" class="amp">&amp;</abbr> User Experiences.
        </p>
        <p>		
          <a href="http://www.twitter.com/jmichaliga" rel="external" class="twitter">
            <img src="images/twitter.png" height="20" width="20" /> Follow @jmichaliga on twitter.
          </a>
        </p>
      </article>
        
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
