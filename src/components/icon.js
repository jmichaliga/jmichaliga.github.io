import PropTypes from "prop-types"
import React from "react"
import Image from "next/image"

const Icon = ({ icon, inverted, text }) => {
  return (
    <abbr title={icon} key={icon} className="hidden">
      <Image
        key={icon}
        src={`/icons/${icon}.svg`}
        height="24"
        width="24"
        alt={text}
        className={inverted ? "invert" : ""}
      />
    </abbr>
  )
}

Icon.propTypes = {
  icon: PropTypes.string,
  inverted: PropTypes.bool,
  text: PropTypes.string,
}

Icon.defaultProps = {
  icon: "github",
  inverted: true,
  text: "",
}

export default Icon
