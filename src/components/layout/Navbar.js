import React from 'react';
import UsernameDisplay from './UsernameDisplay';
import { withRouter } from "react-router-dom";

const Navbar = (props) => {
    const token = localStorage.getItem('userToken');

    return (
        <div className="row w-95">
            <nav className="navbar">
                <div className="container-fluid justify-content-end">
                    {token && <UsernameDisplay />}
                    <div className="logo">
                        <a href="/">MoreTask</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Navbar);
