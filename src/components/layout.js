import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import theme from '../theme'
import Header from "./header"
import "./layout.css"

const Container = styled('div')`
  margin: 0 auto;
  padding: 1rem 1.5rem;
  height: 100vh;
  max-width: 960px;
`

const Main = styled('main')`
 width: 100%;
`

const Bar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 3px;
  width: 100%;
  background: ${theme.colors.jmRed};
`

const Footer = styled('footer')`
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: ${theme.fontSizes[2]}px;
  font-family: 'IBM Plex Mono';
  padding-left: ${theme.space[2]}px;
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
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Bar />
        <Container>
          <Main>{children}</Main>
          <Footer>
            <a href="https://codepen.io/jmichaliga/full/GBNWXx" target="_blank" rel="noreferrer noopener">
              <span role="img" aria-label="2020">👾</span>
            </a>
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
