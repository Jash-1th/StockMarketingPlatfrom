import React from 'react';

function Stats() {
    return (
        <div className='row row-cols-md-6 p-md-5 mt-5'>
            <div className='col-md-5 p-lg-5 mt-5'>
                    <div className='row home-stats-content'>
                        <h1 className='mb-5'>Trust with confidence</h1>
                        <div>
                            <h4>Customer-first always</h4>
                            <p>
                                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                            </p>
                        </div>
                        <div>
                            <h4>Customer-first always</h4>
                            <p>
                                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                            </p>
                        </div>
                        <div>
                            <h4>Customer-first always</h4>
                            <p>
                                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                            </p>
                        </div>
                        <div>
                            <h4>Customer-first always</h4>
                            <p>
                                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                            </p>
                        </div>

                    </div>
            </div>
            <div className='col-md-7  p-lg-5 mt-5 stats-eco'>
                  <img src='media/ecosystem.png' alt='ecosystem' style={{width : "90%" , height:"85%"}} ></img>
                  <div style={{display:"flex" , justifyContent:"space-between"}}>
                     <a href='#' >Explore our products <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    <a href='#'>Try Kite demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                  </div>
                 
            </div>
          
        </div>
    );
}

export default Stats;