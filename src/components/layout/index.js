import React from "react"
import PropTypes from "prop-types"
import styled from '@emotion/styled'
import theme from "../../theme"
import Header from "../header"

const Container = styled("div")`
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  min-height: 100vh;
  max-width: 960px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Flex = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Main = styled("main")`
  width: 100%;
`

const Footer = styled("footer")`
  position: fixed;
  bottom: 4px;
  right: 8px;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    &:hover {
      border-bottom: 1px solid ${theme.colors.jmBlue};
    }
  }
`

const Layout = ({ children }) => (
  <Container>
    <Flex>
      <Header siteTitle="Justin W. Michaliga" />
      <Main>{children}</Main>
    </Flex>
    <Footer>
      <a
        href="https://codepen.io/jmichaliga/full/GBNWXx"
        target="_blank"
        rel="noreferrer noopener"
      >
        <span role="img" aria-label="2021">
          👾
        </span>
      </a>
    </Footer>
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
