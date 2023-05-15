"use client"

import  Link  from 'next/link';
import './navbar.css';
import React, {useState, useEffect} from 'react'

function Navbar() {

const [toggleMenu, setToggleMenu] = useState(false);
const [screenWidth, setScreenWidth] = useState(window.innerWidth);

const toggleNav = () => {
    setToggleMenu(!toggleMenu)
}

useEffect(() => {
    
    const changeWidth = () => {
        setScreenWidth(window.innerWidth);
    }
    
    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

}, [])

    return (
        // NAVBAR
        <nav>
            {(toggleMenu || screenWidth > 900) && (
                <ul className="list">
                    <li><Link className="items" href="/">Accueil</Link></li>
                    <li><Link className="items" href="/massages">Massages</Link></li>
                    <li><Link className="items" href="/degree">Diplômes</Link></li>
                    <li><Link className="items" href="/contact">Contact</Link></li>
                </ul>
            )}

            <button onClick={toggleNav} className="btn">BTN</button>
        </nav>
    );
}

export default Navbar;