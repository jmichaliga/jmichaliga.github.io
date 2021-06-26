import React, { useState } from "react"
import Link from "next/link"
import styled from '@emotion/styled'
import theme from "../theme"
import { Box, H3, Ul, Li } from "./elements"
import useClickSound from "../hooks/useClickSound"

const Nav = styled(Box)`
  position: fixed;
  transition-duration: ${theme.duration.normal};
  top: 0;
  right: 0;
  z-index: 2;
  &.close {
    transform: translate3d(0, -70px, 0);
  }
  &.open {
    transform: translate3d(0, 0, 0);
    transition-delay: ${theme.duration.normal};
  }
`
const NavActivate = styled.section`
  position: fixed;
  cursor: pointer;
  right: 8px;
  top: 4px;
  transition-duration: ${theme.duration.normal};
  &.close {
    transform: translate3d(0, 0, 0);
    transition-delay: ${theme.duration.normal};
  }
  &.open {
    transform: translate3d(0, -50px, 0);
  }
`
const NavItems = styled(Ul)`
  position: absolute;
  top: 0;
  right: 0;
  & li {
    display: inline-block;
    cursor: pointer;
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
    <Link href={url}>
      <H3>{title}</H3>
    </Link>
  </Li>
)

const NavComponent = () => {
  const [showNav, setShowNav] = useState(false)
  const [click, stopClick] = useClickSound("clickPop")
  const _toggleShowNav = () => {
    stopClick()
    click()
    setShowNav(!showNav)
  }

  return (
    <>
      <Nav
        width={[1, 1 / 2]}
        ml="auto"
        className={showNav ? "open" : "close"}
        onClick={_toggleShowNav}
      >
        <NavItems>
          <NavItem url="/" title="Home" />
          <NavItem url="/work" title="Work" />
          <NavItem url="/blog" title="Blog" />
        </NavItems>
      </Nav>
      <NavActivate
        className={showNav ? "open" : "close"}
        onClick={_toggleShowNav}
      >
        <span role="img" aria-label="nav">
          🍔
        </span>
      </NavActivate>
    </>
  )
}

export default NavComponent
