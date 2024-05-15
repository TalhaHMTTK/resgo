import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Resheader from "../components/Resheader";
import Footer from "../components/footer";
import Showdiscount from "../components/showdiscount";
import ShowMenu from "../components/showMenu";

export default function Reshome() {
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
          <Showdiscount/>
          <ShowMenu/>
          <Footer />
        </div>
      ) : (
        navigate("/Login") // Corrected method call to follow camelCase convention
      )}
    </>
  )
}
