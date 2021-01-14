import React from "react"

import BlogLayout from "../../components/layout/blog"
import SEO from "../../components/seo"
import { Center } from "../../components/elements"

const Blog = () => (
  <BlogLayout>
    <SEO title="Blog: " />
    <section>
      <Center>
        <h2>Coming Soon</h2>
      </Center>

      <p>
        A collection of thoughts and writings will be hosted here once I collect
        some of the thoughts over the past decade or two. In the meantime, you
        can find my old{" "}
        <a href="https://jmichaliga-blog-blog.tumblr.com/" target="_blank" rel="noreferrer noopener">tumblr</a>, which had
        a few ramblings &mdash; or better yet, my{" "}
        <a href="https://twitter.com/intent/user?screen_name=jmichaliga" target="_blank" rel="noreferrer noopener">
          twttr
        </a>{" "}
        for more recent ones.
      </p>
    </section>
  </BlogLayout>
)

export default Blog
