import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
    const { loginUser, isServerError } = useContext(AuthContext);
    const defaultValues = { username: "", password: "" };
    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
        defaultValues,
        loginUser
    );

    useEffect(() => {
        if (isServerError) {
            reset();
        }
    }, [isServerError]);

    return (
        <div className="d-flex m-2">
            <form className="form-group m-2" onSubmit={handleSubmit}>
                <label className="m-2">
                    Username:{" "}
                    <input
                        className="m-2"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                </label>
                <label className="m-2">
                    Password:{" "}
                    <input
                        className="m-2"
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </label>
                {isServerError ? (
                    <p className="error">
                        Login failed, incorrect credentials!
                    </p>
                ) : null}
                <button className="btn btn-primary m-2">Login!</button>

                <Link to="/register">Click to register!</Link>
            </form>
        </div>
    );
};

export default LoginPage;
