
import Head from "next/head"
import theme from "../theme"

interface SEOProps {
  description?: string
  lang?: string
  meta?: any[]
  keywords?: string[]
  title: string
}

function SEO({ description, lang, meta, keywords, title }: SEOProps) {
  const metaDescription =
    description ||
    `Justin W. Michaliga is a Fractional CTO, Javascript Product Engineer and Interactive Designer in Brooklyn, NYC.`

  return (
    // <Helmet
    //   htmlAttributes={{
    //     lang,
    //   }}
    //   link={[
    //     {
    //       href: "/apple-touch-icon.png",
    //       rel: "apple-touch-icon",
    //       sizes: "180x180",
    //     },
    //     { href: "/favicon-32x32.png", rel: "icon", sizes: "32x32" },
    //     { href: "/favicon-16x16.png", rel: "icon", sizes: "16x16" },
    //     // { href: "/site.webmanifest", rel: "manifest" },
    //     {
    //       href: "/safari-pinned-tab.svg",
    //       rel: "mask-icon",
    //       color: theme.colors.jmRed,
    //     },
    //   ]}
    //   title={title}
    //   titleTemplate={`%s | Justin Michaliga`}
    //   meta={[
    //     {
    //       name: `description`,
    //       content: metaDescription,
    //     },
    //     {
    //       property: `og:title`,
    //       content: title,
    //     },
    //     {
    //       property: `og:description`,
    //       content: metaDescription,
    //     },
    //     {
    //       property: `og:type`,
    //       content: `website`,
    //     },
    //     {
    //       name: `twitter:card`,
    //       content: `summary`,
    //     },
    //     {
    //       name: `twitter:creator`,
    //       content: "@jmichaliga",
    //     },
    //     {
    //       name: `twitter:title`,
    //       content: title,
    //     },
    //     {
    //       name: `twitter:description`,
    //       content: metaDescription,
    //     },
    //     { name: "msapplication-TileColor", content: theme.colors.jmRed },
    //     {
    //       name: "theme-color",
    //       content: theme.colors.jmRed,
    //     },
    //   ]
    //     .concat(
    //       keywords.length > 0
    //         ? {
    //             name: `keywords`,
    //             content: keywords.join(`, `),
    //           }
    //         : []
    //     )
    //     .concat(meta)}
    // />
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@jmichaliga" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="msapplication-TileColor" content={theme.colors.jmRed} />
      <meta name="theme-color" content={theme.colors.jmRed} />
    </Head>
  )
}

export default SEO
