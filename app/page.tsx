import React from "react";
import Image from "next/image";
import mountain from "@/public/mountain.jpg";


const Home = () => {
  return (
    <main className="relative w-screen h-screen">
      <h1 className="relative z-10 font-poppins ">Hello World</h1>
      <Image
        src="https://bit.ly/react-cover"
        alt="a sillouhette of a man standing on a mountain beneath a blue sky"
        fill
        className="-z-100 object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
        />
    </main>
  );
};

export default Home;
