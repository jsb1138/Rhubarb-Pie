import React from 'react'

export default function PieItem({pie, allPies}) {
  function isHighlighted(pie) {
    return pie === allPies[0] ? true : false;
  }

  if (isHighlighted(pie)) {
  return (
    <div className="pie-item" id="highlighted" style={{ backgroundImage: `url("https://solacio-media.s3.eu-central-1.amazonaws.com/star-boy.jpeg")`, backgroundSize: "130%", backgroundPosition: "-15px" }}><h1>Take a moment <br/>to <span>relax</span>.</h1></div>
  )
} else {
    return (
      <div className="pie-item" style={{ backgroundImage: `url("https://solacio-media.s3.eu-central-1.amazonaws.com/trees-in-fog.jpeg")`,backgroundSize: "100%", backgroundPosition: "left -30px" }}><h1><span>Focus</span></h1></div>
    )
  }
}
