import React, { Fragment } from 'react'
import HelpAdmin from "../layout/HelpAdmin";
import HelpUser from "../layout/HelpUser";
import Page from '../layout/Page';

const FAQ = () => {
    const isAdmin = localStorage.getItem('userAdmin');

    return (
        <Fragment>
            <Page
                body={
                    <div className="glass-background container text-light px-5 pb-5 mx-5 w-75 ">
                        <h1 className="text-center mt-5 fw-bold">FAQ</h1>
                        {isAdmin === "true" && <HelpAdmin />}
                        {isAdmin === "false" && <HelpUser />}
                    </div>
                }>
            </Page >
        </Fragment>
    )
}


export default FAQ
