import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import theme from "../../theme"
import Header from "../header"
import "./layout.css"

const Container = styled("div")`
  margin: 0 auto;
  padding: 0px 1.0875rem 1.45rem;
  min-height: 100vh;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const Flex = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Main = styled("main")`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${theme.colors.white};
  color: ${theme.colors.text};
  border-radius: 4px;
  padding: 8px;
  column-gap: 8px;
`

const Posts = styled("aside")`
  background: rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 8px;
  flex: 1;
  color: ${theme.colors.white};
`

const Content = styled("div")`
  flex: 2;

  p {
    font-family: "Helvetica Neue", sans-serif;
    font-size: 1rem;
  }
  a {
    text-decoration: none;
    color: ${theme.colors.text};
    border-bottom: 0.0625rem solid ${theme.colors.jmRed};
    padding-top: 0.05rem;
    padding-bottom: 0.05rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    background: linear-gradient(
      to bottom,
      ${theme.colors.jmBlue} 0,
      ${theme.colors.jmRed} 100%
    );
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 0 0;
    transition: background 0.4s ease-in-out, color 0.4s ease-in-out;
  }
  a:hover {
    color: ${theme.colors.white};
    background-size: 0.625rem 3.125rem;
  }
`

const Footer = styled("footer")`
  position: fixed;
  font-size: 12px;
  bottom: 0;
  right: 8px;
  padding-left: ${theme.space[2]}px;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    &:hover {
      text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.75);
    }
  }
`

const BlogLayout = ({ children }) => (
  <Container>
    <Flex>
      <Header siteTitle="Candid &amp; Left-Handed" />
      <Main>
        <Content>{children}</Content>
        <Posts></Posts>
      </Main>
    </Flex>
    <Footer>&copy; 2021. Justin W. Michaliga</Footer>
  </Container>
)

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout
