import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const likeButton = () => {
  const count = 0;

  return (
    <span className="likeButton">
      <FavoriteIcon />
      {count}
    </span>
  );
};

export default likeButton;
