'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import BrainSvg from '@/components/brainSvg'

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next',
  'TypeScript',
  'Redux',
  'ExpressJS',
  'Axios',
  'MongoDB',
  'PostgreSQL',
  'Git & GitHub',
  'Docker',
]

const jobs = [
  {
    role: 'Fullstack Developer',
    skills: 'JavaScript, Java, MySQL, git & Docker',
    desc: 'My focus was on developing, maintaining and troubleshooting cellular location systems.',
    duration: 'Jan 2024 - Present',
    company: 'MTRX, Rayzone Group',
  },
  {
    role: 'Military Officer',
    skills: 'React, Next, Redux, TypeScript',
    desc: "Took part in my unit's website development team. Experienced in leading, planning, training, and evaluating soldiers.",
    duration: 'Dec 2018 - Jun 2023',
    company: 'IDF',
  },
]

const About = () => {
  const containerRef = useRef(null)

  const skillRef = useRef(null)
  const experienceRef = useRef(null)

  const isSkillRefInView = useInView(skillRef, { margin: '-100px' })
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' })

  const { scrollYProgress } = useScroll({ container: containerRef })

  return (
    <motion.div
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
      className="h-full"
    >
      <div ref={containerRef} className="h-full overflow-scroll lg:flex">
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0">
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              My name is Ben, I am a fullstack developer specialized with designing, developing,
              and maintaining web applications. Dedicated to delivering
              high-quality solutions that enhance user experiences and drive
              business success.
            </p>
            <span className="italic">
              The bad news is time flies. The good news is you are the pilot.
              <p className="font-bold">— Michael Altshuler</p>
            </span>
            <div></div>
            <div className="self-end">
              <Image
                src="/signature.png"
                alt="Signature"
                width={300}
                height={100}
              />
            </div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div ref={skillRef} className="flex flex-col gap-12 justify-center">
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isSkillRefInView && { x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: '-300px' }}
              animate={isSkillRefInView && { x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white shadow-lg hover:bg-white hover:text-black transition duration-200"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div
            ref={experienceRef}
            className="flex flex-col gap-12 justify-center pb-48"
          >
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView && { x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            <motion.div
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView && { x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {jobs.map((job, index) => (
                <div key={job.desc} className="flex justify-between h-64">
                  <div className="w-1/3">
                    {index % 2 === 0 && (
                      <div>
                        <div className="bg-white p-3 font-semibold rounded-lg">
                          {job.role}
                        </div>
                        <div className="p-3 text-sm font-semibold">
                          {job.skills}
                        </div>
                        <div className="p-3 text-sm italic">{job.desc}</div>
                        <div className="p-3 text-red-400 text-sm font-semibold">
                          {job.duration}
                        </div>
                        <div className="bg-white p-1 rounded text-sm font-semibold w-fit">
                          {job.company}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-1/6 flex justify-center">
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                    </div>
                  </div>
                  <div className="w-1/3">
                    {index % 2 === 1 && (
                      <div>
                        <div className="bg-white p-3 font-semibold rounded-lg">
                          {job.role}
                        </div>
                        <div className="p-3 text-sm font-semibold">
                          {job.skills}
                        </div>
                        <div className="p-3 text-sm italic">{job.desc}</div>
                        <div className="p-3 text-red-400 text-sm font-semibold">
                          {job.duration}
                        </div>
                        <div className="bg-white p-1 rounded text-sm font-semibold w-fit">
                          {job.company}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/3 sticky top-0 z-30">
          <BrainSvg scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default About
