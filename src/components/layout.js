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
// import { Flex } from '@smartnode/masonry'
import theme from '../theme'

import Header from "./header"
import "./layout.css"

const Container = styled('div')`
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  height: 100vh;
  max-width: 960px;
`

const Main = styled('main')`
 width: 100%;
`

const Footer = styled('footer')`
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: ${theme.fontSizes[0]}px;
  font-family: 'IBM Plex Mono';
  padding-left: ${theme.space[2]}px;
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
            <span role="img" aria-label="Hi">⚡</span>
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
