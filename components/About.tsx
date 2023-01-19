import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import mypic from '../assets/bbpp.jpeg'
import { useTypewriter } from 'react-simple-typewriter'

type Props = {}

const About = (props: Props) => {
  const [text,count] = useTypewriter({
    words:["<Who am I?>"],
    delaySpeed:2000,
    loop:true,

  })
  return (
    
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}} 
    
    
    className='flex flex-col relative h-screen text-center md:text-left md:flex-col 
    max-w-7xl px-10  justify-evenly mx-auto items-center'
    >
    <h3 className=' top-24 mt-8 xl:mb-6 items-center text-white opacity-25 uppercase tracking-[20px] text-2xl '>
      About Me</h3>
    
    
    
    <motion.img
    initial={{
        x:-200,
        
    }}
   transition={{
    duration:1.2
   }}
    whileInView={{ x:0}}
    viewport={{once: true}}
    src="https://www.linkpicture.com/q/1673025977937.jpeg"
    className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-xl object-cover md:rounded-full md:w-96 md:h-96 xl:rounded-full xl:w-[400px] xl:h-[400px]'

    />

   <div className='space-y-10 px-0 md:px-10 md:flex-row'>
    <div><h4 className='text-4xl text-white opacity-70 font-semibold md:mb-10 mt-10'>
      {text}
    </h4></div>
    <p className='text-base text-white overflow-scroll text-m '>
    As a 23-year-old software developer, my name is berkan, I was born in Amasya and graduated from high school there, then completed my university education in Istanbul. Among the technologies that I am proficient in software field are Next.js, React.js, Nest.js, Express.js, HTML, CSS, Flutter, PHP, JavaScript, TypeScript, Node.js and Tailwind CSS. I am constantly striving to improve myself and learn new technologies. With the technologies that I use in professional projects, I am able to develop robust and flexible web applications.

    
    </p>
   </div>
   
    </motion.div>
    
  )
}

export default About