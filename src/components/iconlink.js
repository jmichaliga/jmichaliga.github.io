import PropTypes from "prop-types"
import React from "react"

const IconLink = ({ href, icon, text }) => (
  <a href={href} rel="external">
    <img src="./images/twitter.svg" height="24" width="24" alt={icon} /> {text}
  </a>
)

IconLink.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
}

IconLink.defaultProps = {
  href: "",
  icon: "github",
  text: ""
}

export default IconLink
