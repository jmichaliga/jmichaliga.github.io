const StyledLink = ({ className, href, children, rel, target }) => (
  <a className={className} href={href} rel={rel} target={target}>
    {children}
  </a>
)

export default StyledLink
