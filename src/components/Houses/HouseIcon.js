import React from "react";

const HouseIcon = ({x, y, sign, width, ...props}) => {
  const svgPath = `/astrology-icons/houses/${(sign).toString().padStart(2, '0')}.svg`
  return <image
    width={width}
    x={x - width/2}
    y={y - width/2}
    xlinkHref={svgPath}
  />
}

export default HouseIcon
