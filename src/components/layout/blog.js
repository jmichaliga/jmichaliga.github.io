import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "../../theme"
import Header from "../header"
import { Box, Flex, Ul, Li} from "../elements"
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

const Stack = styled(Flex)`
  flex-direction: column;
  height: 100%;
`

const Main = styled(Flex)`
  background: ${theme.colors.white};
  color: ${theme.colors.text};
  border-radius: ${theme.radii[3]}px;

  a {
    text-decoration: none;
    color: ${theme.colors.text};
    border-bottom: 1px solid ${theme.colors.jmRed};
    padding-top: 0.05rem;
    padding-bottom: 0.05rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    background: linear-gradient(
      to bottom,
      ${theme.colors.jmRed} 0,
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

const Posts = styled("aside")`
  background: rgba(0, 0, 0, 0.25);
  border-radius: ${theme.radii[3]}px;
  padding: ${theme.space[2]}px;
  color: ${theme.colors.text};
`

const Footer = styled("footer")`
  position: fixed;
  font-size: ${theme.fontSizes[0]}px;
  color: ${theme.colors.text};
  bottom: 0;
  right: ${theme.space[2]}px;
`

const BlogLayout = ({ children }) => (
  <Container>
    <Stack>
      <Header siteTitle="Candid &amp; Left-Handed" />
      <Main p={1}>
        <Flex>
          <Box width={[1, 1 /3]} p={2}>
            <Posts>
              Categories to include:
              <Ul mx={0} mt={2}>
                <Li><a href="#">javascript</a></Li>
                <Li><a href="#">hockey</a></Li>
                <Li><a href="#">design</a></Li>
                <Li><a href="#">nyc</a></Li>
              </Ul>
            </Posts>
          </Box>
          <Box width={[1, 2 / 3]} p={2}>
            {children}
          </Box>
        </Flex>
      </Main>
    </Stack>
    <Footer>&copy; 2021. Justin W. Michaliga</Footer>
  </Container>
)

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout
