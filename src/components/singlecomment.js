import React from "react";

export default function Singlecomment(props) {
  // Function to format the date
  const formatDate = (timestamp) => {
    const dateObj = new Date(timestamp);
    const options = {
      weekday: "long", // full day name (e.g., Monday)
      year: "numeric",
      month: "long", // full month name (e.g., January)
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return dateObj.toLocaleString("en-US", options);
  };

  return (
    <div>
      <div className="comments-area">
        <div className="comment-list">
          <div className="single-comment justify-content-between d-flex">
            <div className="user justify-content-between d-flex">
              <div className="desc">
                <p className="comment" >
                  {props.post}
                </p>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <h5 >{props.name}</h5>
                    {/* Format and display the date */}
                    <p  className="date">
                      {formatDate(props.date)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
