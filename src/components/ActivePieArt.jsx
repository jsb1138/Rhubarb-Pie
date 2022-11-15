import React from "react";

export default function ActivePieArt({ allPies, activePie }) {
  let grabPie = allPies.filter((pie) => {
    return pie.id === activePie;
  });
  let currentPie = grabPie[0];

  // console.log("ALL PIES", allPies);
  // console.log("ACTIVE PIE", activePie);
  console.log("SELECTED PIE", currentPie);

  // console.log("SELECTED", selectedPie);
  return (
    <div
      id="current-pie-art"
      style={{
        backgroundImage: `url("${currentPie.art}")`,
        // backgroundSize: "130%",
        backgroundPosition: "-65px",
      }}
    ></div>
  );
}
