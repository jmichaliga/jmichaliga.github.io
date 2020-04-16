import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'
import theme from '../theme'

const H1 = styled('h1')`
  color: ${theme.colors.white};
  text-shadow: ${theme.colors.black} 1px 1px 2px;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  font-size: ${theme.fontSizes[6]}px;
  padding: 1.45rem 1.0875rem;
  text-align: center;
`

const Header = ({ children, siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <H1>
        {children ? children : siteTitle}
      </H1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `JMichaliga`,
}

export default Header
