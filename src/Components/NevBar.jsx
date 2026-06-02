import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShieldCheck, LogOut } from 'lucide-react';


const NavBar = () => {

        const [isLoggedIn, setIsLoggedIn] = useState(true)
        const navigate = useNavigate()
    return (
        <div>
            <nav className="flex items-center justify-between p-2 bg-primary text-center shadow-sm border-b border-gray-300">
                <div className="text-center flex items-center justify-center allign-middle gap-2">
                    <div className="flex items-center justify-center p-1 bg-zinc-950 text-white rounded-lg ">
                        <ShieldCheck className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight text-zinc-900 font-display">
                            Clik<span className="text-zinc-400">Card</span>
                        </h1>
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => {
                            setIsLoggedIn(false)
                            navigate('/login')
                        }}
                        className="flex items-center justify-center mx-2 text-secondary rounded-lg">
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
