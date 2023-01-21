import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Workexperience from '@/components/Workexperience'
import Head from 'next/head'

export default function Home() {
  return (
    <div className='bg-black
   h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>BerkanBasaran portfolio</title>
       
      </Head>
      {/*Header side */}
      <Header/>

      {/* Hero side */}
      <section id='hero' className='snap-start'>
        <Hero/>
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
      
    </div>
  )
}
