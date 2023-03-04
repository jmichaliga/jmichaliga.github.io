import React from "react"
import Header from "../header"

import { Container, Footer, Main, Stack } from ".."

const Layout = ({ children }) => (
  <Container>
    <Stack>
      <Header siteTitle="Justin W. Michaliga" />
      <Main>{children}</Main>
    </Stack>
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

export default Layout
