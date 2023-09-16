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

export default Icon
