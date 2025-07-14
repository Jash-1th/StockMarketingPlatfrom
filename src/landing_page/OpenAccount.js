import React from 'react';
import "./openAccount.css"

function OpenAccount({title , desc}) {
    return ( 
        <div className='row row-cols-1 open-account'>
            <div className='col'><h1>{title}</h1></div>
            <div className='col'>{desc}</div>
            <div className='col btn-class'> <button className='btn btn-primary'>Signup for free</button></div>
        </div>
      );
}

export default OpenAccount;