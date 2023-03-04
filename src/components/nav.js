import React, { useState } from "react"
import Link from "next/link"
import { H3, Li } from "."
import useClickSound from "../hooks/useClickSound"

const Nav = ({ children, className, onClick }) => <nav className={className} onClick={onClick}>{children}</nav>
const NavActivate = ({ children, className, onClick }) => <section className={className} onClick={onClick}>{children}</section>
const NavItems = ({ children }) => <ul className="flex gap-2 ml-0">{children}</ul>

const NavItem = ({ url, title }) => (
  <Li>
    <Link href={url} passHref>
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
