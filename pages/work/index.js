import React from "react"
import Link from "next/link"
import Layout from "../../src/components/layout"
import SEO from "../../src/components/seo"
import { Center } from "../../src/components/elements"

const WorkPage = () => (
  <Layout>
    <SEO title="Work: Coming Soon" />
    <Center>Coming Soon</Center>

    <p>
      You can out what I <Link href="/uses">use</Link> in order to get the work
      done.
    </p>
  </Layout>
)

export default WorkPage
