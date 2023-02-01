import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function FirstExperienceCard({}: Props) {
  return (
    <article className="flex flex-col h-flex rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40">
      <div className="top-10">
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-32 h-32 relative xl:w-[200px] xl:h-[200px] rounded-full object-contain object-center"
          src="https://sdk.bitmoji.com/render/panel/20054902-99143891879_5-s5-v1.png?transparent=1&palette=1"
        />
      </div>
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">Software Developer Intern </h4>
        <p className="font-bold text-2xl mt-1"> Celera, Inc. </p>
        <div className="flex space-x-2 my-2 ">
          {/* tech used  */}
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
          />
          {/* tech used  */}
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />
          {/* tech used  */}
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          {" "}
          Started May, 2022 - Ended December, 2022
        </p>
        <ul className="list-disc space-y-4 ml-5 ">
          <li>summary </li>
          <li>summary </li>
          <li>summary </li>
          <li>summary </li>
          <li>summary </li>
        </ul>
      </div>
    </article>
  );
}
