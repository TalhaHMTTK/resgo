import React from "react";
import { Link ,useNavigate} from "react-router-dom";
export default function Resheader() {
const Navigate=useNavigate();

const handlelogout=()=>{

localStorage.removeItem("authToken");
localStorage.removeItem("userId");
Navigate("/Login");
}
  return (
    <div>
      <div className="hero_area">
        <div className="bg-box">
          <img src="assets/images/hero-bg.jpg" alt="" />
        </div>
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand" to="/">
                <span>ResGo</span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Menu
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/reshome" className="nav-link">
                      Restaurant
                    </Link>
                  </li>
                </ul>
                <div className="user_option">
                  
                  {!localStorage.getItem("authToken") ? (
                    <div>
                      <Link to="/Login" className="user_link">
                        <i className="fa fa-user" aria-hidden="true"></i>
                      </Link>
                      <Link to="/signup" className="order_online">
                        SignUp
                      </Link>
                    </div>
                  ) : null}
                  {localStorage.getItem("authToken") ? (
                    <div>
                      <Link to="/Login" className="order_online" onClick={handlelogout}>
                        LogOut
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </nav>
          </div>
        </header>
        <section className="slider_section">
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7 col-lg-6">
                      <div className="detail-box">
                        <h1>Fast Food Restaurant</h1>
                        <p>
                          Doloremque, itaque aperiam facilis rerum, commodi,
                          temporibus sapiente ad mollitia laborum quam quisquam
                          esse error unde. Tempora ex doloremque, labore, sunt
                          repellat dolore, iste magni quos nihil ducimus libero
                          ipsam.
                        </p>
                        <div className=" d-flex ">
                        <div className="btn-box">
                          <Link to="/creatediscount" className="btn1">
                            Add discount
                          </Link>
                        </div>
                        <div className="btn-box px-5">
                          <Link to="/createmenu" className="btn1">
                            Add Menu item
                          </Link>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

