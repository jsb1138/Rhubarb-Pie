import React from 'react'

export default function PieItem({pie, allPies}) {
  function isHighlighted(pie) {
    return pie === allPies[0] ? true : false;
  }

  if (isHighlighted(pie)) {
  return (
    <div className="pie-item" id="highlighted" style={{ backgroundImage: `url("${pie.art}")`, backgroundSize: "130%", backgroundPosition: "-15px" }}><h1>{pie.tagline}.<br/><span>{pie.type}</span>.</h1></div>
  )
} else {
    return (
      <div className="pie-item" style={{ backgroundImage: `url("${pie.art}")`,backgroundSize: "100%", backgroundPosition: "left -30px" }}><h1><span>{pie.type}</span></h1></div>
    )
  }
}
