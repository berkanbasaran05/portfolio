import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ParallaxText from '@/components/ParallaxText'
import ProgressBar from '@/components/ProgressBar'
import Projects from '@/components/Projects'
import Scrollintest from '@/components/Scrollintest'
import Skills from '@/components/Skills'
import Workexperience from '@/components/Workexperience'
import Head from 'next/head'

{/** snap-mandatory */}
export default function Home() {
  return (
    <div className='bg-black
   h-screen snap-y overflow-scroll z-0'>
      <Head>
        <title>BerkanBasaran portfolio</title>
       
      </Head>

     
      {/*Header side */}
      <Header/>

      {/* Hero side */}
      <section id='hero' className='snap-start'>
      
        <Hero/>
      </section>

     {/** parallax text */}
     

     <section className='parallaxsection'>
     <ParallaxText  baseVelocity={5}> Im Full Stack Developer...</ParallaxText>
     <ParallaxText baseVelocity={-5}> Work with Me</ParallaxText>
      </section>

      
      

      {/* About side */}
      <section id='about' className='snap-center'>
       
        <About/>

      </section>

      {/* Experience side */}
      <section id='experience' className='snap-center'> 
      <Workexperience/>

      </section>

      {/* Skills side */}
      <section id='skills' className='snap-start'>
        <Skills/>


      </section>

      {/* Projects side */}
      <section id='projects' className='snap-start'>
        <Projects/>

      </section>

      {/* Contact side */}

      <section id='contactme' className='snap-start'>
        <ContactMe/>
      </section>
      {/* Footer side */}
      <section id='footer' className='snap-center'>
        <Footer/>
      </section>

      <section className='snap-center'> </section>
      
    </div>
  )
}




