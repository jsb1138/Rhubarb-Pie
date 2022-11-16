import { useAudioPlayer } from "react-use-audio-player";
import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {
  useIonViewWillEnter,
  useIonViewDidEnter,
  ionViewWillEnter,
} from "@ionic/react";

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

  const nudge = {
    paddingRight: "-40px",
  };

  return (
    <>
      <button
        id={!isPlaying ? "play-btn" : "pause-btn"}
        onClick={() => {
          togglePlayPause();
          if (!isPlaying) {
            setIsPlaying(true);
          } else {
            setIsPlaying(false);
          }
        }}
      >
        <div className="center">
          <div className={!isPlaying ? "play-container" : "pause-container"}>
            <h2>{!isPlaying ? "►" : "▐▐"}</h2>
          </div>
          <div className={!isPlaying ? "countdown1" : "countdown2"}>
            {!isPlaying ? (
              <CountdownCircleTimer
                duration={100}
                colors={["#1a1835", "#da01f7", "#a30067", "#A30000"]}
                colorsTime={[10, 6, 4, 0]}
              ></CountdownCircleTimer>
            ) : (
              <CountdownCircleTimer
                isPlaying
                duration={100}
                colors={["#1a1835", "#da01f7", "#a30067", "#A30000"]}
                colorsTime={[10, 6, 4, 0]}
              ></CountdownCircleTimer>
            )}
          </div>
        </div>
      </button>
    </>
  );
};

export default AudioPlayer;
