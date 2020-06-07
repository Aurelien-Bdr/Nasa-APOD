import React, { useState } from "react";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import { grey } from "@material-ui/core/colors";
import "./Music.scss";

const sound = new Audio("interstellar.mp3");

export default function Music() {
  const [playing, setPlaying] = useState(true);

  const playSound = (audioFile) => {
    audioFile.play();
    setPlaying(false);
  };

  const stopSound = (audioFile) => {
    audioFile.pause();
    setPlaying(true);
  };

  return (
    <div>
      <div className="button-container">
        {playing ? (
          <button className="play-icon" onClick={() => playSound(sound)}>
            <VolumeOffIcon style={{ fontSize: 30, color: grey[50] }} />
          </button>
        ) : (
          <button className="play-icon" onClick={() => stopSound(sound)}>
            <VolumeUpIcon style={{ fontSize: 30, color: grey[50] }} />
          </button>
        )}
      </div>
    </div>
  );
}
