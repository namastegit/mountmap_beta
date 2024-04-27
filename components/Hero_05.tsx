import React from 'react';


export default function Hero_05() {
  return (
    <section className='flex flex-col sm:flex-row sm:w-12/12 justify-between p-8 ' style={{ backgroundImage: `url(/pattern.png)`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
      <div className='sm:w-8/12 md:w-6/12 lg:w-6/12 flex justify-center items-center p'>
        <div className=''>
            <p className=' text-5xl lg:text-7xl font-bold font-sans text-white pl-10'>Get for free now!</p>
            <p className='text-2xl text-white font-sans pl-12 py-10'>Available on iOS and Android</p>
            <button className='flex justify-center  items-center w-5/6 mx-auto bg-white p-3 text-green-600 rounded-full my-4 '>
                <img src="/apple.svg" alt="" />
                <p>App Store</p>
            </button>
            <button className='flex justify-center  items-center w-5/6 mx-auto  border-2 p-3 text-green-600 rounded-full my-4 '>
                <img src="/android.svg" alt="" />
                <p>Play Store</p>
            </button>
        </div>
      </div>
      <div className='p-4'>
        <img src="/phones.png" alt="" />
      </div>
      {/* <div className='text-white text-sm sm:hidden font-extralight '>*This Page UI is copied from  - <a className='text-blue-600 underline' href="https://travel-website-ashy-nine.vercel.app/">Link</a></div> */}
    </section>
  );
}