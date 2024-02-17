'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import NavLink from './navLink'

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/projects', title: 'Projects' },
  { url: '/contact', title: 'Contact' },
]

const menuTopVariant = {
  closed: { rotate: 0 },
  opened: { rotate: 45, backgroundColor: 'rgb(255,255,255)' },
}

const menuCenterVariant = {
  closed: { opacity: 1 },
  opened: { opacity: 0 },
}

const menuBottomVariant = {
  closed: { rotate: 0 },
  opened: { rotate: -45, backgroundColor: 'rgb(255,255,255)' },
}

const listVariant = {
  closed: { x: '100vw' },
  opened: {
    x: 0,
    transition: { when: 'beforeChildren', staggerChildren: 0.2 },
  },
}

const listItemVariant = {
  closed: { x: -10, opacity: 0 },
  opened: { x: 0, opacity: 1 },
}

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl bg-blue-100">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.url} />
        ))}
      </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center hover:shadow-2xl transition duration-200"
          href="/"
        >
          <span className="text-white mr-1">Ben</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            <Image src='/logo.png' alt='Logo' width={25} height={25} />
          </span>
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-center' gap-4 w-1/3">
        <Link href="https://github.com/benroz3" className='hover:shadow-2xl transition duration-200'>
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/ben-rozen" className='hover:shadow-2xl transition duration-200'>
          <Image src="/linkedin.png" alt="Linkedin" width={24} height={24} />
        </Link>
        <a
          className="relative inline-block group"
          href="/Ben_Rozen_Resume.pdf"
          download={true}
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">
              <div className="flex flex-row">
                <span>Resume</span>
                <Image src="/pdf.png" alt="PDF Icon" width={20} height={20} />
              </div>
            </span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={menuTopVariant}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={menuCenterVariant}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={menuBottomVariant}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariant}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariant}
                key={link.url}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar
