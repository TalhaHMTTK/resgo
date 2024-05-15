import React from "react";
import { useNavigate } from "react-router-dom";
import Parse from 'parse/dist/parse.min.js'
export default function Card(props) {
  const navigate = useNavigate();

  const userRole = localStorage.getItem("userRole");

  const handleClick = () => {


    localStorage.setItem("selectedKey", props.keys);
    localStorage.setItem("selectedname", props.Resname);
    localStorage.setItem("selectedDescription", props.description);
    localStorage.setItem("selectedImageLink", props.ImageLink);
    navigate("/Page");
  };

  const handleDelete = async () => { // Marking the function as async
    try {
      const response = await fetch("http://localhost:5000/api/deletecard", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              id: props.keys
          })
      });

      const json = await response.json();
      console.log(json);
      if (json.success) {
          alert("item deleted");
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('An error occurred while deleting. Please try again.');
    }
  };

  return (
    <div className="col-sm-6 col-lg-4 all pizza" >
      <div className="box">
        <div>
          <div className="img-box" onClick={handleClick}>
            <img src={props.ImageLink} alt="image here" />
          </div>
          <div className="detail-box">
            <h5 style={{ color: "white" }}>{props.Resname}</h5>
            <p style={{ color: "white" }}>{props.description}</p>
            <div className="options">
              <h6>
                {props.lable} : {props.lable1}
              </h6>
            </div>


            {userRole === "restaurant_owner" && (
              <button onClick={handleDelete}>Delete</button>
            )}
          
          
          </div>
        </div>
      </div>
    </div>
  );
}