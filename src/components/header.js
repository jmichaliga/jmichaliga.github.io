import PropTypes from "prop-types"
import React from "react"

import styled from 'styled-components'
import theme from '../theme'

const H1 = styled('h1')`
  color: ${theme.colors.white};
  text-shadow: ${theme.colors.black} 1px 1px 2px;
  letter-spacing: -0.5px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: ${theme.fontSizes[7]}px;
  font-weight: 300;
  padding: 3rem 1rem;
  text-align: center;
  margin-bottom: 0;
`

const Header = ({ children, siteTitle }) => (
  <header>
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
