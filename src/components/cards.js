import React from "react";

export default function Card(props) {
  return (
 
            <div className="col-sm-6 col-lg-4 all pizza">
              <div className="box">
                <div>
                  <div className="img-box">
                    <img src={props.ImageLink} alt="image here" />
                  </div>
                  <div className="detail-box">
                  <h5>{props.Resname}</h5>
                    <p>
                    {props.description}
                    </p>
                    <div className="options">
                      <h6>Discount :  {props.Discount} %</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
     
  );
}
