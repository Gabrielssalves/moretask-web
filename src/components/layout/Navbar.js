import React from 'react';
import { withRouter } from "react-router-dom";
import SearchBar from "./Searchbar";

const Navbar = (props) => {
    const path = props.location.pathname;

    return (
        <div className="row w-95">
            <nav className="navbar">
                <div className="container-fluid justify-content-end">
                    {(path === "/workflow" ) && <SearchBar />}
                    <div className="logo">
                        <span>MoreTask</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Navbar);
