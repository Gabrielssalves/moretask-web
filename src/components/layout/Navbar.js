import React from 'react';
import UsernameDisplay from './UsernameDisplay';
import SearchBar from "./Searchbar";
import { withRouter } from "react-router-dom";

const Navbar = (props) => {
    const path = props.location.pathname;
    const token = localStorage.getItem('userToken');

    return (
        <div className="row w-95">
            <nav className="navbar">
                <div className="container-fluid justify-content-end">
                    {path === "/workflow" && <SearchBar />}
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
