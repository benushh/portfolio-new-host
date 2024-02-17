'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Home = () => {
  return (
    <motion.div
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
      className="h-full"
    >
      <div className="h-full overflow-scroll flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl pb-4">
        <div className="flex items-center justify-center">
          <div className="mr-8 mb-8 bg-gradient-to-t from-blue-200 to-red-200 rounded-xl flex justify-center p-6">
            <Image
              src="/ben.jpg"
              alt="Ben"
              width={300}
              height={450}
              className="object-contain"
            />
          </div>
        </div>
        <div className="md:h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center p-8">
          <h1 className="text-4xl md:text-6xl font-bold">
            A Fullstack Developer, Building Dreams in Code.
          </h1>
          <p className="md:text-xl">
            As a dedicated fullstack developer, I have woven together elegant
            frontend designs and powerful backend solutions. Each project is a
            chapter in my ongoing adventure of never-ending learning.
          </p>
          <div className="w-full flex gap-4">
            <Link
              href="/projects"
              className="relative inline-block text-lg group"
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">View My Work</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </Link>
            <Link
              href="/contact"
              className="relative inline-block text-lg group"
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Contact Me</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
