import React, { useState } from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { IconButton } from "@mui/material";
const MusicStartButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const palyerStart = () => {
    console.log("movieStart");
    setIsPlaying(true);
  };
  return (
    <IconButton onClick={palyerStart} color={isPlaying ? "primary" : "default"}>
      <PlayCircleFilledWhiteIcon />
    </IconButton>
  );
};

export default MusicStartButton;
