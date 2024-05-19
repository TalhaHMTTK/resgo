import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
export default function Login() {

  const [credentials, setCredentials] = useState({ email: "", password: ""});
  let navigate = useNavigate();
  const handleSubmit = async (e) => {

      e.preventDefault();
      try {
          const response = await fetch("http://localhost:5000/api/loginuser", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  email: credentials.email,
                  password: credentials.password
              })
          });
  
          const json = await response.json();
          console.log(json);
          if (!json.success) {
              alert("Enter valid Credentials");
          } else if (json.success) {
              debugger
              localStorage.setItem("authToken", json.authToken);
              localStorage.setItem("userId", json.userId); // Storing the user ID in local storage
              // talha is storing user role too
              localStorage.setItem("userRole",json.role);
              localStorage.setItem("userName",json.name)
             // console.log("username rec in login:",json.name);
              // Check the role and redirect accordingly
              if (json.redirectUrl) {
                  navigate(json.redirectUrl); // Redirect to the specified URL
              } else {
                  // Handle if redirectUrl is not provided
                  navigate("/"); // Default redirection to the root path
              }
          }
      } catch (error) {
          console.error('Error:', error.message);
          alert('An error occurred while logging in. Please try again.');
      }
  }
  

  const onChange = (event) => {
      setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }


  return (
    <div>
      <section className="sign-in">
        <div className="container1">
          <div className="signin-content">
            <div className="signin-image">
              <figure><img src="assets/images/signin-image.jpg" alt="sign up image" /></figure>
              <Link to="/signup" className="signup-image-link">Create an account</Link>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Sign in</h2>
              <form onSubmit={handleSubmit} method="POST" className="register-form" id="login-form">
                <div className="form-group">
                  <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                  <input type="text" name="email" id="your_name" placeholder="Your Email"  value={credentials.email} onChange={onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                  <input type="password" name="password" id="pass" placeholder="Password" value={credentials.password} onChange={onChange} />
                </div>
               
                <div className="form-group form-button">
                  <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                </div>
              </form>
              <div className="social-login">
                <span className="social-label">Or login with</span>
                <ul className="socials">
                  <li><Link to="/"><i className="display-flex-center zmdi zmdi-facebook"></i></Link></li>
                  <li><Link to="/"><i className="display-flex-center zmdi zmdi-twitter"></i></Link></li>
                  <li><Link to="/"><i className="display-flex-center zmdi zmdi-google"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
