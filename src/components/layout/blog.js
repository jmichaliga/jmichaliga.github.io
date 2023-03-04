import React from "react"
import Header from "../header"
import { Box, Flex, Ul, Li, Container, Stack, Main, Footer } from "@/components"

const BlogLayout = ({ children }) => (
  <Container>
    <Stack>
      <Header siteTitle="Candid &amp; Left-Handed" />
      <Main>
        <Flex>
          <Box>
            Categories to include:
            <Ul>
              <Li>
                <a href="#">javascript</a>
              </Li>
              <Li>
                <a href="#">hockey</a>
              </Li>
              <Li>
                <a href="#">design</a>
              </Li>
              <Li>
                <a href="#">nyc</a>
              </Li>
            </Ul>
          </Box>
          <Box>{children}</Box>
        </Flex>
      </Main>
    </Stack>
    <Footer>
      &copy; {new Date().getFullYear()} &mdash; Justin W. Michaliga
    </Footer>
  </Container>
)

export default BlogLayout
