import React from 'react'
import { Redirect } from "react-router";

const Home = () => {
    const isAdmin = localStorage.getItem('userAdmin');
    const token = localStorage.getItem('userToken');

    if (token === "" || token === null) {
        return <Redirect to="/login" />
    } else if (isAdmin === "true") {
        return <Redirect to="/workflow" />
    } else {
        return <Redirect to="/task" />
    }
}


export default Home
