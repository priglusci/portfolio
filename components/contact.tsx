"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import {sendEmail} from "@/actions/sendEmail"
import SubmitBTN from './submit-btn'
import toast from 'react-hot-toast';
export default function Contact() {
  const { ref } = useSectionInView("Contact");
 

  return (
    <motion.section id="contact" ref={ref} className='mb-20 max-w-[45rem] text-center scroll-mt-[7rem]' initial={{
      opacity:0,
    }}
    whileInView={{
      opacity:1,
    }}
    transition={{
      duration:1,
    }}
    viewport={{
      once:true,
    }}
    >
    <SectionHeading>Contact Me</SectionHeading>
    <p className='text-gray-700 -mt-6 dark:text-white'>Please contact me directly at {" "}
    <a className='underline' href="https://mail.google.com/">rezkymndr@gmail.com</a>{" "}
    or through this form.
    </p>
    <form className='mt-10 flex flex-col'
    action={async formData => {
      const {data, error} = await sendEmail(formData);

      if (error){
        toast.error(error);
        return;
      }
      toast.success("Email sent succesfully!");

    }}
    >
      <input 
        className='h-14 rounded-lg borderBlack px-4 dark:bg-white/10 dark:text-white/60'
        name='senderEmail'
        type='email'
        placeholder='Your email'
        required maxLength={500}/>
      <textarea 
        className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white/10 dark:text-white/60'
        name='message' 
        placeholder='Your message' 
        required 
        maxLength={5000}/>
      <SubmitBTN />
    </form>
    </motion.section>
  )
}
