
export default function memberShipSec() {

  return (
    <>
     <div className='bgimageMember h-[200px] md:h-[300px] w-full'>
    <div className={`text-white h-[200px] md:h-full py-9 px-3 bg-black opacity-80 rounded-xl shadow-md `}>
      
       <h1 className='text-center md:mt-6 py-6 capitalize'>join your member and get  discount 15 % </h1>
      <div className='grid grid-cols-3  md:w-[400px] mx-auto rounded-full  '>
      <input   type="email" name="member" className='bg-white col-span-2 text-black  outline-none rounded-md px-3' id="" placeholder='Enter Your Email' />
        <input  type="submit" value={'signin'} className='col-span-1 cursor-pointer outline-none rounded-md mx-3 py-2 bg-indigo-600' name="member" id="" placeholder='Enter ' />
    
      </div>
       </div>
    </div>
    
    </>
  )
}
