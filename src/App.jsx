import './App.css';
import React, { Fragment } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes'
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

import NavBar from './components/NavBar'

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Fragment>        
            <NavBar></NavBar>
            <Sidebar></Sidebar>
            <div className="container d-flex justify-content-center">
              <Routes/>
            </div>
          </Fragment>
        </Router>  
      </Provider>      
    </div>
  );   
}

export default App;
