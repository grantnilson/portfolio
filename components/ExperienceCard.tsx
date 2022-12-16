import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40">
        <div
        className="px-0 md:px-10 "
        >
            <h4
            className="text-4xl font-light"
            >Software Developer Intern </h4>
            <p
            className="font-bold text-2xl mt-1"
            > Celera, Inc. </p>
            <div
            className="flex space-x-2 my-2 "
            >
                {/* tech used  */}
                <img 
                className="h-10 w-10 rounded-full"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                {/* tech used  */}
                <img 
                className="h-10 w-10 rounded-full"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                {/* tech used  */}
                <img 
                className="h-10 w-10 rounded-full"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            </div>
            <p className="uppercase py-5 text-gray-300"> started - ended </p>
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