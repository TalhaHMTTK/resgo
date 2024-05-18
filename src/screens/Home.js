import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/cards";

export default function Home() {
  const [discard, setDiscard] = useState([]);
  const [search, setSearch] = useState('');
  const Navigate = useNavigate();
  localStorage.removeItem("selectedKey");
  localStorage.removeItem("selectedname");
  localStorage.removeItem("selectedDescription");
  localStorage.removeItem("selectedImageLink");
  
  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/DisplayDiscounts", {
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
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                  <div className="card mb-2" style={{ backgroundColor: "rgba(0,0,0,.43)" }}>
                    <div className="card-body p-2">
                      <div className="input-group input-group-lg">
                        <input className="form-control form-control-lg rounded" type="search" placeholder="Search" aria-label="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <section className="food_section layout_padding-bottom">
              <div className="container">
                <div className="filters-content">
                  <div className="row grid">
                    {discard.length > 0
                      ? discard.filter(data => data.Resname.toLowerCase().includes(search.toLowerCase())).map(data => (
                          <Card lable="Discount" Info={data.Id} keys={data._id} Resname={data.Resname} description={data.description} lable1={data.Discount} ImageLink={data.ImageLink} />                      ))
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


