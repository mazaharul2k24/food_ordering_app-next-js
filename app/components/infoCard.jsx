import Image from "next/image"
import nxlogo1 from "@/public/pizzalogo.png";
import Userinfo from "@/lib/userinfo";
import Link from "next/link";
import {Lemon , Space_Grotesk } from "next/font/google";

const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'],weight:['500','300','500'] });
const lemon = Lemon({ subsets: ['latin'],weight:'400' });


export default function infoCard(){
return (
<>

  {Userinfo.map((info)=>(


<div  key={Math.random()}   className="block font-medium m-auto">

<div className="border  hover:border-t-indigo-500  w-[320px] md:w-[280px] m-2 bg-white  pb-3 rounded-lg shadow-md " >


<Image src={nxlogo1} className="block rounded-lg m-auto   bg-white" width={240}   alt="my image"></Image>
<div className="py-3 capitalize  px-4 text-justify font-medium">
  <h1 className={`${SpaceGrotesk.className} italic text-center uppercase font-bold`}><span className=" font-bold">{info.name}</span> </h1>
<div className="leading-6">
<p className="font-bold" >   <label className="text-black font-medium" htmlFor="#">ID : </label>{info.id}</p>

<p className="font-bold">   <label className="text-black font-medium " htmlFor="#">catagory : </label>{info.skill}</p>
<p className="font-bold">   <label className="text-black font-medium" htmlFor="#">Price : </label>{info.salary}</p>

 <Link href={`products/${info.id}`} className={`  mt-3 font-normal w-fit block m-auto text-center bg-indigo-500 rounded-sm shadow-xl  text-gray-100 py-2  px-6`}>Add To Cart</Link>

</div>
</div>



</div>

</div>

  ))}
    </>
)
}