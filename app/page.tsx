import React from "react";
import Image from "next/image";
import { Metadata } from "next";


const Home = () => {
  return (
    <main className="relative w-screen h-screen">
      <h1 className="relative z-10">Hello World</h1>
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

export const metadata: Metadata = {
  title: "Home",
  description: "A simple home page",
  keywords: ["home", "page"],
}

export default Home;

