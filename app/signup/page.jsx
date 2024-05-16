import React from 'react'
import Link from 'next/link'
export default function signuppage() {
  return (
    <div className="w-full mb-9">
        <div className='w-[50%] mx-auto' >
        <div className='inpgrupo '>
          <div className=" bg-[#efefef] border rounded-md shadow-md px-2 py-9">
            <h2 className='text-2xl text-center'>signup</h2>
            <form action="/login" method='post' className='mx-auto w-[100%] block'>

              <div className=" w-[60%] mx-auto py-2">
                <label htmlFor="fname"  className=' block pb-1'>Enter full name</label>
                <input type="text"  className='w-[100%] border rounded-md px-3 py-1  mx-auto outline-none' name="fname" placeholder='Atif islam' required />
              </div>

              <div className=" w-[60%] mx-auto py-2">
                <label htmlFor="email"  className=' block pb-1'>Enter Email </label>
                <input type="email"  className='w-[100%] border rounded-md px-3 py-1  mx-auto outline-none' name="email" placeholder='example@gmail.com' required />
              </div>


              <div className=" w-[60%] mx-auto py-2">
                <label htmlFor="Address"  className=' block pb-1'>Enter Address </label>
                <input type="text"  className='w-[100%] border rounded-md px-3 py-1  mx-auto outline-none' name="Address" placeholder='Dhaka , bd' required />
              </div>

              <div className=" w-[60%] mx-auto py-2">
                <label htmlFor="fname"  className=' block pb-1'>Enter password </label>
                <input type="password"  className='w-[100%] border rounded-md px-3 py-1  mx-auto outline-none' name="password" placeholder='!@#$$' required />
              </div>

              <div className=" w-[60%] mx-auto py-2">
  
              <button className='bg-indigo-600 text-center w-[100%] px-3 py-2 text-white rounded-md'>Signup</button>
              </div>

           <div className="others w-[60%] mx-auto py-2" >
            <p>Already have an accout? <Link href={'/login'} className='text-blue-500 '> Login</Link></p>
           </div>
           


            </form>
          </div>

        </div>

        </div>
    </div>
  )
}
