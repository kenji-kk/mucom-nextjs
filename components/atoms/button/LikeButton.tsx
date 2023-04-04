import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

const LikeButton = () => {
  const [count, setCount] = useState(0);

  const handlerLikeClick = () => {
    if (count == 10) {
      console.log("これ以上入れない");
    } else {
      setCount(count + 1);
    }
  };

  return (
    <IconButton className="likeButton" onClick={handlerLikeClick}>
      <FavoriteIcon />
      {count}
    </IconButton>
  );
};

export default LikeButton;
