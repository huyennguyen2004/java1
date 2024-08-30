import React, { useState } from "react";
import { LOGIN } from "../../api/apiService";
import { useNavigate } from "react-router-dom";

const SectionContent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const body = { email, password };

        try {
            const response = await LOGIN(body);
            if (response && response.data) {
                const token = response.data['jwt-token'];
                if (token) {
                    localStorage.setItem('authToken', token);
                    window.alert("Login successful!");
                    navigate("/"); // Redirect to the homepage
                } else {
                    window.alert("Token not found in response");
                }
            } else {
                window.alert("Login response is missing data");
            }
        } catch (error) {
            window.alert(`Login failed: ${error.message}`); // Fixed error message
        }
    };

    return (
        <section className="section-content padding-y" style={{ minHeight: "84vh" }}>
            <div className="card mx-auto" style={{ maxWidth: "380px", marginTop: "100px" }}> {/* Fixed the class name */}
                <div className="card-body">
                    <h4 className="card-title mb-4">Sign in</h4>
                    <form onSubmit={handleSubmit}>
                        {/* Facebook and Google sign-in buttons
                        <a href="#" className="btn btn-facebook btn-block mb-2">
                            <i className="fab fa-facebook-f"></i> Sign in with Facebook
                        </a>
                        <a href="#" className="btn btn-google btn-block mb-4">
                            <i className="fab fa-google"></i> Sign in with Google
                        </a> */}
                        <div className="form-group">
                            <input
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            {/* <a href="#" className="float-right">
                                Forgot password?
                            </a> */}
                            <label className="float-left custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                />
                                <div className="custom-control-label"> Remember </div>
                            </label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <p className="text-center mt-4">
                Don't have an account? <a href="#">Sign up</a>
            </p> */}
        </section>
    );
};

export default SectionContent;
