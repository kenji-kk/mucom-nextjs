import React, { VFC } from "react";
import LikeButton from "../atoms/button/LikeButton";
import MusicStartButton from "../atoms/button/MusicStartButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Card, CardContent, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Review } from "../../lib/model/reviewsModel";
const theme = createTheme();

type Props = {
  review: Review;
};

const TweetCard: VFC<Props> = ({ review }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: "80%" }} variant="outlined">
        <CardContent>
          <Typography variant="body1">{review.Content}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <LikeButton />
            <MusicStartButton />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TweetCard;
