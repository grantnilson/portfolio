import { motion } from "framer-motion";
import React from "react";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo[];
};

export default function About({ pageInfo }: Props) {
  const url = pageInfo[0]?.profilePic;
  return (
    <div className="flex flex-col relative h-screen text-center md:left-text md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center space-y-4 shrink">
      <h3 className="absolute invisible md:visible top-24 uppercase tracking-[20px] text-gray-500 text-2xl shrink">
        About
      </h3>
      {pageInfo[0]?.profilePic && (
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          src="https://sdk.bitmoji.com/render/panel/20084243-99143891879_5-s5-v1.png?transparent=1&palette=1&scale=2"
          className="-mb-20 md:mb-0 flex-shrink w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64"
          alt=""
        />
      )}
      <div className="space-y-10 px-0 md:px-10 shrink">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background about me...
        </h4>
        <p className="text-base">
          {
            "My name is Grant! I'm a full stack developer who currently lives in San José, California. I graduated from college in 2022 from George Washington University. I have worked in all sorts of different places, from enterprise to startups. I love to build and scale responsive web applications. Let's connect!"
          }
        </p>
      </div>
    </div>
  );
}
