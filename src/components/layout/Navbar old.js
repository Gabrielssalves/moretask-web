import React from 'react';
import { withRouter } from "react-router-dom";
import SearchBar from "./Searchbar";

const Navbar = (props) => {
    const path = props.location.pathname;

    return (
        <div className="row">
            <nav className="navbar navbar-light bg-light shadow-sm">
                <div className="container-fluid justify-content-end">
                    {path !== "/task" && <SearchBar />}
                    <i className="fa fa-fw fa-rocket" style={{ fontSize: '1.75em' }} />
                    <a className="navbar-brand" href="/">MoreTask</a>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Navbar);
