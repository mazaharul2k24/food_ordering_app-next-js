import usernfo from "@/lib/userinfo";
import Image from "next/image"
import nxlogo1 from "@/public/pizzalogo.png";
import { Lemon,Space_Grotesk } from "next/font/google";

const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'],weight:['500','300','500'] });
const lemon = Lemon({ subsets: ['latin'],weight:'400' });


export default function produc({params}) {
    const {product}=params;
    var prodata=[];
    var a=usernfo.length;
  
for (let index = 0; index < 1; index++) {
  const element = usernfo[product-1];
prodata.push(element)

}

  return (
<>
<div key={prodata[0].id}>

<div className="size-full border-4 border-t-indigo-500  m-4 w-[300px] bg-white  pb-3 rounded-md shadow-xl " >

<Image src={nxlogo1} width={200} className="block m-auto"  height={150} alt="my image"></Image>


<div className="py-3 capitalize  px-4 text-justify font-semibold">
  <h1 className=" text-center uppercase font-bold "><span className={SpaceGrotesk.className}>{prodata[0].name}</span> </h1>
<div className="leading-6">
<p className="text-green-600" >   <label className="text-black" htmlFor="#">ID : </label>{prodata[0].id}</p>

<p className="text-green-600">   <label className="text-black" htmlFor="#">Skill : </label>{prodata[0].skill}</p>
<p className="text-green-600">   <label className="text-black" htmlFor="#">Salary : </label>{prodata[0].salary}</p>


</div>
</div>



</div>

</div>


</>
  )


 
   
}

export const generateMetadata=({ params })=>{
  return {
    title:"single product" ,
    description:"hellow world"
    
  }
}
