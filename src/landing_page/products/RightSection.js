import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    
      <div className="row p-md-5">
        <div className="col-md-6 col-12 p-md-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <img src={imageURL} />
        </div>
      </div>
    
  );
}

export default RightSection;