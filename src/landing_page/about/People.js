import React from 'react';
function People() {
    return ( 
        <div className='row people-section p-md-5 pt-5'>
            <h3 className='text-center pb-5'>People</h3>
            {/* <div className='col-2'></div> */}
            <div className='col-12 col-lg-4 p-lg-5 text-center' > 
                <img src='media/zerodha-jash2.jpg' alt='manager' ></img>
                <h4 className='mt-3' >Jaswanth Kumar</h4>    
                <p>Founder , CEO</p>
            </div>
           
            <p className='col-12 col-lg-6 p-lg-5 ' style={{letterSpacing:"1px" , lineHeight:"35px"}} >Jaswanth bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.

He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

Playing basketball is his zen.</p>
        </div>
     );
}

export default People;