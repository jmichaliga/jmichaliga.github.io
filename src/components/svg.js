import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Svg = ({ name, inverted }) => {
  const data = useStaticQuery(graphql`
    query {
      file(name:{eq: "jm" }){
    	  publicURL
  	  }
    } 
  `)
  return (
    <img 
      src={data.file.publicURL}
      width="250"
      height="250"
      alt={name}
      className={inverted ? 'invert': ''}
    />
  )
}
Svg.propTypes = {
  name: PropTypes.string,
  inverted: PropTypes.bool
}

Svg.defaultProps = {
  name: '',
  inverted: false
}

export default Svg
