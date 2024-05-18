import React from 'react';
import Home from "./screens/Home";
import Login from './screens/Login';
import Signup from './screens/signup'; 
import Reshome from "./screens/reshome";
import Creatediscount from "./screens/creatediscount";
import Createmenu from "./screens/createmenu";
import Page from "./screens/Page";


import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Cardowner from './screens/Cardowner.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} /> 
        <Route exact path="/reshome" element={<Reshome />} /> 
        <Route exact path="/createmenu" element={<Createmenu />} /> 
        <Route exact path="/creatediscount" element={<Creatediscount />} /> 
        <Route exact path="/Page" element={<Page />} /> 
        <Route exact path="/Cardowner" element={<Cardowner />} />

      </Routes>
      
    </Router>
  );
}

export default App;
