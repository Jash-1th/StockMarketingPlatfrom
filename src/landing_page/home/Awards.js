import React from 'react';
function Awards() {
    return ( 
        <div className='row p-md-5'>
            <img className='col-md-6 p-lg-5' src='media/largestBroker.svg' alt='awards-image'></img>
            <div className='col-md-6 p-lg-5'>
                    <div className='row ps-md-5 pt-5 awards-conent'>
                        <h2 className='mb-5'>Largest stock broker in india</h2>
                        <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                        <ul className='row row-cols-lg-2 p-4'>
                            <li>Future and options</li>
                            <li>Stocks &IPOs</li>
                            <li>Commodity derivatives</li>
                            <li>Direct mutual funds</li>
                            <li>Currency derivatives</li>
                            <li>Bonds and Govt. Securities</li>
                        </ul>
                        <img src='media/pressLogos.png' alt='pricing-image'></img>
                    </div>
            </div>

        </div>
     );
}

export default Awards;