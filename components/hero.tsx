import React from 'react'

function Hero() {
  return (
    <section className='flex flex-col xl:flex-row p-10 ' >
    
        <div className=' xl:w-6/12 '>
            <section className='flex flex-col'>
<div className='text-6xl sm:text-7xl lg:text-9xl xl:text-8xl font-sans font-bold tracking-wide my-6 xl:my-2  '>
<span className='text-fuchsia-400 '>Everest </span>Base Camp
</div>
<div className='my-7 text-lg sm:text-sm tracking-wide font-light xl:my-10'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cupiditate accusantium a ea quam natus corrupti ullam facere nihil, unde provident placeat 
</div>
<div className='flex space-x-2 items-center my-6 w-full xl:my-10  '>


    <div className='flex sm:space-x-2'>
   <img className='' src="/star.svg" />
   <img className='' src="/star.svg" />
   <img className='' src="/star.svg" />
   <img className='' src="/star.svg" />
   <img  className='' src="/star.svg"/>
</div>


<div className='flex  items-baseline mt-1 tracking-wide '>
    <p className='font-bold text-sm sm:text-lg'>198k</p>
    <p className='font-normal text-sm mx-1'>Excellent </p>
    <p className='font-normal text-sm'>Reviews </p>
    </div>
    

</div>
<div className='flex flex-col sm:flex-row items-center sm:space-x-5  sm:h-20 sm:my-2 my-6 sm:w-4/6 '>

<div className=' w-full  '><button className=' border-2  duration-300 border-green-500 hover:bg-white w-full hover:text-green-500 p-4  rounded-full bg-green-500 font-medium text-2xl tracking-wide sm:p-0 sm:h-16 sm:w-full'> <p className=' font-medium sm:text-lg sm:font-bold sm:p- '>Download App</p>
    </button> </div>
<button className='flex p-2 bg-white dark:bg-black w-full justify-center my-2 items-center space-x-2 sm:space-x-1 hover:scale-105 duration-300  '>
   <img className='sm:w-7 xl:w-8' src="/play.svg"/>
    <p className=' font-semiboldw-full sm:text-lg sm:font-medium xl:text-xl xl:font-bold '>
        How we work?
    </p>
</button>
</div>

            </section>
        </div>

{/* -------------------------------------------------------- */}
<div className='xl:w-6/12 flex justify-center items-center  '>
    <div className='relative inset-0   '> 
    <img src="/camp.svg" className='absolute inset-0 z-10 top-12 xl:-top-6 xl:left-14 w-96 scale-50 sm:scale-75' />
    <div className='relative   h-72 w-80 sm:w-96 sm:h-96 bg-zinc-900 dark:bg-zinc-800 rounded-xl my-20 xl:my-3 xl:mx-14 shadow-xl shadow-black dark:shadow-zinc-900'>
<div className='p-6 text-lg flex flex-col justify-between  h-full rounded-lg'>
    <div className='flex justify-between items-start '>

        <div className='flex flex-col justify-center items-start space-y-1 '>
            
        <p className='font-sans  text-zinc-400'>Location</p>
        <p className='font-semibold tracking-wide text-white'>Mt.Everest</p>
        </div>
        
        <img src="/close.svg" />
    </div>
    <div className='flex justify-between'>
        <div className='flex flex-col justify-center items-start space-y-1 '>
            
            <p className='font-sans text-zinc-400'>Distance</p>
            <p className='font-semibold tracking-wide text-white'>18km</p>
            </div>
            <div className='flex flex-col justify-center items-start space-y-1 '>
            
            <p className='font-sans text-zinc-400'>Elevation</p>
            <p className='font-semibold tracking-wide text-white'>6.700km</p>
            </div>
            </div>
    
</div>
    </div></div>
   </div>
   

    </section>

    
  )
}

export default Hero