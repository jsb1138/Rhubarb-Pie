import React from "react";
import SimpleButton from "./SimpleButton";

export default function ActivePieHeader({ allPies, activePie }) {
  let grabPie = allPies.filter((pie) => {
    return pie.id === activePie;
  });
  let currentPie = grabPie[0];

  return (
    <div id="current-pie-header">
      <SimpleButton icon={"♥"} />
      <div
        id="current-pie-art"
        style={{
          backgroundImage: `url("${currentPie.art}")`,
          // backgroundSize: "130%",
          backgroundPosition: "-25px",
        }}
      ></div>
      <SimpleButton icon={"•••"} />
    </div>
  );
}
