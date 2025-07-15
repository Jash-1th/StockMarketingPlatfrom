import React from "react";

function Universe() {
  return (
    
      <div className="row  text-center mt-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row row-cols-md-3 row-cols-sm-2">
        <div className=" col-md-4 img-content  p-md-3 mt-5">
          <img src="media/smallcaseLogo.png"  />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-md-4 img-content  p-md-3 mt-5">
          <img src="media/zerodhaFundhouse.png" />
          <p className="text-small text-muted">our assest management venture that is creating simple and transparent index funds to help you save for your goals</p>
        </div>
        <div className="col-md-4 img-content  p-md-3 mt-5">
          <img src="media/sensibullLogo.svg" />
          <p className="text-small text-muted">options trading platform that lets you create strategies , analyze positions , and examine data points like open intreset , FII/DII , and more</p>
        </div>
        <div className="col-md-4 img-content  p-md-3 mt-5">
          <img src="media/tijori.svg" />
          <p className="text-small text-muted">Invest research platform that offers detailed insight on stocks , sectors, supply chains, and more</p>
        </div>
        <div className="col-md-4 img-content  p-md-3 mt-5">
          <img src="media/streakLogo.png" />
          <p className="text-small text-muted">Systematic trading platform that allows you to create and backtest strategies without coding</p>
        </div>
        <div className="col-md-4 img-content  p-md-3 mt-5">
          <img src="media/dittoLogo.png" />
          <p className="text-small text-muted">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
        </div>
        </div>
        <button
          className="p-2  btn btn-primary mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
  
  );
}

export default Universe;