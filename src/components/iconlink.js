import PropTypes from "prop-types"
import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import theme from '../theme'

const Link = styled('a')`
  border-radius: ${theme.space[1]}px;  
  padding: ${theme.space[1]}px;
  background: ${theme.colors.jmRed};
  color: ${theme.colors.white};
  transition-duration: ${theme.duration.slow};
  &:hover{
    text-shadow: ${theme.colors.black} 1px 1px 2px;
    border-bottom: 3px solid ${theme.colors.jmBlue};
  }
`
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
          <Link href={href} key={`icon-${index}`} rel="external noopener noreferrer" target="_blank">
            <img src={file.node.publicURL} height="24" width="24" alt={icon} className={inverted ? 'invert': ''} /> {text}
          </Link>
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
