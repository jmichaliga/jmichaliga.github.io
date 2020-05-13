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
    width: 40px; height: 40px;
    transition-duration: ${theme.duration.normal};
    border-bottom: 2px solid transparent;
    box-shadow: 0px 0px 4px rgba(0,0,0,0.25);
  }
  &:hover{
    text-shadow: ${theme.colors.black} 1px 1px 2px;
    border-bottom: 2px solid ${theme.colors.jmBlue};
    cursor: pointer;
    box-shadow: 0px 0px 4px rgba(0,0,0,0);
  }
`
const IconLink = ({ href, icon, text, inverted }) => {
  return (
    <Link href={href} key={`icon-${icon}`} rel="external noopener noreferrer" target="_blank">
      <Icon icon={icon} inverted={inverted} />
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
