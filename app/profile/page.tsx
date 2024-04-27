"use client"
import Navbar2 from '@/components/Navbar2';
import { useSession } from 'next-auth/react';
import React from 'react'

export default function Profile() {
    const session = useSession();
  
  return (
    <div className="bg-white dark:bg-black relative inset-0 ">
    <div className="fixed w-full bg-white dark:bg-black z-50"><Navbar2></Navbar2></div>
  
  <div className="text-xl  pt-20 sm:pt-20 md:pt-14 lg:pt-10   xl:pt-16 flex justify-center items-center h-screen">
  <div className="overflow-hidden  ">
  <div className=' text-5xl sm:text-7xl lg:text-9xl  font-sans font-bold tracking-wide my-6 xl:my-2 h-full p-14 leading-snug '>
<span className='text-fuchsia-400 '>You are </span>{session.data?.user?.name} 
</div>
   
  </div>
  
  </div>
  </div>




  )
}
