import Navbar from '@/components/Navbar'
import React from 'react'

export default function LandingPage() {
  return <div className="bg-white dark:w-full dark:bg-black relative inset-0 ">
  <div className="fixed w-full bg-white dark:bg-black z-50"><Navbar></Navbar></div>

<div className=" text-xl  pt-2 sm:pt-20 md:pt-14 lg:pt-10 w-full   xl:pt-16 flex justify-center items-start ">
<div className="overflow-hidden w-full p-8 flex flex-col justify-center items-center  lg:h-screen lg:justify-end  ">
<div className=' text-5xl sm:text-7xl lg:text-9xl  font-sans font-bold tracking-wide my-6 xl:my-2 h-full lg:pt-20  leading-snug '>
<span className='text-fuchsia-400 '>Tech Used  </span>
</div>
  <div className=' w-full flex flex-col lg:flex-row md:space-x-6'>
    
 <div className='w-full h-96  rounded-2xl shadow-xl dark:shadow-md dark:shadow-white flex  flex-col space-y-2 justify-center items-center p-2 my-6 lg:w-4/12 ' >

  <p className='bg-green-500 dark:border-zinc-300 p-4 mb-8  border-2 rounded-2xl text-2xl font-semibold'>Frontend</p>
  <p className='border-2 border-zinc-300  rounded-full w-full h-10 dark:border-green-500 flex justify-center items-center font-light font '> NEXT.JS
    
  </p>
  <p className='border-2 border-zinc-300 rounded-full w-full h-10 dark:border-green-500 flex justify-center items-center font-light font '> TYPESCRIPT
    
    </p>
    <p className='border-2 border-zinc-300 rounded-full w-full h-10 dark:border-green-500 flex justify-center items-center font-light font '> TAILWIND CSS
    
    </p>
    <p className='border-2 border-zinc-300 rounded-full w-full h-10 dark:border-green-500 flex justify-center items-center font-light font '> ALPINE JS
    
    </p>
  </div>
  
 <div className='w-full h-96  rounded-2xl shadow-xl dark:shadow-md dark:shadow-white flex  flex-col space-y-2 justify-center items-center p-2 my-6 lg:w-4/12 ' >
  <p className='bg-green-500 dark:border-zinc-300 p-4 mb-8  border-2 rounded-2xl text-2xl font-semibold'>Backend</p>
  <p className='border-2 rounded-full w-full h-10 border-zinc-300 dark:border-green-600 flex justify-center items-center font-light '> NEXT.JS BACKEND
    
  </p>
  <p className='border-2 rounded-full w-full h-10 border-zinc-300  dark:border-green-600  flex justify-center items-center font-light font '> NEXT AUTH
    
    </p>
    <p className='border-2 rounded-full w-full h-10 border-zinc-300 dark:border-green-600 flex justify-center items-center font-light font '> BCRYPT PASSWORD
    
    </p>
  <p className='border-2 rounded-full w-full h-10 border-zinc-300  dark:border-green-600 flex justify-center items-center font-light font '> TYPESCRIPT
    
    </p>
    <p className='border-2 rounded-full w-full h-10 border-zinc-300 dark:border-green-600 flex justify-center items-center font-light font '> POSTGRESS- NEON DB
    
    </p>
    <p className='border-2 rounded-full w-full h-10 border-zinc-300  dark:border-green-600 flex justify-center items-center font-light font '> PRISMA ORM
    
    </p>
  </div>
  
  
 <div className='w-full h-96  rounded-2xl shadow-xl dark:shadow-md dark:shadow-white flex  flex-col space-y-2 justify-center items-center p-2 my-6 lg:w-4/12 ' >
  <p className='bg-green-500 dark:border-zinc-300 p-4 mb-8  border-2 rounded-2xl text-2xl font-semibold'>DEPLOYMENT</p>
  <p className='border-2 border-zinc-300 rounded-full w-full h-10 dark:border-green-500 flex justify-center items-center font-light font '> AWS -EC2 SERVER
    
  </p>
  <p className='border-2 border-zinc-300 rounded-full w-full h-10 dark:border-green-500 flex justify-center items-center font-light font '> DOCKER 
    
    </p>
    <p className='border-2 border-zinc-300 rounded-full w-full h-10 dark:border-green-500 flex justify-center items-center font-light font '> GITHUB ACTIONS
    
    </p>
    <p className='border-2 border-zinc-300 rounded-full w-full h-10 dark:border-green-500 flex justify-center items-center font-light font '> CI/CD PIPELINE
    
    </p>
  </div>
  
  

    <div>

    </div>
    
    </div> 
 
</div>

</div>
</div>
}
