import React from 'react';
function Pricing
() {
    return ( 
        <div className='row p-md-5 '>
            <div className='col-md-5 mt-5 p-5'>
                <h2>Unbeatable pricing</h2>
                <p className='mt-4 '>
                    We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                </p>
                <a href='/'>See Pricing <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className='col-md-2'>

            </div>
            <div className='col-md-5 pricing-prices mt-5'>
                    <div>
                        <h1>₹0</h1>
                        <p>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div>
                        <h1>₹20</h1>
                        <p>Intraday and F&O</p>
                    </div>
            </div>

        </div>
      );
}

export default Pricing
;