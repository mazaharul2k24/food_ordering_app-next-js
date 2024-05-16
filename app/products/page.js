import Link from "next/link";
import InfoCard from "../components/infoCard";
import { Lemon,Space_Grotesk } from "next/font/google";

const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'],weight:['500','300','500'] });
const lemon = Lemon({ subsets: ['latin'],weight:'400' });

const servicepage=()=> {
  return (
  <>   
   <h1 className="text-2xl 0 capitalize font-semibold block text-center py-3">Select Your Food</h1>
 <div   className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"> 
<InfoCard  />
    </div>
  </>
  )
}

export const generateMetadata=({ params }) =>{
  return {
    title: 'product title',
    description:"hellow world"
    
  }
}




export default servicepage;