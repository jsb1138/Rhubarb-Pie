import React, { useRef } from "react";
import { IonButton, IonContent } from "@ionic/react";
import { Link } from "react-router-dom";
import { Button } from "@aws-amplify/ui-react";

export default function PieItem({
  pie,
  allPies,
  activePie,
  setActivePie,
  selected,
}) {
  function isHighlighted(pie) {
    return pie === allPies[0] ? true : false;
  }

  const linkStyle = {
    // backgroundColor: "white",
    padding: "0",
    width: "85%",
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
  };

  function focuser() {
    top.current.focus();
  }

  const top = useRef();

  return (
    <>
      {isHighlighted(pie) ? (
        <Link
          to="/slice-view"
          style={linkStyle}
          onClick={() => {
            setActivePie(pie.id);
          }}
        >
          <div
            onClick={focuser}
            ref={top}
            // className="pie-item highlighted"
            className={`highlighted ${
              pie.id == selected ? "highlighted-hover" : ""
            }`}
            // id="highlighted"
            style={{
              backgroundImage: `url("${pie.art}")`,
              backgroundSize: "130%",
              backgroundPosition: "-15px",
            }}
          >
            <h1>
              {pie.tagline}.<span>{` ${pie.type}`}</span>.
            </h1>
          </div>
        </Link>
      ) : (
        <Link
          to="/pie-view"
          style={linkStyle}
          onClick={() => {
            setActivePie(pie.id);
          }}
        >
          <div
            className={`pie-item ${pie.id == selected ? "pie-item-hover" : ""}`}
            style={{
              backgroundImage: `url("${pie.art}")`,
              backgroundSize: "100%",
              backgroundPosition: "left -30px",
            }}
          >
            <h1>
              <span>{pie.type}</span>
            </h1>
          </div>
        </Link>
      )}
    </>
  );
}
