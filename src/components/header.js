import { H1 } from "."
// import Nav from "./nav"

const Header = ({ children, siteTitle }) => (
  <header>
    <div className="container mx-auto text-center mt-2">
      <H1>{children ? children : siteTitle}</H1>
    </div>
  </header>
)

export default Header
