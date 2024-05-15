import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/cards";
export default function Showdiscount() {
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
    var Nodiscount=0;
    return (
        <div>
            <section className="food_section layout_padding-bottom">
              <div className="container">
                <div className="filters-content">
                  <div className="row grid">
                    <h1 style={{ paddingTop: "20px" }}>Discounts</h1>
                    {discounts.length > 0 && discounts.map((data) => {
                      const userId = localStorage.getItem("userId"); // Retrieve the user ID from localStorage
                      if (userId === data.Id) {
                        Nodiscount=1;
                        return <Card lable="Discount" keys={data._id} Resname={data.Resname} description={data.description} lable1={data.Discount} ImageLink={data.ImageLink} />;
                      } else {
                        return null;
                      }
                    })}
                    {Nodiscount === 0 && <h1 style={{ paddingTop: "20px" }}>No Discounts available</h1>}
                  </div>
                </div>
              </div>
            </section>
          </div>
    );
}
