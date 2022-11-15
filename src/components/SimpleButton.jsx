import React from "react";

export default function SimpleButton({ icon }) {
  return (
    <button className="simple-btn">
      <p>{icon}</p>
    </button>
  );
}
