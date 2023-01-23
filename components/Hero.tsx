import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '@/components/BackgroundCircles'
import { motion } from 'framer-motion'
import pic from '@/assets/biometri.png'
import Link from 'next/link'
import ParallaxText from './ParallaxText'

type Props = {}

export default function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words:["<Hi,I'm Berkan/>","<Im full-stack developer/>","<Lets get work together?/>"],
        loop:true,
        delaySpeed:2000,
        typeSpeed:200,
        
    })
  return (
    <motion.div
    initial={{
        opacity:0,
        y:-200,
    }}
    animate={{
        y:[0,50,100,0],
        opacity:1
    }}
    transition={{
        duration:2.5
    }}
    // animation finished
    className='h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden'>
         <BackgroundCircles/>
         <img src="https://avatars.githubusercontent.com/u/77754197?v=4" className=' relative rounded-full h-32 mx-auto object-cover'></img>
         {/* Text side  */}
         <div className='z-20'>
         <h2 className='uppercase pb-2 text-white opacity-25 tracking-[15px]'>software developer</h2>  
         <h1 className='text-5xl lg:text-3xl text-white mt-4 font-semibold scroll-px-10'> <span>{text}</span> <Cursor cursorColor='white'/> </h1>
         
         {/* about ,experience,skills vs.. buttons */}
         <div className='pt-5'>
         <Link
          href="#about">
         <button className='heroButton'>About</button> </Link>
         <Link
          href="#experience">
         <button className='heroButton'>Experience</button> </Link>
         <Link
          href="#skills">
         <button className='heroButton'>Skills</button> </Link>
         <Link
          href="#projects">
         <button className='heroButton'>Projects</button> </Link>

         </div>
        

         </div>  
    </motion.div>

  ) 
}