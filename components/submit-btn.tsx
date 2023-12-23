import React from 'react'
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBTN() { 
    const {pending} = useFormStatus();
  return (
    <button 
      className='group flex items-center justify-center gap-2 mx-auto h-[3rem] w-[8rem] bg-[#1f1f1f] text-white rounded-full outline-none transition-all focus:scale-110 hovewr:scale-110 active:scale-105 hover:bg-[#111111] disabled:scale-100 disabled:bg-opacity-75 dark:bg-white/10 dark:text-white'
      type='submit'
      disabled={pending}>
        {
            pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div> : (
                <>
                Submit{" "}
                <FaPaperPlane 
                className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"/>{" "}
                </>
            )
        }
    </button>
  )
}

    
    