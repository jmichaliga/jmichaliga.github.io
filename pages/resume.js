import React from "react"
import Link from "next/link"

import Layout from "../src/layout"
import SEO from "../src/components/seo"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Hi from the Resume</h1>
    <p>Welcome to Resume</p>
    <Link href="/">Go back to the homepage</Link>
  </Layout>
)

export default Resume
