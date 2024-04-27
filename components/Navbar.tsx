'use client'

import { use, useEffect, useState } from "react"
import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import { signIn, signOut, useSession } from "next-auth/react"
import { redirect, useRouter } from "next/navigation"

function Navbar() {
    const router = useRouter();
    const session = useSession();
    console.log(session);
    const [isOpen, setIsOpen] = useState(false);
     
    const scrollYY = useScrollPosition();

console.log(scrollYY);
    function toggel() {
       setIsOpen(!isOpen);
    }

    useEffect(() => {
       const handleResize = () => {
           if (window.innerWidth > 768) {
               setIsOpen(false);
           }
       };

       // Call once to set initial state correctly
       handleResize();

       // Add event listener for window resize
       window.addEventListener('resize', handleResize);

       // Cleanup function to remove the event listener
       return () => {
           window.removeEventListener('resize', handleResize);
       };
   }, []);
  return (
    <header className="relative inset-0  ">
         <nav className='antialiased container flex justify-between items-center p-2 mx-auto'>
            <div className="order-1 lg:order-1"><a href=""  className='flex justify-between items-center '>
    <div className='mr-2'>
<img src="/camp.svg" alt="" className=' w-6 md:w-9 xl:w-20 xl:pt-1 '/>
    </div>
    <div className=' text-xl md:text-4xl xl:text-5xl font-sans font-bold '>
        m<span className='text-green-600'>ount</span>map<span className='text-green-600 base'>.</span>
    </div>
 
</a></div>





<div className='flex  justify-end items-center space-x-2  w-5/12 lg:w-2/12 lg:justify-between  left-0 order-2 lg:order-3 md:space-x-4'>
    <ThemeSwitch></ThemeSwitch>
    {session.data !== null ? <button className='bg-black flex justify-center items-center  h-8 xl:h-12 xl:w-full text-[8px]  md:h-10 text-white rounded-full md:text-xl md:font-normal p-2 md:p-2 w-3/6 sm:w-2/6 md:w-3/6 lg:w-4/6 xl:scale-110 dark:text-black dark:bg-white hover:bg-green-600 dark:hover:bg-green-600' onClick={() => {
  router.push("/profile")

   
}}><div>User</div> </button> : <button className='bg-black flex justify-center items-center  h-8 xl:h-12 xl:w-full text-[8px]  md:h-10 text-white rounded-full md:text-xl md:font-normal p-2 md:p-2 w-3/6 sm:w-2/6 md:w-3/6 lg:w-4/6 xl:scale-110 dark:text-black dark:bg-white hover:bg-green-600 dark:hover:bg-green-600' onClick={() => {
    signIn();
 }}><div>Join Now</div> </button>}

</div>

<nav className="order-3 lg:order-2  lg:w-7/12 xl:w-8/12 ">
    

<button onClick={toggel} className="lg:hidden">
                {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={` w-7 h-7 md:w-10 md:h-10 duration-200 flex-grow-0 outline-none`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg> :   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-10 h-7 duration-200 md:w-8 md:h-10  flex-grow-0 outline-none`}>
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
}
          
       </button>
       
       <ul className={`fixed left-0 right-0 min-h-full    text-center mt-2  p-8 lg:mt-0 flex flex-col space-y-6  lg:bg-none lg:flex-row lg:space-x-6 lg:justify-end lg:p-5   transform transition text-black  lg:-translate-x-0  dark:text-white text-xl xl:text-2xl lg:text-sm    font-medium   lg:space-y-0  lg:min-h-0 lg:flex lg:relative  lg:opacity-100 lg:items-center ${isOpen ? "translate-x-0 duration-300 bg-white dark:bg-black ": "translate-x-full  duration-700 max-h-14 opacity-0"}`}>
        
      <a href="" className="hover:font-bold duration-200 tracking-wide hover:tracking-normal">Home</a>
      <a href="" className="hover:font-bold duration-200 tracking-wide hover:tracking-normal"> Working</a>
      <a href="" className="hover:font-bold duration-200 tracking-wide hover:tracking-normal">Services</a>
      <a href="" className="hover:font-bold duration-200 tracking-wide hover:tracking-normal">Pricing</a>
      <a href="" className="hover:font-bold duration-200 tracking-wide hover:tracking-normal">Contact Us</a>

    </ul>
</nav>


    </nav>
    </header>
   
  )
}


const useScrollPosition = () => {
    // State to store the scroll position
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Get the current scroll position
            const currentScrollY = window.scrollY;

            // Update scroll position in state
            setScrollPosition(currentScrollY);

            // Output the scroll position to console
            console.log(window.scrollY);
        };

        // Add scroll event listener to window
        window.addEventListener('scroll', handleScroll);

        handleScroll(); // this added so statr persist fter refresh also

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // The empty array ensures the effect runs only on mount and unmount

    return scrollPosition;
};

export default Navbar