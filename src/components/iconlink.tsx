import Icon from "./icon"
// import Link from "next/link"
import StyledLink from "./link"

const IconLink = ({ href = "#", icon = "github", inverted = true, hint = true, text = "" }) => {
  return (
    <StyledLink
      href={href}
      key={`icon-${icon}`}
      rel="external noopener noreferrer"
      target="_blank"
      className="flex bg-jmRed hover:bg-jmBlue duration-500 ease-in-out rounded-[4px] p-2 items-center gap-2 transition-colors" 
    >
      <Icon icon={icon} inverted={inverted} hint={hint} />
      {text}
    </StyledLink>
  )
}

export default IconLink
