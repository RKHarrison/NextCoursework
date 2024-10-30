import React from "react";
import Image from "next/image";
import mountain from "@/public/mountain.jpg";

const Home = () => {
  return (
    <Image
      src="https://bit.ly/react-cover"
      alt="a sillouhette of a man standing on a mountain beneath a blue sky"
      width={500}
      height={500}
    />
  );
};

export default Home;
