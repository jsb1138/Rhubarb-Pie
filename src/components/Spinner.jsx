import React from "react";

const center = {
  marginTop: "50%",
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center",
};

const style0 = {
  index: "0",
};

const style1 = {
  index: "1",
};

const style2 = {
  index: "2",
};

const style3 = {
  index: "3",
};

const style4 = {
  index: "4",
};

export default function Spinner() {
  return (
    <div>
      <main style={center}>
        <div className="chaotic-orbit"></div>
      </main>
    </div>
  );
}
