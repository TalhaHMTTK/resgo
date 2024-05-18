import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Resheader from "../components/Resheader";
import Footer from "../components/footer";
import Showdiscountowner from "../components/showdiscountowner";
import ShowMenuowner from "../components/showMenuowner";

export default function Cardowner() {
  const navigate = useNavigate(); 
  localStorage.removeItem("selectedKey");
  localStorage.removeItem("selectedname");
  localStorage.removeItem("selectedDescription");
  localStorage.removeItem("selectedImageLink");
  return (
    <>
      {localStorage.getItem("authToken") ? (
        <div>
          <Resheader /> 
          <Showdiscountowner/>
          <ShowMenuowner/>
          <Footer />
        </div>
      ) : (
        navigate("/Login") // Corrected method call to follow camelCase convention
      )}
    </>
  )
}
