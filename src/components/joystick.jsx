import React, { useEffect, useState } from "react";
// import { Howl, Howler } from "howler";
import ReactNipple from "react-nipple";
import "react-nipple/lib/styles.css";
import DebugView from "react-nipple/lib/DebugView";
import { IonButton, IonPage } from "@ionic/react";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { useIonRouter } from "@ionic/react";

const hapticsImpactLight = async () => {
  await Haptics.impact({ style: ImpactStyle.Light });
};

const Joystick = ({
  joystickState,
  setJoystickState,
  stageHome,
  stagePie,
  setStageHome,
  setStagePie,
  selected,
  setSelected,
  setActivePie,
}) => {
  const twiddle = (evt, data) => {
    let thumb = joystickState.data;
    // console.log(evt);
    // console.log(data);
    setJoystickState({ data });
    console.log(joystickState.data.distance);
    let distance = joystickState.data.distance;
    let direction = joystickState.data.direction;
    console.log("s HOME", stageHome);
    console.log("s PIE", stagePie);

    if (distance >= 5 && distance <= 12 && direction && direction.y === "up") {
      setSelected("01_launch_2022");
      if (thumb.pressure > 0.55) {
        hapticsImpactLight();
        setActivePie(selected);
        setTimeout(() => {
          // setStageHome(false);
          navigate.push("/pie-view", "forward");
        }, 50);
      }
    }
    if (distance >= 13 && distance <= 24 && direction && direction.y === "up") {
      setSelected("02_launch_2022");
      if (thumb.pressure > 0.55) {
        hapticsImpactLight();
        setActivePie(selected);
        setTimeout(() => {
          // setStageHome(false);
          navigate.push("/pie-view", "forward");
        }, 50);
      }
    }
    if (distance >= 25 && distance <= 35 && direction && direction.y === "up") {
      setSelected("03_launch_2022");
      if (thumb.pressure > 0.55) {
        hapticsImpactLight();
        setActivePie(selected);
        setTimeout(() => {
          // setStageHome(false);
          navigate.push("/pie-view", "forward");
        }, 50);
      }
    }
    if (distance >= 36 && distance <= 45 && direction && direction.y === "up") {
      setSelected("04_launch_2022");
      if (thumb.pressure > 0.55) {
        hapticsImpactLight();
        setActivePie(selected);
        setTimeout(() => {
          // setStageHome(false);
          navigate.push("/pie-view", "forward");
        }, 50);
      }
    }

    if (!stageHome && stagePie) {
      if (distance > 40 && direction && direction.y == "down") {
        console.log("back???");
      }
    }
  };
  const navigate = useIonRouter();

  return (
    <div id="chest">
      <ReactNipple
        options={{
          // color: "#ff006f",
          color: "#bc5fff",
          fadeTime: 500,
          position: { top: "50%", left: "50%" },
          mode: "static",
        }}
        style={{
          // outline: "1px dashed red",
          color: "blue",
          width: 130,
          height: 130,
          position: "relative",
        }}
        onStart={(e, d) => twiddle(e, d)}
        onEnd={(e, d) => twiddle(e, d)}
        onMove={(e, d) => twiddle(e, d)}
        onDir={(e, d) => twiddle(e, d)}
        onPlain={(e, d) => twiddle(e, d)}
        onShown={(e, d) => twiddle(e, d)}
        onHidden={(e, d) => twiddle(e, d)}
        onPressure={(e, d) => twiddle(e, d)}
      />
    </div>
  );
};

export default Joystick;
