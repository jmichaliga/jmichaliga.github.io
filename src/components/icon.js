import PropTypes from "prop-types"
import React from "react"
import Image from "next/image"

const Icon = ({ icon, inverted, text, hint }) => {
  return hint ? (
    <abbr title={icon} key={icon} className="hidden">
      <Image
        key={icon}
        src={`/images/${icon}.svg`}
        height="24"
        width="24"
        alt={text}
        className={inverted ? "invert" : ""}
      />
    </abbr>
  ) : (
    <Image
      key={icon}
      src={`/images/${icon}.svg`}
      height="24"
      width="24"
      alt={text}
      className={inverted ? "invert" : ""}
    />
  )
}

Icon.propTypes = {
  icon: PropTypes.string,
  inverted: PropTypes.bool,
  text: PropTypes.string,
  hint: PropTypes.bool,
}

Icon.defaultProps = {
  icon: "github",
  inverted: true,
  text: "",
  hint: true,
}

export default Icon
