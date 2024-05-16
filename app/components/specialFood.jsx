import React from 'react'
import Image from 'next/image'
import {popularFood} from '@/lib/info'

export default function foodorderprocess() {
  return (
    <>
        <div className="fspH mt-4 py-6">
            <h1 className='text-center text-4xl font-semibold  py-6'>{popularFood.popularFoodTitleDesc[0].pfoodTitle}<span className='text-indigo-500'></span></h1>
            <p className='text-gray-500 text-md md:w-3/5  mx-auto text-center mb-5'>সম্পূর্ণভাবে নেটওয়ার্ক প্রভাবশালী ব্যবহারকারীরা যেখানে পরবর্তী প্রজন্মের অ্যাপ্লিকেশনগুলি কৌশলগত পদক্ষেপের মাধ্যমে চিন্তাভাবনা করে।
</p>
        </div>
        <div className="sfoprocess  grid grid-cols-1 md:grid-cols-4 gap-4">
        {popularFood.popularFoodTitleDesc[0].pfoodLength.map((e)=>(  

<div key={Math.random()} className="shadow-xl border md:w-full mx-auto bg-white rounded-md items-center text-center ">
<h2 className={`text-left bg-indigo-500 w-fit text-white py-1 px-6 rounded-r-full shadow-md `}> {e.popularFoodPrice}</h2>
<div className='py-4 px-5 mb-4'>
<Image width={150} height={150} alt='special food pictures' src={e.popularFoodImage} className='mx-auto'></Image>
<h2 className=' text-2xl text-indigo-600 py-3'> {e.popularFoodName}</h2>
<p className='text-gray-600 text-center'>{e.popularFoodBio}</p>

<div className='grid grid-cols-2 gap-5 mt-4 py-3 px-2'>
<p><i class="fa-solid fa-star py-2 text-yellow-400"></i> {e.popularFoodRating}</p>
<button className=' hover:bg-indigo-500 border py-1  hover:text-white  rounded-full text-indigo-500 '>{e.popularFoodOpt} </button>
</div>
</div>
</div>

        ))}
      


      

      
        </div>
    </>
  )
}
