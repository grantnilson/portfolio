import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute invisible md:visible top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex over overflow-x-scroll overflow-y-hidden snap-x snap snap-mandatory z-20 
        scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-center space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              src="https://sdk.bitmoji.com/render/panel/10141213-99143891879_5-s5-v1.png?transparent=1&palette=1"
              alt=""
            />
            <div className="text-4xl font-semibold text-center">
              <h4>
                <span className="underline decoration-[#f7ab0a]/50">
                  Project {i + 1} of {projects.length} : Project Name{" "}
                </span>
              </h4>
              <p className="text-lg text-center md:text-left">
                {" "}
                project description{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
