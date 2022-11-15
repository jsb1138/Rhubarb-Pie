import { Howl, Howler } from "howler";
import React, { useState } from "react";

export default function Player() {
  // const AudioPlayer = ({ file }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [state, setState] = useState({ data: {} });

  function playHandler() {
    if (isPlaying) {
      sound.fade(1, 0, 200);
      setTimeout(() => {
        setIsPlaying(false);
        sound.pause();
      }, 201);
    } else {
      setIsPlaying(true);
      sound.fade(0, 1, 400);
      sound.play();
    }
  }

  function soundFadeout() {
    sound.fade(1, 0, fadeRate);
    setIsFading(true);
    setTimeout(() => {
      sound.stop();
      setIsPlaying(false);
      setIsFading(false);
    }, fadeRate);
  }

  if (isPlaying) {
    const progressCheck = setInterval(() => {
      // progress = sound.seek();
      if (sound.seek() > 3) {
        checkRate = null;
        clearInterval(progressCheck);
        soundFadeout();
      }
    }, checkRate);
  }

  // function prog() {
  //   if (isPlaying) {
  //     const checkTime = setInterval(() => {
  //       progress = sound.seek();
  //     }, 100);
  //   }
  //   return progress;
  // }

  function handleEvent(evt, data) {
    console.log(evt);
    setState({ data });
  }

  const sound = new Howl({
    src: ["http://www.thefarlife.com/saw3.wav"],
    html5: true,
  });
  let checkRate = 500;
  let fadeRate = 5000;

  return (
    <button id="play-btn">
      <div>
        <h2>►</h2>
      </div>
    </button>
  );
}
// }
