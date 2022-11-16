import React from "react";

export default function SimpleButton({ icon, selectedBtn }) {
  return <button className={`simple-btn ${selectedBtn}`}>{icon}</button>;
}
