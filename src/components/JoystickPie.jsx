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

// export default class Joystick extends React.Component {
const Joystick = ({
  joystickState,
  setJoystickState,
  stageHome,
  stagePie,
  setStageHome,
  setStagePie,
  selected,
  setSelected,
  setActiveSlice,
  playSelected,
  setPlaySelected,
}) => {
  const twiddle = (evt, data) => {
    let thumb = joystickState.data;
    // console.log(evt);
    // console.log(data);
    setJoystickState({ data });
    console.log(joystickState.data.direction);
    let distance = joystickState.data.distance;
    let direction = joystickState.data.direction;
    let angle = joystickState.data.angle;
    // console.log("s HOME", stageHome);
    // console.log("s PIE", stagePie);
    // console.log("angle", degree);
    console.log("info", angle);
    console.log("playSel", playSelected);

    // play selector
    if (
      // distance >= 1 &&
      // distance <= 8 &&
      // direction &&
      direction.y === "up" &&
      angle.degree > 0 &&
      angle.degree < 160 &&
      angle.radian <= 0.6
    ) {
      setPlaySelected(true);
    }
    if (
      // distance >= 1 &&
      // distance <= 8 &&
      // direction &&
      direction.y === "up" &&
      angle.degree > 0 &&
      angle.degree < 160 &&
      angle.radian > 0.601
    ) {
      setPlaySelected(false);
    }

    // 1
    if (
      distance >= 1 &&
      distance <= 8 &&
      direction &&
      direction.y === "up" &&
      angle.degree > 0 &&
      angle.degree < 160
    ) {
      setSelected("1R_3");
      if (thumb.pressure > 11.55) {
        hapticsImpactLight();
        setActiveSlice(selected);
        setTimeout(() => {
          // setStageHome(false);
          navigate.push("/slice-view", "forward");
        }, 50);
      }
    }

    // 2
    if (
      distance >= 9 &&
      distance <= 16 &&
      direction &&
      direction.y === "up" &&
      angle.degree > 0 &&
      angle.degree < 160
    ) {
      setSelected("1R_1");
      if (thumb.pressure > 11.55) {
        hapticsImpactLight();
        setActiveSlice(selected);
        setTimeout(() => {
          // setStageHome(false);
          navigate.push("/slice-view", "forward");
        }, 50);
      }
    }
    // 3
    if (
      distance >= 17 &&
      distance <= 24 &&
      direction &&
      direction.y === "up" &&
      angle.degree > 0 &&
      angle.degree < 160
    ) {
      setSelected("1R_5");
      if (thumb.pressure > 11.55) {
        hapticsImpactLight();
        setActiveSlice(selected);
        setTimeout(() => {
          // setStageHome(false);
          navigate.push("/slice-view", "forward");
        }, 50);
      }
    }
    // 4
    if (
      distance >= 25 &&
      distance <= 32 &&
      direction &&
      direction.y === "up" &&
      angle.degree > 0 &&
      angle.degree < 160
    ) {
      setSelected("1R_4");
      if (thumb.pressure > 11.55) {
        hapticsImpactLight();
        setActiveSlice(selected);
        setTimeout(() => {
          // setStageHome(false);
          navigate.push("/slice-view", "forward");
        }, 50);
      }
    }

    // 5
    if (
      distance >= 33 &&
      distance <= 40 &&
      direction &&
      direction.y === "up" &&
      angle.degree > 0 &&
      angle.degree < 160
    ) {
      setSelected("1R_2");
      if (thumb.pressure > 11.55) {
        hapticsImpactLight();
        setActiveSlice(selected);
        setTimeout(() => {
          // setStageHome(false);
          navigate.push("/slice-view", "forward");
        }, 50);
      }
    }

    // 6
    if (
      distance >= 41 &&
      distance <= 49 &&
      direction &&
      direction.y === "up" &&
      angle.degree > 0 &&
      angle.degree < 160
    ) {
      setSelected("");
      if (thumb.pressure > 11.55) {
        hapticsImpactLight();
        setActiveSlice(selected);
        setTimeout(() => {
          // setStageHome(false);
          navigate.push("/slice-view", "forward");
        }, 50);
      }
    }

    // 7
    if (
      distance == 50 &&
      direction &&
      direction.y === "up" &&
      angle.degree > 0 &&
      angle.degree < 160
    ) {
      setSelected("");
      if (thumb.pressure > 11.55) {
        hapticsImpactLight();
        setActiveSlice(selected);
        setTimeout(() => {
          // setStageHome(false);
          navigate.push("/slice-view", "forward");
        }, 50);
      }
    }

    if (
      distance === 50 &&
      direction &&
      direction.x == "left" &&
      angle.degree > 155 &&
      angle.degree < 210
    ) {
      setTimeout(() => {
        hapticsImpactLight();
        navigate.push("/", "forward");
      }, 200);
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
