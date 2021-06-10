import React from 'react'

const Navbar = () => {
    return (
        <div className="row">
            <nav className="navbar navbar-light bg-light shadow-sm">
                <div className="container-fluid justify-content-end">
                    <i className="fa fa-fw fa-rocket" style={{ fontSize: '1.75em' }} />
                    <a className="navbar-brand" href="/">MoreTask</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
