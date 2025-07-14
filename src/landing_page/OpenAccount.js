import React from 'react';
import "./openAccount.css"
import {Link} from "react-router-dom";

function OpenAccount({title , desc}) {
    return ( 
        <div className='row row-cols-1 open-account'>
            <div className='col'><h1>{title}</h1></div>
            <div className='col'>{desc}</div>
            <div className='col btn-class'> <Link className='btn btn-primary' to="/signup">Signup for free</Link></div>
        </div>
      );
}

export default OpenAccount;