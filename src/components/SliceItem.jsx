import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SimpleButton from "./SimpleButton";

export default function SliceItem({
  slice,
  allSlices,
  selected,
  setActiveSlice,
  playSelected,
  currentPath,
  setCurrentPath,
}) {
  const linkStyle = {
    // backgroundColor: "white",
    padding: "0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
  };

  // let grabSlice = allSlices.filter((slice) => {
  //   return slice.id === activeSlice;
  // });
  // currentSlice = grabSlice[0];
  // setCurrentPath(currentSlice.path);

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
        <SimpleButton
          icon={"►"}
          selectedBtn={
            slice.id == selected && playSelected ? "simple-btn-hover" : ""
          }
        />
      </div>
    </Link>
  );
}
