import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const NavBar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between p-4 bg-primary ">
                <Logo />
                <ul className="flex space-x-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
