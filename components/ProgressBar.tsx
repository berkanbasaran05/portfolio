import React from 'react'
import { motion, useScroll } from 'framer-motion'

type Props = {}

function ProgressBar({}: Props) {
    const { scrollYProgress} = useScroll();
  return (
    <motion.div
    className="progress-bar"
    style={{ scaleX: scrollYProgress }}
  />
  )
}

export default ProgressBar