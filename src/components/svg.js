import PropTypes from "prop-types"
import React from "react"
import Image from "next/image"

const Svg = ({ name, url, inverted }) => {
  return (
    <Image
      src={url}
      width="250"
      height="250"
      alt={name}
      className={inverted ? "invert" : ""}
    />
  )
}

Svg.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  inverted: PropTypes.bool,
}

Svg.defaultProps = {
  name: "",
  url: "",
  inverted: false,
}

export default Svg
