import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/cards";

export default function Home() {
  const [discard, setDiscard] = useState([]);
  const [search, setSearch] = useState('');
  const Navigate = useNavigate();

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/Displaycards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();

      setDiscard(response[0]); // Fix: Access the first element of the response array
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
          <Header />
        
          <div>
            <section className="food_section layout_padding-bottom">
              <div className="container">
                <div className="filters-content">
                  <div className="row grid">
                    {discard.length > 0
                      ? discard.filter(data => data.resname.toLowerCase().includes(search.toLowerCase())).map(data => (
                        <Card key={data._id} Resname={data.resname} description={data.resdescription} Discount={data.discount} ImageLink={data.imglink} />
                      ))
                      : null}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Footer />
        </div>
      ) : (
        Navigate("/Login")
      )}
    </>
  );
}
