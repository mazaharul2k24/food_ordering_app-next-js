import Herosec from './components/herosec';
import Fsprocess from './components/foodorderprocess';
import SpecialFood from './components/specialFood';
import Membershipsec from './components/memberShipSec';
import Clientreview from './components/clientReview';
import FontAsome from './components/fontAsome';
export default function Homepage() {
  return (
    <>
<FontAsome/>
  <main className=' m-auto mt-5'>
      
      <Herosec/>
      <Fsprocess/>
      <SpecialFood/>
      <Clientreview/>
      <Membershipsec/>

    

   </main>
    </>
  
 
  )
}
