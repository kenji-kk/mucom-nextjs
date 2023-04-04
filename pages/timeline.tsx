import Head from "next/head";
import { VFC, useState } from "react";
import TweetCard from "../components/molecules/TweetCard";
import { GetServerSidePropsContext } from "next";
import { Review } from "../lib/model/reviewsModel";
import { Box, Typography } from "@mui/material";

const Timeline: VFC<{ reviews: Review[] }> = ({ reviews }) => {
  console.log(reviews);

  return (
    <div>
      <Head>Timeline</Head>
      <Typography
        variant="h1"
        align="center"
        sx={{ fontSize: "40px", marginTop: "40px" }}
      >
        Timeline
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Box sx={{ p: 2 }}>左側</Box>
        <Box sx={{ maxWidth: "800px", flexGrow: 1 }}>
          {reviews.map((review) => (
            <div key={review.Id}>
              <TweetCard review={review} />
            </div>
          ))}
        </Box>
        <Box sx={{ p: 2 }}>右側</Box>
      </Box>
    </div>
  );
};
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  console.log();
  const response = await fetch(`http://go:8080/reviews`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const reviews: Review[] = await response.json();
  console.debug("-- -- -- データきてる？-- -- --");
  console.log(reviews);
  return {
    props: { reviews },
  };
};
export default Timeline;
