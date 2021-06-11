import React, { Fragment } from 'react';
import spinner from "./spinner.gif";

export const Spinner = () => <Fragment>
        <img src={spinner} alt="Loading" style={{ width: "50px", margin: "auto", position:"absolute", top:"30%"}} />
    </Fragment>

export default Spinner