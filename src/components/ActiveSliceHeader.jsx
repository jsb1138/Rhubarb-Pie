import React from "react";
import SimpleButton from "./SimpleButton";

export default function ActiveSliceHeader({ allPies, activePie, selected }) {
  let grabPie = allPies.filter((pie) => {
    return pie.id === activePie;
  });
  let currentPie = grabPie[0];

  return (
    <div id="current-slice-header">
      <SimpleButton icon={"♥"} />
      <div
        id="current-slice-art"
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
