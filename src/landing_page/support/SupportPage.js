import React from 'react';
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";
function SupportPage() {
    return ( 
        <div className='container-fluid '>
            <Hero></Hero>
            <CreateTicket></CreateTicket>
        </div>
      );
}

export default SupportPage;