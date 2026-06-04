import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShieldCheck, LogOut } from 'lucide-react';


const NavBar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const navigate = useNavigate()
    return (
        <header className="fixed top-0 left-0 right-0 z-50 ">
            <nav className="flex items-center justify-between p-2 md:px-6 bg-primary text-center shadow-sm border-b border-gray-300">
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
                <div className='hidden md:flex text-center items-center space-x-1.5 bg-zinc-50 border border-zinc-200 p-1 px-3 rounded-full text-[11px] text-zinc-500 font-medium font-sans'>
                    <span className='h-2 w-2 flex relative'>
                        <span className="inline-flex animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
                    </span>
                        <span>Workspace Session Active</span>
                </div>
                <div>
                    <button
                        onClick={() => {
                            setIsLoggedIn(false)
                            navigate('/')
                        }}
                        className="flex items-center justify-center mx-2 text-secondary rounded-lg">
                        <LogOut className="w-5 h-5" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
