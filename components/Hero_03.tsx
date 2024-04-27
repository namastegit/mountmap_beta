import React from 'react'

export default function Hero_03() {
  return (
    <section className='flex flex-col'>
        <div className='flex flex-col xl:justify-between xl:flex-row xl:w-12/12  p-6 xl:p-10 '>
<div className='xl:w-5/12 xl:pl-28 '>
    <img src="/camp.svg" className='w-10' />
<div className='flex flex-col'>
    <div className='text-green-600 text-lg'>WE ARE HERE FOR YOU</div>
    <div className='text-4xl font-sans font-bold py-2 xl:text-7xl'>Guide You to Easy Path </div>
</div>
</div>
<div className='text-lg font-light font-sans py-3 xl:w-4/12 xl:pr-20 xl:text-xl xl:font-extralight'>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam molestias aut veritatis optio iure beatae nam, vel dolores cupiditate minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas doloremque nam esse at placeat, explicabo cum fugiat dicta ab dolor. 
</div>
        </div>

        {/* ---------------------------------------- */}


        <div className='relative inset-0  w-full h-54 sm:h-full py-20'>
            
            <img src="/boat.png
            " alt="" className=''/>
                <div className='absolute inset-0 z-10  h-full  sm:w-full bg-transparent flex  justify-center items-center sm:justify-start sm:items-start sm:top-[20%] sm:pl-20 bg-none '>
                <div className='flex space-x-2   rounded-2xl bg-zinc-800 text-white py-6 w-72  sm:w-80
                '>
                    <div className='pl-4'>
                     <img src="/meter.svg" alt="" className='h-48 shrink-0 w-10 ' />
                </div>
                <div className='flex flex-col justify-between items-start  h-[180px]  '>
                
                    <div className='flex flex-col space-y-1 '>
                        <div className='flex justify-start items-center w-60'>
                        <p className='text-sm text-gray-300'>Destination</p>
                    <p className='text-green-500 text-lg font-sans font-semibold ml-20'> 48min</p></div>
                    
                    <div className='font-bold'>
                    Mount Everest, Nepal
                </div>
                </div>
                 
                    <div className='flex flex-col items-start '>
                        <p className='text-sm text-gray-300'>Start Track</p>
                        <p className='font-bold '>Everest</p>
                    </div>

                </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}
