import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../theme"
import { Box, H3, Ul, Li } from "./elements"

const NavItems = styled(Ul)`
  position: absolute;
  top: 0;
  right: 0;
  & li {
    display: inline-block;
    & a {
      transition-duration: ${theme.duration.normal};
      border-bottom: 2px solid transparent;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      & svg {
        cursor: pointer;
      }
    }
    &:hover {
      text-shadow: ${theme.colors.black} 1px 1px 3px;
      border-bottom: 2px solid ${theme.colors.jmBlue};
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0);
    }
  }
`

const NavItem = ({ url, title }) => (
  <Li>
    <Link to={url}>
      <H3>{title}</H3>
    </Link>
  </Li>
)

const Nav = () => (
  <Box width={[1, 1 / 2]} ml="auto">
    <NavItems>
      <NavItem url="/" title="Home" />
      <NavItem url="/work" title="Work" />
      <NavItem url="/blog" title="Blog" />
    </NavItems>
  </Box>
)

export default Nav
