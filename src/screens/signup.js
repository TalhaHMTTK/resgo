import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "", role: "" });
    const [errors, setErrors] = useState({}); // State to store validation errors
    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (credentials.name.length < 3) {
            validationErrors.name = "Name must be at least 3 characters long";
        }
        if (!/^[a-zA-Z\s]*$/.test(credentials.name)) {
            validationErrors.name = "Name must contain only letters and spaces";
        }
        if (credentials.location.length < 3) {
            validationErrors.location = "Location must be at least 3 characters long";
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(credentials.email)) {
            validationErrors.email = "Invalid email format";
        }
        if (credentials.password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters long";
        }
        if (!credentials.role) {
            validationErrors.role = "Role is required";
        }
        // If there are validation errors, setErrors and return
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

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
                    location: credentials.location,
                    role: credentials.role // Include the role in the request body
                })
            });
    
            const json = await response.json();
            console.log(json);
            if (!json.success) {
                alert("Sign Up not complete");
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
        // Clear the error message when user changes the input value
        setErrors({ ...errors, [event.target.name]: '' });
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
                                    {errors.name && <div className="error">{errors.name}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" value={credentials.email} onChange={onChange} />
                                    {errors.email && <div className="error">{errors.email}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="text" name="location" id="location" placeholder="Location" value={credentials.location} onChange={onChange} />
                                    {errors.location && <div className="error">{errors.location}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="password" id="pass" placeholder="Password" value={credentials.password} onChange={onChange} />
                                    {errors.password && <div className="error">{errors.password}</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                                
                                </div>
                                <div className='form-group'>
                                        Select Your Role Below:
                                </div>
                                <div className="form-group">
                                    <label htmlFor="role"></label>
                                    <select name="role" id="role" onChange={onChange} value={credentials.role}>
                                        <option value=""></option>
                                        <option value="restaurant_owner">Restaurant Owner</option>
                                        <option value="simple_user">Simple User</option>
                                    </select> 
                                    {errors.role && <div className="error">{errors.role}</div>} 
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
