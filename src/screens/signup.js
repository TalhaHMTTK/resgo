import React, { useState } from 'react';
import { Link,Navigate,useNavigate } from "react-router-dom";
export default function Signup() {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" });
    let Navigate= useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                    location: credentials.location
                })
            });
    
            const json = await response.json();
            console.log(json);
            if (!json.success) {
                alert("Sign Not complete");
            } else if (json.success) {
                alert("Sign Up complete");
                Navigate("/Login");
            }
        } catch (error) {
            console.error(error);
        }
    }
    
    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    }

    return (
        <div>
            <section className="signup">
                <div className="container1">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form onSubmit={handleSubmit} method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" value={credentials.name} onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" value={credentials.email} onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="text" name="location" id="location" placeholder="Location" value={credentials.location} onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="password" id="pass" placeholder="Password" value={credentials.password} onChange={onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src="assets/images/signup-image.jpg" alt="sign up image" /></figure>
                            <Link to="/Login" className="signup-image-link">I am already a member</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
