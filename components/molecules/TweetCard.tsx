import React from "react";
import LikeButton from "../atoms/button/LikeButton";
import MusicStartButton from "../atoms/button/MusicStartButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
const theme = createTheme();

// const TweetCard = (props) => {
const TweetCard = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box border={1} borderRadius={5}>
          <Typography
            fontSize={`2rem`}
            component="h1"
            variant="h5"
            fontFamily={`din`}
            marginLeft={`2rem`}
          >
            this.props
          </Typography>
          <Container component="main" maxWidth="md">
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <LikeButton />
              <MusicStartButton />
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default TweetCard;
