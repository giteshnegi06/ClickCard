import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
    return (
        <div>
            <footer className="flex items-center justify-center p-4">
                <Logo />
                <p>&copy; 2023 My App. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer
