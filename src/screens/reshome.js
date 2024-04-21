import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Resheader from "../components/Resheader";
import Footer from "../components/footer";
import Card from "../components/cards";
export default function Reshome() {
  const [discounts, setDiscounts] = useState([]); 
  const navigate = useNavigate(); 

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/DisplayDiscounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();

      setDiscounts(response[0]); // Fix: Access the first element of the response array
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {localStorage.getItem("authToken") ? (
        <div>
          <Resheader /> 
          <div>
            <section className="food_section layout_padding-bottom">
              <div className="container">
                <div className="filters-content">
                  <div className="row grid">
                    {discounts.length > 0 && discounts.map((data) => {
                      const userId = localStorage.getItem("userId"); // Retrieve the user ID from localStorage
                      return userId === data.Id ? (
                        <Card key={data.Id} Resname={data.Resname} description={data.description} Discount={data.Discount} ImageLink={data.ImageLink} />
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      ) : (
        navigate("/Login") // Corrected method call to follow camelCase convention
      )}
    </>
  )
}
