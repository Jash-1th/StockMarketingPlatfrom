import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
   
      <div className="row p-md-5">
        <div className="col-md-6 col-12 ">
          <img  src={imageURL} />
        </div>
        <div className="col-md-6 col-12  p-md-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            {googlePlay &&<a href={googlePlay}>
              <img  src="media/googlePlayBadge.svg" />
            </a>
}
            {appStore&&<a href={appStore}>
              <img 
                src="media/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
}
          </div>
        </div>
      </div>
  
  );
}

export default LeftSection;