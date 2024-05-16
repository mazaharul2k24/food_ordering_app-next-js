import React from 'react';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'],weight:['500','300','500'] })
 
export default function footer() {
  return (
    <div className='grid grid-cols-1 py-9 md:grid-cols-3 bg-gradient-to-r from-indigo-900 to-gray-600  mt-4  px-7 maz-h-24 gap-8 md:gap-3 text-gray-200'>
<div className='border-b-4 md:border-0 border-gray-400 pb-3'>
    <h1 className='text-3xl mb-3 text-gray-400 '>বিশ্বস্ততার আরেক নাম মাজা ফুড</h1>
    <p className='leading-7  md:text-center capitalize text-gray-300'>কারণ তারা এমন একটি উপাদান উপস্থাপন করে না যা সহজ, হয় কালানুক্রমিক বা পরিবেশগত। আমি এটি সম্পর্কেরে?</p>
</div>
<div className='border-b-4 md:text-center md:border-0 border-gray-400 pb-3'>
    <h1 className='text-2xl text-gray-400 mb-2'><span className={SpaceGrotesk.className}>Menu</span></h1>
    <ul className={`uppercase  text-gray-300 tetx-xl leading-7 ${SpaceGrotesk.className}`}>
        <li><Link className='hover:text-gray-300' href={'/about'}>About </Link></li>
        <li><Link className='hover:text-gray-300' href={'/contact'}>Contct </Link></li>
        <li><Link className='hover:text-gray-300' href={'/services'}>Services </Link></li>
        <li><Link className='hover:text-gray-300' href={'/products'}>Fooods </Link></li>
        <li><Link className='hover:text-gray-300' href={'#'}> Conditions</Link></li>
    </ul>
</div>
<div>
    <h1 className='text-3xl md:text-center mb-4 text-gray-400'>Contacts</h1>
    <div>
        <ul className='leading-8 text-gray-300'>
            <li>1717 Harrison St, San Francisco, CA 94103, United States</li>
            <li>mazaharul@gmail.com</li>
            <li>jashore dhaka bangladesh</li>
            <li>01797575000</li>
        </ul>
    </div>
</div>


    </div>
  )
}
