import { Inter,Roboto,Anek_Bangla } from 'next/font/google';
import './globals.css'
import Header from './components/header';
import Footer from './components/footer';


 const bangla = Anek_Bangla({ subsets: ['latin'],weight:['500','800'] })
  export const metadata = {
  title: 'মাজা-ফুড',
   description: 'Awesome portfolio',
   }

   export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-screen bgImage  bg-slate-50 w-[100%] scroll-auto  '>
  <head>
 
  </head>
      <body className={bangla.className}>

    
   <>
   <Header/>

<div className="allContent w-[85%] m-auto mt-4">
{children}

</div>
<Footer/>

   </>
    
      </body>
    </html>
  )
}
