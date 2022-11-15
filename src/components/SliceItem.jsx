import React from "react";
import SimpleButton from "./SimpleButton";

export default function SliceItem({ slice, allSlices, selected }) {
  return (
    <div
      className={`slice-item ${slice.id == selected ? "slice-item-hover" : ""}`}
    >
      <div>{slice.title}</div>
      <SimpleButton icon={"►"} />
    </div>
  );
}
