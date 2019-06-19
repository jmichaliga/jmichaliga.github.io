import PropTypes from "prop-types"
import React from "react"

import { useStaticQuery, graphql } from "gatsby"

const Icon = ({ icon, inverted }) => {
  
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
          <abbr title={icon} className="hidden">
            <img key={icon}
              src={file.node.publicURL} 
              height="24" width="24" alt={icon} 
              className={inverted ? 'invert': ''}
            />
          </abbr>
        )
      })}
    </>
  )
}
Icon.propTypes = {
  icon: PropTypes.string,
  inverted: PropTypes.bool
}

Icon.defaultProps = {
  icon: "github",
  inverted: true
}

export default Icon
