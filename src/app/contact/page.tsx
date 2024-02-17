'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FadeLoader } from 'react-spinners'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isValidMessage, setIsValidMessage] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')

  const formRef = useRef<HTMLFormElement | null>(null)

  const text = "let's Talk!"
  let errorMessage = 'Something Went Wrong!'

  const validateMessageAndEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const isEmailValid = emailRegex.test(email)
    const isMessageValid = message !== ''

    setIsValidMessage(isEmailValid && isMessageValid)
  }

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)
    setError(false)
    setIsMessageSent(false)

    try {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formRef.current || '',
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setLoading(false)
      setIsMessageSent(true)
      formRef?.current?.reset()
    } catch (error: any) {
      console.log(error)
      if (error.message) errorMessage = error.message

      setLoading(false)
      setError(false)
    }
  }

  return (
    <motion.div
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
      className="h-full"
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/3 md:h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl italic">
          {text.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="h-2/3 md:h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Ben,</span>
          <textarea
            rows={6}
            name="user_message"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            onChange={(event) => {
              setMessage(event.target.value)
              validateMessageAndEmail()
            }}
          />
          <span>E-mail address:</span>
          <input
            type="text"
            name="user_email"
            className="bg-transparent border-b-2 border-b-black outline-none"
            onChange={(event) => {
              setEmail(event.target.value)
              validateMessageAndEmail()
            }}
          />
          <span>Warm Regards!</span>
          <button
            type="submit"
            disabled={!isValidMessage}
            className="disabled:opacity-50 disabled:cursor-not-allowed relative inline-flex items-center justify-center p-2 px-6 py-3 overflow-hidden font-medium text-violet-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Send
            </span>
            <span className="relative invisible">Send</span>
          </button>
          {loading && <FadeLoader color="#8c36d6" className="self-center" />}
          {isMessageSent && (
            <span className="text-green-400 font-semibold text-sm self-center">
              Message sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-400 font-semibold text-sm self-center">
              {errorMessage}
            </span>
          )}
        </form>
      </div>
    </motion.div>
  )
}

export default Contact
