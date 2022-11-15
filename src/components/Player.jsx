import { useAudioPlayer } from "react-use-audio-player";
import React, { useState } from "react";

// export default function Player() {
const AudioPlayer = ({ file }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const { togglePlayPause, fade } = useAudioPlayer({
    src: file,
    format: "mp3",
    autoplay: false,
    html5: true,
    onplay: () => {
      fade(0, 1, 300);
    },
    onend: () => {
      fade(1, 0, 300);
    },
    onend: () => console.log("sound has ended!"),
  });

  // const sound = new Howl({
  //   src: ["http://www.thefarlife.com/saw3.wav"],
  //   html5: true,
  // });
  // let checkRate = 500;
  // let fadeRate = 5000;

  // function playHandler() {
  //   if (isPlaying) {
  //     console.log("paused");
  //     sound.fade(1, 0, 200);
  //     setTimeout(() => {
  //       setIsPlaying(false);
  //       sound.pause();
  //     }, 201);
  //   } else {
  //     console.log("played");
  //     setIsPlaying(true);
  //     sound.play();
  //     sound.fade(0, 1, 400);
  //   }
  // }

  // function soundFadeout() {
  //   sound.fade(1, 0, fadeRate);
  //   setIsFading(true);
  //   setTimeout(() => {
  //     sound.stop();
  //     setIsPlaying(false);
  //     setIsFading(false);
  //   }, fadeRate);
  // }

  // if (isPlaying) {
  //   const progressCheck = setInterval(() => {
  //     // progress = sound.seek();
  //     if (sound.seek() > 3) {
  //       checkRate = null;
  //       clearInterval(progressCheck);
  //       soundFadeout();
  //     }
  //   }, checkRate);
  // }

  // function prog() {
  //   if (isPlaying) {
  //     const checkTime = setInterval(() => {
  //       progress = sound.seek();
  //     }, 100);
  //   }
  //   return progress;
  // }

  return (
    <>
      <button id="play-btn" onClick={togglePlayPause}>
        <div>
          <h2>{!isPlaying ? "►" : "▐▐"}</h2>
        </div>
      </button>
    </>
  );
};
// }

export default AudioPlayer;
