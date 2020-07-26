import PropTypes from "prop-types"
import React from "react"

import { H1 } from "./elements"
// import Nav from "./nav"

const Header = ({ children, siteTitle }) => (
  <header>
    {/* <Nav /> */}
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <H1>{children ? children : siteTitle}</H1>
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
