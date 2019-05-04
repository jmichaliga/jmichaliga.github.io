/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

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
  paddingTop: 0;
  height: 100vh;
  max-width: 960px;
`

const Main = styled('main')`
  font-size: 1em;
  width: 100%;
`
const Footer = styled('footer')`
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 0.8em;
  font-family: 'IBM Plex Mono';
  padding: ${theme.space[3]}px;
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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          <Main>{children}</Main>
          <Footer>
            © {new Date().getFullYear()}
          </Footer>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
