"use client";
import React from 'react'
import{motion} from "framer-motion"
export default function SectionDivider() {
  return (
    <motion.div className='bg-gray-200 my-24 h-1 w-[20rem] rounded-full hidden sm:block dark:bg-white/10'
    initial={{scale:0}}
    animate={{scale:1}}
    ></motion.div>
  )
}
