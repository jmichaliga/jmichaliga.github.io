import Image from "next/image"

const Svg = ({ name, url, inverted }: { name: string, url: string, inverted?: boolean }) => {
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

export default Svg
