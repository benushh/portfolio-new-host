'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const personalProjects = [
  {
    color: 'from-red-300 to-blue-300',
    title: 'E-Commerce Clothes Shop',
    desc: 'Clothes E-Commerce Fullstack app using Next (as a fullstack framework), TypeScript, Redux Toolkit, TailwindCSS, MongoDB, Firebase & Stripe.',
    img: '/projects/ecom.png',
    link: 'https://github.com/benroz3/e-commerce-clothes',
  },
  {
    color: 'from-blue-300 to-violet-300',
    title: 'Netflix Clone',
    desc: 'Netflix clone Fullstack application (with an Admin Dashboard) using React, TypeScript, Redux Toolkit, ExpressJS, Firebase & MongoDB.',
    img: '/projects/netflix.png',
    link: 'https://github.com/benroz3/netflix',
  },
  {
    color: 'from-violet-300 to-purple-300',
    title: 'Fiverr Clone',
    desc: 'Fiverr clone Fullstack application using React, TypeScript, Redux Toolkit, ExpressJS, MongoDB & Stripe.',
    img: '/projects/fiverr.png',
    link: 'https://github.com/benroz3/fiverr',
  },
  {
    color: 'from-purple-300 to-green-300',
    title: 'Online Coding Room',
    desc: 'Online Coding Room for a teacher and a student as a Fullstack application using React, TypeScript, Redux Toolkit, ExpressJS, MongoDB & Socket.io.',
    img: '/projects/coder.png',
    link: 'https://main--candid-beijinho-70d59d.netlify.app/',
  },
  {
    color: 'from-green-300 to-orange-300',
    title: 'AI Summarizer',
    desc: 'AI Summarizer for summarizing articles with the power of AI as a front-end oriented app using React, TypeScript, Redux Toolkit, TailwindCSS, Vite & RapidAPI.',
    img: '/projects/aisummarizer.png',
    link: 'https://main--sensational-frangollo-35d930.netlify.app/',
  },
  {
    color: 'from-orange-300 to-yellow-300',
    title: 'Anime Vault',
    desc: 'Anime Vault Front-end oriented app using NextJS, TypeScript, TailwindCSS & Framer Motion.',
    img: '/projects/animeVault.png',
    link: 'https://epic-anime-vault.netlify.app/',
  },
  {
    color: 'from-yellow-300 to-red-300',
    title: 'Attack on Eggs',
    desc: 'Attack on Eggs browser game using JavaScript, HTML and CSS.',
    img: '/projects/attackOnEggs.png',
    link: 'https://attack-on-eggs.netlify.app/',
  },
]

const Projects = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({ target: ref })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
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
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {personalProjects.map((project) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color}`}
                key={project.desc}
              >
                <div className="flex flex-col gap-6 mt-10">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl text-black">
                    {project.title}
                  </h1>
                  <div className="relative w-80 h-[150px] md:w-[350px] md:h-[200px] lg:w-[533.33px] lg:h-[300px] xl:w-[640px] xl:h-[360px]">
                    <Image src={project.img} alt="ProjectImage" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] italic text-gray-700">
                    {project.desc}
                  </p>
                  <Link
                    href={project.link}
                    className="relative inline-block px-4 py-2 font-medium group w-[150px]"
                  >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black duration-100"></span>
                    <span className="relative text-black group-hover:text-white">
                      Demo Link
                    </span>
                  </Link>
                </div>
              </div>
            ))}
            <div className="h-screen w-[800px] flex items-center justify-center bg-gradient-to-r from-red-300 to-blu-300" />
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Fullstack Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className=" text-sm md:text-lg w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
