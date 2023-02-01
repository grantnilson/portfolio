import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  experience: Experience;
};

export default function FirstExperienceCard({ experience }: Props) {
  const companyURL = experience?.companyImage;
  return (
    <article className="flex flex-col h-flex rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40">
      <div className="top-10">
        {experience?.companyImage && (
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="w-32 h-32 relative xl:w-[200px] xl:h-[200px] rounded-full object-contain object-center"
            src={urlFor(companyURL).url()}
          />
        )}
      </div>
      <div className="px-0 md:px-10 ">
        <h4 className="text-4xl font-light">{experience?.jobTitle} </h4>
        <p className="font-bold text-2xl mt-1"> {experience?.company} </p>
        <div className="flex space-x-2 my-2 "></div>
        <p className="uppercase py-5 text-gray-300">
          {" "}
          {experience?.dateStarted} - {experience?.dateEnded}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg -96 overflow-y-scroll">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
