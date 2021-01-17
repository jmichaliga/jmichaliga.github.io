import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"
import theme from "../theme"
import Icon from "./icon"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  border-radius: ${theme.space[1]}px;
  padding: ${theme.space[1]}px;
  color: ${theme.colors.white};
  background: ${theme.colors.jmRed};
  width: 40px;
  height: 40px;
  transition-duration: ${theme.duration.normal};
  border-bottom: 2px solid transparent;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  & svg {
    cursor: pointer;
  }

  &:hover {
    text-shadow: ${theme.colors.black} 1px 1px 2px;
    border-bottom: 2px solid ${theme.colors.jmBlue};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0);
  }
`

const IconLink = ({ href, icon, inverted }) => {
  return (
    <StyledLink
      href={href}
      key={`icon-${icon}`}
      rel="external noopener noreferrer"
      target="_blank"
    >
      <Icon icon={icon} inverted={inverted} />
    </StyledLink>
  )
}

IconLink.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
  inverted: PropTypes.bool,
}

IconLink.defaultProps = {
  href: "",
  icon: "github",
  inverted: true,
}

export default IconLink
