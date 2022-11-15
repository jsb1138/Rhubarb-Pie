import React from "react";
import SimpleButton from "./SimpleButton";

export default function SliceItem({ slice, allSlices }) {
  return (
    <div className="slice-item">
      <div>{slice.title}</div>
      <SimpleButton icon={"►"} />
    </div>
  );
}
