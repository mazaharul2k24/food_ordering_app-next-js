import React from 'react'
import Image from 'next/image'
import Maza from '@/public/mazaharul.png'

export default function clientReview() {
  return (
    <>
<div className="grid grid-cols-1 md:grid-cols-5 py-3 px-3 ">
    <div className="left col-span-2 mt-4">
         <Image height={400} width={300} src="https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png" unoptimized className='mt-3' alt='maza pic' >
        </Image>
    </div>
    <div className="right py-7 mt-7 col-span-3   ">
        <h1 className='text-4xl  text-indigo-500 py-6 '>Happy client reviews in food</h1>
        <p className='leading-8 '>কারণ তারা এমন একটি উপাদান উপস্থাপন করে না যা সহজ, হয় কালানুক্রমিক বা পরিবেশগত। আমি এটি সম্পর্কেরে?কারণ তারা এমন একটি উপাদান উপস্থাপন করে না যা সহজ, হয় কালানুক্রমিক বা পরিবেশগত। আমি এটি সম্পর্কেরে?কারণ তারা এমন একটি উপাদান উপস্থাপন করে না যা সহজ, হয় কালানুক্রমিক বা পরিবেশগত। আমি এটি সম্পর্কেরে?</p>
   <div className='  a'>
 <div className='grid grid-cols-4 gap-3 w-[100px]  text-yellow-400 py-5'>
 <i className="fa-solid fa-star"></i>
 <i className="fa-solid fa-star"></i>
 <i className="fa-solid fa-star"></i>
 <i className="fa-solid fa-star"></i> 
 </div>
    <h2 className='py-3 text-xl capitalize'><i class="fa-solid fa-user text-indigo-500 px-2 text-sm"></i> mazaharul islam</h2>
    <p className=' capitalize'><i class="fa-solid fa-location-dot text-indigo-500 px-2 text-sm"></i>jashore,bangladesh</p>
    <div className='grid grid-cols-2 w-[200px] py-4 '>
    <i className="cursor-pointer mx-3 py-4 hover:border-indigo-200 border  text-lg text-indigo-600 rounded-full   text-center fa-solid fa-arrow-left"></i>
    <i className=" py-4 mx-3 cursor-pointer hover:border-indigo-200 border text-lg rounded-full text-indigo-600  text-center fa-solid fa-arrow-right"></i>
    </div>
   </div>
    </div>
</div>    </>
  )
}
