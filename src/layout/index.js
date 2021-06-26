import React from "react"
import { Box, Container, Footer } from "../components/elements"

const Layout = ({ children }) => (
  <Container h="100vh">
    <Box>{children}</Box>
    <Footer width="100%">
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

export default Layout
