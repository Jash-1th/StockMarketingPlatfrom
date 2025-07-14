import React from 'react';
function Education() {
    return ( 
        <div className='row p-md-5'>
            <img src='media/education.svg' alt='education' className='col-md-6 mt-5 p-md-5' ></img>
            <div className='col-md-6 mt-5 p-md-5'>
                <h2 className=''>Free and open market education</h2>
                <div className='education-content'>
                   <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='/'> Varsity <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='education-content'>
                   <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='/'> TradingQ&A <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;