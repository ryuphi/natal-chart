import React from "react";

const AstroIcon = ({x, y, astro, width}) => {
  const svgPath = `/astrology-icons/planets/${astro}.svg`
  return <image
    width={width}
    x={x - width/2}
    y={y - width/2}
    xlinkHref={svgPath}
  />
}

export default AstroIcon
