import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import theme from "../theme"

function SEO({ description, lang, meta, keywords, title }) {
  const metaDescription =
    description ||
    `Justin W. Michaliga is a Javascript Engineer and Interactive Designer in Brooklyn, NYC.`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={[
        {
          href: "/apple-touch-icon.png",
          rel: "apple-touch-icon",
          sizes: "180x180",
        },
        { href: "/favicon-32x32.png", rel: "icon", sizes: "32x32" },
        { href: "/favicon-16x16.png", rel: "icon", sizes: "16x16" },
        // { href: "/site.webmanifest", rel: "manifest" },
        {
          href: "/safari-pinned-tab.svg",
          rel: "mask-icon",
          color: theme.colors.jmRed,
        },
      ]}
      title={title}
      titleTemplate={`%s | Justin Michaliga`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "@jmichaliga",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        { name: "msapplication-TileColor", content: theme.colors.jmRed },
        {
          name: "theme-color",
          content: theme.colors.jmRed,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
