import React from 'react'
import Image from 'next/image'
import mountain from "@/public/mountain.jpg"

const Home = () => {
  return (
    <Image src={mountain} alt="a sillouhette of a man standing on a mountain beneath a blue sky"/>
  )
}

export default Home