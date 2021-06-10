import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavLinksData } from '../../data/NavLinks.js'

const NavBar = (props) => {
    const [navActive, setNavActive] = useState(false); 
    const [selectedPage, setSelectedPage] = useState('/' + (window.location.pathname.split('/')[2] ? window.location.pathname.split('/')[2] : ""));
    console.log(selectedPage)
    return (
        <div className="custom-nav">
            <nav>
                <ul className={navActive ? 'nav-links active' : 'nav-links'}
                    onClick={(e) => setSelectedPage('/' + e.target.pathname.split('/')[2])}
                    style={navActive ? {animation: 'navLinkFadeBackgroundIn 1s ease forwards 0.5s'} : {animation: 'navLinkFadeBackgroundOut 0.3s ease backwards 0s'}}>                                 
                    {NavLinksData.map((item, index) => {
                        return <li 
                                    key={index}
                                    style={navActive ? {animation: `navLinkFadeIn 1s ease forwards ${index / 7 + 0.1}s`} : {animation: `navLinkFadeOut 0s ease backwards ${(NavLinksData.length - index - 1) / 7}s`}}>
                                    <Link
                                    style={selectedPage === item.path ? {color: "rgb(233, 217, 0)"} : {}} 
                                    to={'/' + window.location.pathname.split('/')[1] + item.path}>{item.title}</Link>
                                </li>
                    })}
                </ul>
                <div className="burger" 
                    onClick={ () => setNavActive(!navActive)}>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </div>
                <div className="logo">
                    <h4>MoreTask</h4>
                </div>
            </nav>
            <div className={navActive ? 'out-nav-links active' : 'out-nav-links'}
                onClick={ ()=> {setNavActive(false)}}></div>            
        </div>
    )
}

export default NavBar