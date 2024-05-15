import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Comments from "../components/comments";
import Singlecomment from "../components/singlecomment"

export default function Page() {
 var selectedKey = localStorage.getItem("selectedKey");
 var selectedName = localStorage.getItem("selectedname");
 var selectedDescription = localStorage.getItem("selectedDescription");
 var selectedImageLink = localStorage.getItem("selectedImageLink");
 const [comments, setComments] = useState([]); 
 const navigate = useNavigate(); 
 const loadData = async () => {
   try {
     let response = await fetch("http://localhost:5000/api/DisplayComments", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
     });
     response = await response.json();
     
     setComments(response);
   } catch (error) {
     console.error("Error fetching data:", error);
   }
 };

 useEffect(() => {
   loadData();
 }, []);

 const handleRedirect = () => {
  navigate("/reshome");
}


 return (
    <div>
          <Header />
          <div className="btn-box ml-5 mt-5">
                <button className="btn btn-success custom-btn" type="button" onClick={handleRedirect}>
                    Visit Restaurant
                </button>
           </div>
          <section className="blog_area single-post-area section-padding" >
            <div className="container">
              <div className="row">
                <div className="col-lg-8 posts-list">
                  <div className="single-post">
                    <div className="feature-img">
                      <img className="img-fluid" src={selectedImageLink} alt="" />
                    </div>
                    <div className="blog_details" >
                      {/* this style={{ color: "white" }} */}
                      <h2>{selectedName}</h2>
                      <p >
                        {selectedDescription}
                      </p>
                    </div>
                  </div>
                </div>
                <h4> Comments</h4>
                { 
                comments.length > 0 ? comments.map(data => (
                 selectedKey === data.Postid ? (
                      <Singlecomment key={data.id} name={data.name} post={data.post} date={data.date} label1={data.Discount} imageLink={data.ImageLink} />
                    ) : null
                    )) : null}
               

              </div>
            <Comments/>
            </div>
          </section>

                  
          <Footer />
    </div>
  )
}

