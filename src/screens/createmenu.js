import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Createmenu() {

  const [credentials, setCredentials] = useState({ Item: "", description: "", Price: "", ImageLink: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const userId = localStorage.getItem("userId"); // Retrieve the user ID from localStorage
          const response = await fetch("http://localhost:5000/api/createMenu", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              // Corrected the body to include userId within the credentials object
              body: JSON.stringify({ ...credentials, Id: userId })
          });
  
          const json = await response.json();
          console.log(json);
          if (!json.success) {
              alert("Menu Not added");
          } else {
              alert("Menu added successfully");
              navigate("/createMenu");
          }
      } catch (error) {
          console.error('Error:', error.message);
          alert('An error occurred while adding the menu. Please try again.');
      }
  }
  
  const onChange = (e) => {
    
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }


  return (
    <div>
    <section className="book_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2 style={{ color: "white" }} >
            Add a Menu item
          </h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form_container">
            <form onSubmit={handleSubmit}>
                    <div>
                      <input type="text" className="form-control" name="Item" placeholder="Item Name"  value={credentials.Item} onChange={onChange}  style={{ backgroundColor: "white" }}/>
                    </div>
                    <div>
                      <input type="text" className="form-control" name="description" placeholder="Item Description" value={credentials.description} onChange={onChange} style={{ backgroundColor: "white" }} />
                    </div>
                    <div>
                      <input type="text" className="form-control" name="Price" placeholder="Price" value={credentials.Price} onChange={onChange} style={{ backgroundColor: "white" }} />
                    </div>
                    <div>
                      <input type="text" className="form-control" name="ImageLink" placeholder="ImageLink" value={credentials.ImageLink} onChange={onChange} style={{ backgroundColor: "white" }} />
                    </div>
              
                <div className="btn_box">
                  <button type="submit">
                    ADD
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
  )
}


