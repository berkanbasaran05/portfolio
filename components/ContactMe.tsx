import React from 'react'
import { BeakerIcon, EnvelopeIcon, MapIcon, MinusSmallIcon, PhoneArrowDownLeftIcon } from '@heroicons/react/24/solid'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'


type Props = {}

function ContactMe({}: Props) {

    const [text,count]= useTypewriter({
        words:["If you still are interested in me"],
        loop:true
    })
  return (
    <div className='h-screen flex relatice flex-col text-white
     sm:max-w-xs text-xs
     text-center md:text-left md:flex-col max-w-xs px-10 justify-evenly mx-auto items-center'>
        <h3  className='top-24 uppercase tracking-[20px] text-white opacity-25 text-2xl'> Contact Me</h3>

      {/* Contact me form side */}

      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:2}}

      className='flex flex-col space-y-10'>
        <h4 className='text-2xl text-center text-white '>
            {text}<Cursor/> {""}
            <span className='text-white opacity-25 text-l '>Lets contact me </span>
        </h4>

      <div className='space-y-10 '>

        <div className='flex items-center space-x-5 justify-center'>
            <PhoneArrowDownLeftIcon className='h-7 w-7 animate-pulse'/>
            <p>+905455194205</p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='h-7 w-7 animate-pulse'/>
            <p>berkanbasaran05@gmail.com</p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
            <MapIcon className='h-7 w-7 animate-pulse'/>
            <p className='uppercase'>Istanbul/Turkey</p>
        </div>

        <form className='flex flex-col space-y-2  mx-auto sm:max-w-xl'>
            <div className='flex space-x-2'> 
            <input className='contactInput' placeholder='Name' type="text"/>
            <input className='contactInput' placeholder='Lastname' type="text"/>
            </div>

            <input className='contactInput' placeholder='Subject' type="text"/>
            <textarea className='contactInput' placeholder='Describe..'/>
            <button className='submitButton'> Submit</button>

        </form>







      </div>


        </motion.div>  
      

     </div>
  )
}

export default ContactMe