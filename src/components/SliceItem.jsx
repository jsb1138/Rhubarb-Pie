import React from "react";
import { Link } from "react-router-dom";
import SimpleButton from "./SimpleButton";

export default function SliceItem({
  slice,
  allSlices,
  selected,
  setActiveSlice,
}) {
  const linkStyle = {
    // backgroundColor: "white",
    padding: "0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
  };

  return (
    <Link
      to="/slice-view"
      style={linkStyle}
      onClick={() => {
        setActiveSlice(slice.id);
      }}
    >
      <div
        className={`slice-item ${
          slice.id == selected ? "slice-item-hover" : ""
        }`}
      >
        <div>{slice.title}</div>
        <SimpleButton icon={"►"} />
      </div>
    </Link>
  );
}
