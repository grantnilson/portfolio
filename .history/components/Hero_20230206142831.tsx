import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import profile_pic from "../assets/pictures/profile_pic.png";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../lib/sanity";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo[];
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, my name is ${pageInfo[0]?.name}!`,
      "I'm a full stack developer who loves to code.",
      "Scroll down to find out a little more about me...",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const url = pageInfo[0]?.heroImage;

  //console.log(url);

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center 
        text-center overflow-hidden py-2px"
    >
      <BackgroundCircles />
      {
        <div>
          {pageInfo[0]?.heroImage && (
            <Image
              className="relative rounded-full h-32 w-32 mx-auto object-cover"
              src={urlFor(url).url()}
              width={128}
              height={128}
              alt=""
            />
          )}
        </div>
      }

      <div className="z-20 py-px">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo[0]?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="py-px">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
