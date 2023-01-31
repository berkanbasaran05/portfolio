import { motion } from 'framer-motion'
import React from 'react'
import SkillElement from './SkillElement'


type Props = {}

function Skills({}: Props) {
  return (
    <motion.div className='flex relative flex-col items-center mx-auto p-10
     md:text-center xl:flew-row max-w-[2000px] xl:px-10 
     min-h-screen justify-center xl:space-y-0 h-screen'>
        <h3 className='absolute top-24 uppercase tracking-[20px]
         text-white opacity-25  text-2xl'> Skills</h3>

         <h3 className='absolute top-36 uppercase tracking-[3px] text-white opacity-25 text-xs'>
         skills I am proficient in 
         </h3>


         <motion.div
         
            initial={{ opacity:0,scale:0.5}}
            whileInView={{y:0,opacity:1,scale:1}}
            transition={{duration:2}}
            className=' grid grid-cols-4 gap-3'>
            
            <SkillElement percentage={60} photo='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'/>
            <SkillElement percentage={55} photo='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'/>
            <SkillElement percentage={70} photo='https://www.datocms-assets.com/45470/1631110818-logo-react-js.png'/>
            <SkillElement percentage={50} photo='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png'/>
            <SkillElement percentage={60} photo='https://www.bairesdev.com/wp-content/uploads/2021/07/Expressjs.svg'/>
            <SkillElement percentage={45} photo='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png'/>
            <SkillElement percentage={70} photo='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png'/>
            <SkillElement percentage={90} photo='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'/>
            <SkillElement percentage={65} photo='https://g.foolcdn.com/art/companylogos/square/mdb.png'/>
            <SkillElement percentage={75} photo='https://ysoftaoglu.com/static/cee335ed9d00dd31a2b6fad3cae93029/aa4a2/tailwind-css-nedir.png'/>
            <SkillElement percentage={55} photo='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png'/>
            
            <SkillElement percentage={45} photo='https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png'/>
            <SkillElement percentage={45} photo='https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_251be2af3ae607c45c14e816eaa1cf41/postgresql.png' />
            <SkillElement percentage={65} photo='https://ih1.redbubble.net/image.1057190283.1918/raf,750x1000,075,t,FFFFFF:97ab1c12de.u1.jpg'/>
            
            

         </motion.div>
         
      
        
        
        
    </motion.div>
  )
}

export default Skills