import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import theme from '../theme'
import Header from "./header"
import "./layout.css"

const Container = styled('div')`
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  min-height: 100vh;
  max-width: 960px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Flex = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Main = styled('main')`
  width: 100%;
`

const Footer = styled('footer')`
  position: fixed;
  bottom: 0;
  right: 8px;
  font-family: 'IBM Plex Mono';
  padding-left: ${theme.space[2]}px;
  text-shadow: 0px 0px 4px rgba(0,0,0,0.25);
  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    &:hover {
      border-bottom: 1px solid ${theme.colors.jmBlue};
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Flex>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Main>{children}</Main>
        </Flex>
        <Footer>
          <a href="https://codepen.io/jmichaliga/full/GBNWXx" target="_blank" rel="noreferrer noopener">
            <span role="img" aria-label="2020">👾</span>
          </a>
        </Footer>
      </Container>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
