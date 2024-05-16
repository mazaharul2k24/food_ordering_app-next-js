import React from 'react'
import Link from 'next/link';
export default function service() {
  return (
   
    <div className="servicesection">
    <div className="serviseheadrtitle">
      <h2 className='text-center font-bold uppercase text-2xl py-6   ' >My Awesome <p className='text-indigo-600 inline-block'>Servises</p></h2>
      </div>
      <div className="serviceBoxWraper grid grid-cols-4">
      
        <div className="bg-white mb-4 hover:bg-indigo-600 hover:text-gray-200 cursor-pointer  transition duration-700 ease-in-out    m-auto md:w-auto w-[300px]   rounded-xl border shadow-lg text-center py-9 px-2 col-span-4 md:col-span-1 md:ml-2 border-1 p-2 text-black">
          <h2 className='mt-6 mb-2'><i className="fa-solid fa-paintbrush text-xl bg-maza p-3 rounded-full border-0"></i></h2>
          <h2 className='font-bold'>web design</h2>
          <p className='mb-3 py-3 leading-6 text-center px-2 '>I am skilled web designer I design with HTML5,tailwind css, And JavaScript.</p>
      <Link href='#' className='border border-1 border-gray-300 py-1 px-3 rounded-md mt-3'>Seemore</Link>
        </div>
        <div className=" bg-indigo-600  mb-4 text-gray-100 cursor-pointer  transition duration-700 ease-in-out   m-auto md:w-auto w-[300px] rounded-xl border   shadow-md text-center py-9 px-2 col-span-4 md:col-span-1 md:ml-2 border-1 p-2">
          <h2 className='mt-6 mb-2'><i className="text-xl fa-brands fa-windows  bg-maza p-3 rounded-full border-0 "></i></h2>
          <h2 className='font-bold'>Wordpress</h2>
          <p className='mb-3 py-3 leading-6 text-center px-2 '>I am skilled web designer I design with HTML5,tailwind css, And JavaScript.</p>
      <Link href='#' className='border border-1 border-gray-300 py-1 px-3 rounded-md mt-3'>Seemore</Link>
        </div>
        <div className="bg-white mb-4 hover:bg-indigo-600 hover:text-gray-200 cursor-pointer  transition duration-700 ease-in-out   m-auto md:w-auto w-[300px] rounded-xl border shadow-md text-center py-9 px-2 col-span-4 md:col-span-1 md:ml-2 border-1 p-2 text-black">
          <h2 className='mt-6 mb-2'><i className="fa-solid fa-code text-xl  bg-maza p-3 rounded-full border-0 "></i></h2>
          <h2 className='font-bold'>web Develop</h2>
          <p className='mb-3 py-3 leading-6 text-center px-2 '>I am skilled web designer I design with HTML5,tailwind css, And JavaScript.</p>
      <Link href='#' className='border border-1 border-gray-300 py-1 px-3 rounded-md mt-3'>Seemore</Link>
        </div>
  

        <div className="bg-white mb-4 hover:bg-indigo-600 hover:text-gray-200 cursor-pointer  transition duration-700 ease-in-out   m-auto md:w-auto w-[300px] rounded-xl border  shadow-md text-center py-9 px-2 col-span-4 md:col-span-1 md:ml-2 border-1 p-2 text-black">
          <h2 className='mt-6 mb-2'><i className="fa-brands fa-app-store-ios text-xl   bg-maza p-3 rounded-full border-0"></i></h2>
          <h2 className='font-bold'>App Development</h2>
          <p className='mb-3 py-3 leading-6 text-center px-2 '>I am skilled web designer I design with HTML5,tailwind css, And JavaScript.</p>
      <Link href='#' className='border border-1 border-gray-300 py-1 px-3 rounded-md mt-3'>Seemore</Link>
        </div>
      
       
      
      
      

      
       
      </div>
  
   </div>
  )
}
