import React from 'react';
function Hero() {
    return ( 
        <div className='row row-cols-2  support-hero ' >
            <div className='row support-hero-1 '>
                <h3 className='col'>Support Portal</h3>
                <h3 className='col'>Search for an answer or browse help topics to create a ticket</h3>
                <div className='row-cols-2'><input type='text' className='col-9'></input> <i className="fa fa-search col-2" aria-hidden="true"></i></div>
                <div >
                    <a href='#' >Track account opening</a>
                    <a href='#'> Track segment activation</a>
                    <a href='#'> Intraday margins</a>
                    <a href='#'>Kite user manual</a>
                </div>
            </div>
            <div className='col support-hero-2 '>
                    <h4 ><a href=''>Track tickets</a></h4>
                    <div  className='pd-md-5'>
                    <h3>Featured</h3>
                    <ol type='1'>
                        <li><a href=''>Quarterly Settlement of Funds - July 2025</a></li>
                        <li ><a href=''>Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
                    </ol>
                    </div>
            </div>
        </div>
     );
}

export default Hero;