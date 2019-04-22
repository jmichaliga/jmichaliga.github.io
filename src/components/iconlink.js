import PropTypes from "prop-types"
import React from "react"

import { useStaticQuery, graphql } from "gatsby"

const IconLink = ({ href, icon, text, inverted }) => {
  
  // , name: { eq: ${icon} }
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { eq: "svg" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    } 
  `)

  return (
    <>
      {data.allFile.edges.filter((file) => {
        return file.node.name === icon
      }).map((file,index) => {
        return (
          <a href={href} key={`icon-${index}`} rel="external">
            <img src={file.node.publicURL} height="24" width="24" alt={icon} className={inverted ? 'invert': ''} /> {text}
          </a>
        )
      })}
    </>
  )
}
IconLink.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  inverted: PropTypes.bool
}

IconLink.defaultProps = {
  href: "",
  icon: "github",
  text: "",
  inverted: true
}

export default IconLink
