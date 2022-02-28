import React, { useState } from 'react';
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSolid, faBars} from '@fortawesome/free-solid-svg-icons'
import { css } from "@emotion/react"

function Navigation() {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(true);

    const toggleMobileDropdown = () => {
        mobileDropdown ? setMobileDropdown(false) : setMobileDropdown(true);
        console.log(mobileDropdown)
    }
    const toggleMobileMenu = () => {
        !showMobileMenu ? setShowMobileMenu(true) : setShowMobileMenu(false);
    }

    return (
        <>
            <nav className="topNav">
                <Link to="/">
                    <div id="logo">
                        <h2>L</h2>
                    </div>
                </Link>

                <span onClick={() => toggleMobileMenu()} className="hamburger"><FontAwesomeIcon icon={faSolid, faBars} /></span>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li id="projects-link" >
                        Projects

                        <ul id="dropdown-menu"> 
                            <li><Link to="/web-dev-portfolio">Web Development</Link></li>
                            <li><Link to="/video-photo-portfolio">Filmmaking</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <nav className={showMobileMenu?"mobileNav show-mobile-nav":"mobileNav"}>
                <span className='mobile-nav-exit' onClick={() => toggleMobileMenu()}>+</span>
                <ul className='primary-mobile-links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li className="mobile-dropdown-link"  
                        css={mobileDropdown 
                        ? css`
                            :after{
                                transform: translate(2.5em, 0.4em) rotate(90deg) !important;
                                color: white !important;
                            }

                            
                        
                        `: null 
                        }>

                        <span onClick={() => toggleMobileDropdown()}>Projects</span>
                        <ul css={mobileDropdown 
                        ? css`
                            display: none;
                        `
                        : null
                        }>
                            <li ><Link to="/web-dev-portfolio" >Web Development</Link></li>
                            <li ><Link to="/video-photo-portfolio">Filmmaking</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

        </>
     );
}

export default Navigation;