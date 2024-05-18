import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/cards";
export default function ShowMenu() {
    const [menus, setmenus] = useState([]); 
    const navigate = useNavigate(); 
  
    const loadData = async () => {
      try {
        let response = await fetch("http://localhost:5000/api/DisplayMenu", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        response = await response.json();
  
        setmenus(response[0]); // Fix: Access the first element of the response array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      loadData();
    }, []);
    var Nomenu=0;
    return (
        <div>
            <section className="food_section layout_padding-bottom">
              <div className="container">
                <div className="filters-content">
                  <div className="row grid">
                    <h1 style={{ paddingTop: "20px" }}>Menu</h1>
                    {menus.length > 0 && menus.map((data) => {
                      const userId = localStorage.getItem("selectedUser"); // Retrieve the user ID from localStorage
                      if (userId === data.Id) {
                        Nomenu=1;
                        return <Card lable="Price" Info={data.Id} keys={data._id} Resname={data.Item} description={data.description} lable1={data.Price} ImageLink={data.ImageLink} />;
                      } else {
                        return null;
                      }
                    })}
                    {Nomenu === 0 && <h1 style={{ paddingTop: "20px" }}>No Menu available</h1>}
                  </div>
                </div>
              </div>
            </section>
          </div>
    );
}
