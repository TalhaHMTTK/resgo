import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Comments() {
    const [credentials, setCredentials] = useState({ name: "", post: ""});
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const Postid = localStorage.getItem("selectedKey"); // Retrieve the user ID from localStorage
            const response = await fetch("http://localhost:5000/api/createcomments", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...credentials, Postid: Postid })
            });
    
            const json = await response.json();
            console.log(json);
            if (!json.success) {
                alert("Comment Not added");
            } else {
                alert("Comment added successfully");
                document.getElementById("post").value="";
                document.getElementById("name").value="";

            }
        } catch (error) {
            console.error('Error:', error.message);
            alert('An error occurred while adding the comment. Please try again.');
        }
    }
    
    const onChange = (e) => {
      
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

  return (
    <div> <div className="comment-form">
    <h4  style={{ color: "white" }} >Leave a Reply</h4>
    <form onSubmit={handleSubmit} className="form-contact comment_form" action="#" id="commentForm">
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <textarea className="form-control w-100" name="post" id="post" cols="30" rows="9" placeholder="Write Comment" value={credentials.post} onChange={onChange} style={{ backgroundColor: "white" }}> </textarea>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <input className="form-control" name="name" id="name" type="text" placeholder="Name" value={credentials.name} onChange={onChange} style={{ backgroundColor: "white" }}/>
          </div>
        </div>
        
      </div>
      <div className="form-group">
        <button type="submit" className="button button-contactForm btn_1 boxed-btn">Send Message</button>
      </div>
    </form>
  </div></div>
  )
}
