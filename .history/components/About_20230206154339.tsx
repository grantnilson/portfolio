import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../lib/sanity";
import { PageInfo } from "../typings";
import Link from "next/link";

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
          src={urlFor(url).url()}
          className="-mb-20 md:mb-0 flex-shrink w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64"
          alt=""
        />
      )}
      <div className="space-y-10 px-0 md:px-10 shrink">
        <h4 className="text-4xl font-semibold">
          Here is a little bit about my{" "}
          <span className="underline decoration-[#F7AB0A]/50">
            background...
          </span>{" "}
        </h4>
        <p className=" text-base">{pageInfo[0]?.backgroundInformation}</p>
        <div className="space-y-10 px-0 md:px-10">
          <a
            href="/Grant Nilson Resume .pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}
