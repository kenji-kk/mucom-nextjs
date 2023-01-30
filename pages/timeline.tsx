import Head from "next/head";
import { VFC, useState } from "react";
import TweetCard from "../components/molecules/TweetCard";

const Timeline: VFC = () => {
  return (
    <div>
      <Head>
        <title>timeline</title>
      </Head>
      <TweetCard />
    </div>
  );
};
// export const getServerSideProps = async (context) => {
//   //   alert("a");
//   const response = await fetch(
//     `http://localhost:3000/api/item/${context.query.id}`
//   );
//   const singleItem = await response.json();
//   console.log(singleItem);
//   return {
//     props: singleItem,
//   };
// };
export default Timeline;
