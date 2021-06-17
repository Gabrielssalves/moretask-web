import React, { useEffect } from 'react'
import Spinner from "./Spinner";
import { Redirect } from "react-router";

const Signout = () => {
    useEffect(() => {
        logout();
        // eslint-disable-next-line
    }, []);

    const logout = () => {
        localStorage.setItem('userToken', "");
        localStorage.setItem("userAdmin", "");
        localStorage.setItem("userName", "");
        window.location.reload();
    }

    return (
        <div className="text-light h1 text-center">
            <div className="ms-5">
                Desconectando...
            </div>
            <div>
                <Spinner />
                <Redirect to="/login" />                
            </div>
        </div>
    )
}

export default Signout
