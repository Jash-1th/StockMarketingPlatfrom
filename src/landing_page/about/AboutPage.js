import React from 'react';
import Hero from './Hero';
import People from './People';
function AboutPage() {
    return ( 
        <div className='container p-md-5' >
            <Hero></Hero>
            <People></People>
        </div>
     );
}

export default AboutPage;