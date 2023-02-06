import React from "react";
import { motion } from "framer-motion";
import FirstExperienceCard from "./ExperienceCards/FirstExperienceCard";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <>
      <div>
        <h3 className="top-24 text-center uppercase tracking-[20px] text-gray-500 text-2xl shrink">
          Experience
        </h3>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col relative text-center md:left-text md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center space-y-4 shrink"
        >
          <div className="w-full top-24 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            {experiences?.map((experience) => (
              <FirstExperienceCard
                key={experience._id}
                experience={experience}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default WorkExperience;
