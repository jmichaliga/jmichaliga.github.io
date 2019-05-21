import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'
import theme from '../theme'
import Icon from './icon'

const Link = styled('a')`
  & {
    border-radius: ${theme.space[1]}px;  
    padding: ${theme.space[1]}px;
    color: ${theme.colors.white};
    background: ${theme.colors.jmRed};
    transition-duration: ${theme.duration.slow};
  }
  &:hover{
    text-shadow: ${theme.colors.black} 1px 1px 2px;
    border-bottom: 3px solid ${theme.colors.jmBlue};
  }
`
const IconLink = ({ href, icon, text, inverted }) => {
  return (
    <Link href={href} key={`icon-${icon}`} rel="external noopener noreferrer" target="_blank">
      <Icon icon={icon} inverted={inverted} /> {text}
    </Link>
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
