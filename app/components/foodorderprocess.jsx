import React from 'react'
import {ProcessFood} from '@/lib/info';
import Image from 'next/image'
import pizzalogo from "@/public/pizzalogo.png";
import sleecmenu from "@/public/sleecmenu.png";
import deliverylocation from "@/public/delivery-location.png";
import Fdelevery from "@/public/fdelevery.png";
export default function foodorderprocess() {

    const Images=[deliverylocation,Fdelevery,sleecmenu];


  return (
    <div>
        <div className="fspH mt-7 mb-6 py-7">
            <h1 className='text-center text-4xl font-semibold  py-6'>{ProcessFood.processTitleDesc[0].proTitle} </h1>
            <p className='text-gray-500 text-md md:w-4/5 mx-auto text-center mb-5'>
            {ProcessFood.processTitleDesc[0].prosortDesc}
</p>
        </div>
        <div className="sfoprocess  grid grid-cols-1 md:grid-cols-3 gap-4">

        {
        ProcessFood.processTitleDesc[0].processLength.map((e)=>(
            <div  key={Math.random()}  className="shadow-md md:w-full text-center mx-auto  bg-gray-100 rounded-md    ">
            <h2 className={` bg-red-500 text-center  w-fit text-white py-1 px-7 rounded-r-full shadow-md `  }> {e.processStep}</h2>
          <div className='my-3 px-4 py-5'>
                <Image  alt='images ordaring prosess pcture' width={200} height={200} src={e.processStepImage} className='mx-auto'></Image>
            <h2 className=' text-2xl text-cyan-500 py-3'>  {e.processStepTitle } </h2>
        <p className='text-gray-600 text-center'>
            {e.processStepDesc}
            </p>
        </div>
            </div>

        ))
        }

         

      
       
      
      
        </div>
    </div>
  )
}
