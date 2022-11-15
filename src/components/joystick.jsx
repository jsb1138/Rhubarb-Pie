import React, { useEffect, useState } from "react";
// import { Howl, Howler } from "howler";
import ReactNipple from "react-nipple";
import "react-nipple/lib/styles.css";
import DebugView from "react-nipple/lib/DebugView";
import { IonButton, IonPage } from "@ionic/react";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

const hapticsImpactMedium = async () => {
  await Haptics.impact({ style: ImpactStyle.Medium });
};

const hapticsImpactLight = async () => {
  await Haptics.impact({ style: ImpactStyle.Light });
};

const hapticsVibrate = async () => {
  await Haptics.vibrate({ duration: 10 });
};

const hapticsSelectionStart = async () => {
  await Haptics.selectionStart();
};

const hapticsSelectionChanged = async () => {
  await Haptics.selectionChanged();
};

const hapticsSelectionEnd = async () => {
  await Haptics.selectionEnd();
};

// const sound = new Howl({
//   src: ["http://www.thefarlife.com/saw3.wav"],
//   html5: true,
// });
let checkRate = 500;
let fadeRate = 5000;
let progress = 0;
let bgColor;
let pageLook;

// const barStyle = {
//   height: "20px",
//   width: `${progress}%`,
//   backgroundColor: "black",
//   color: "white",
// };

export default class Joystick extends React.Component {
  state = {
    data: {},
  };
  selected = "";

  bgColor = "lightblue";

  pageLook = {
    backgroundColor: `${this.bgColor}`,
  };
  render() {
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
          onStart={this.handleEvent}
          onEnd={this.handleEvent}
          onMove={this.handleEvent}
          onDir={this.handleEvent}
          onPlain={this.handleEvent}
          onShown={this.handleEvent}
          onHidden={this.handleEvent}
          onPressure={this.handleEvent}
        />
      </div>
    );
  }
  handleEvent = (evt, data) => {
    let thumb = this.state.data;
    console.log(evt);
    this.setState({ data });
    if (thumb.distance === 50) {
      this.bgColor = "white";
    }
    if (
      thumb.direction &&
      thumb.direction.y === "up" &&
      thumb.direction &&
      thumb.direction.x === "left"
    ) {
      this.leftButtonState = "active";
      if (thumb.pressure > 0.55) {
        this.selected = "LEFT!";
        hapticsImpactLight();
      }
    } else {
      this.leftButtonState = "not active";
    }
    if (
      thumb.direction &&
      thumb.direction.y === "up" &&
      thumb.direction &&
      thumb.direction.x === "right"
    ) {
      this.rightButtonState = "active";
      if (thumb.pressure > 0.55) {
        this.selected = "RIGHT!";
        hapticsImpactLight();
      }
    } else {
      this.rightButtonState = "not active";
    }
  };
}
