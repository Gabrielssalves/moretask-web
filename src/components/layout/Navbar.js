import React from 'react';
import { withRouter } from "react-router-dom";

const Navbar = (props) => {
    const userName = localStorage.getItem("userName");

    return (
        <div className="row w-95">
            <nav className="navbar">
                <div className="container-fluid justify-content-end">
                    <i>
                        {(userName !== "" && <span className="text-light me-5 h5">Welcome, {userName}!</span>)}
                    </i>
                    <div className="logo">
                        <a href="/login">MoreTask</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Navbar);
