import PropTypes from "prop-types"
import React from "react"

import Icon from "./icon"
// import Link from "next/link"
import StyledLink from "./link"

const IconLink = ({ href, icon, inverted, hint }) => {
  return (
    <StyledLink
      href={href || '#'}
      key={`icon-${icon}`}
      rel="external noopener noreferrer"
      target="_blank"
    >
      <Icon icon={icon} inverted={inverted} hint={hint} />
    </StyledLink>
  )
}

IconLink.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
  inverted: PropTypes.bool,
  hint: PropTypes.bool,
}

IconLink.defaultProps = {
  href: "",
  icon: "github",
  inverted: true,
  hint: true,
}

export default IconLink
