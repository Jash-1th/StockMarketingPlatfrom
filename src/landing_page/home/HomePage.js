import React from 'react';
import Awards from './Awards';
import Education from './Education';
import Hero from './Hero';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Pricing from "./Pricing";
function HomePage() {
    return (
        <>
       <div className='container-md'>

        
        <Hero></Hero>
        <Awards></Awards>
        <Stats></Stats>
         <Pricing></Pricing>
        <Education></Education>
        <div className='text-center mt-5'>
        <OpenAccount  title="Open a Zerodha account" desc="Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades."></OpenAccount>
        </div>
        
       </div>
        </>   );
}

export default HomePage;