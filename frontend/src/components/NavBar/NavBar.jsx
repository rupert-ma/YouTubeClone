import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
    const { logoutUser, user } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary container-fluid">
            <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        {/* <Link
                            to="/"
                            style={{ textDecoration: "none", color: "white" }}
                        > */}
                            <b>M's YouTube Clone</b>
                        {/* </Link> */}
                    </a>
                    <div className="d-flex">
                        {user ? (
                            <div className="d-flex">
                                <p className="m-2" style={{"color":"white"}}>Hello, {user.username}</p>
                                <button className="btn btn-secondary my-2 my-sm-0" onClick={logoutUser}>Logout</button>
                            </div>
                        ) : (
                            <div className="d-flex">
                            <button
                                className="btn btn-secondary my-2 my-sm-0"
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </button>
                            </div>
                        )}
                    </div>
                </div>
        </nav>
    );
};

export default Navbar;
