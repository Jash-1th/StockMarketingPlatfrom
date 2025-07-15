import React from 'react';
import OpenAccount from '../OpenAccount';
function Hero() {
    return ( <>
        <div className='row row-cols-1 text-center-md home-hero'>
            <img src="media/homeHero.png" alt='home Hero' className='col'></img>
            <OpenAccount title="Invest in everything" desc="Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.

" ></OpenAccount>
        </div>
    
    </>  );
}

export default Hero;