import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7  flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]'>
        <motion.img
        initial={{
            y:-100,
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
            y:0,
        }}
        transition={{
            duration: 1.2,
        }}
        viewport={{
            once: true,
        }}
        className='w-32 h-32 rounded-full xl:w-[200px] object-cover object-center'
        src="https://sdk.bitmoji.com/render/panel/20054902-99143891879_5-s5-v1.png?transparent=1&palette=1&scale=2"
        alt =""
        >    
        </motion.img>
        <div>
            <h4 className='text-4xl font-light'>Software Developer</h4>
            <p className='font-bold text-2xl mt-1'>Celera Inc.</p>
            <div className='flex space-x-2 my-2'>
                {/* tech used */}
                <img
                className='h-10 w-10 rounded-full'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
                alt=''
                ></img>
                {/* tech used */}
                <img
                className='h-10 w-10 rounded-full'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                alt=''
                ></img>
                {/* tech used */}
                <img 
                className='h-10 w-10 rounded-full'
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt=''
                ></img>
                {/* tech used */}
                <img 
                className='h-10 w-10'
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt=''>
                </img>


            </div>
            <p className='uppercase py-5 text-gray'> started - ended </p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary of Experience</li>
                <li>Summary of Experience</li>
                <li>Summary of Experience</li>
                <li>Summary of Experience</li>
                <li>Summary of Experience</li>
            </ul>
        </div>
    </article>
  )
}