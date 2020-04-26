import React from "react";

const SignIcon = ({x, y, sign, width}) => {
  const svgPath = `/astrology-icons/signs/${(sign).toString().padStart(2, '0')}.svg`
  return <image
    width={width}
    x={x - width/2}
    y={y - width/2}
    xlinkHref={svgPath}
  />
}

export default SignIcon
