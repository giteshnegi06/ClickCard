import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShieldCheck, LogOut } from 'lucide-react';
import { cardDetails } from '../Data/cardData';



const NavBar = () => {

    const card = cardDetails

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

                <div className="flex items-center space-x-3">
                    <div className="hidden md:flex flex-col text-right">
                        <span className="text-xs font-bold text-zinc-900 leading-none">{card.name}</span>
                        <span className="text-[10px] text-zinc-400 font-semibold truncate max-w-30 pt-0.5">{card.role}</span>
                    </div>
                    <img
                        src={card.avatarUrl}
                        alt={card.name}
                        className="w-8 h-8 rounded-full object-cover border border-zinc-200 shadow-sm"
                        referrerPolicy="no-referrer"
                    />
                    <button
                        onClick={() => {
                            setIsLoggedIn(false)
                            navigate('/')
                        }}
                        className="p-2 bg-zinc-50 hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900 rounded-lg cursor-pointer transition-colors border border-zinc-200/40"
                        title="Log Out Session"
                    >
                        <LogOut className="w-3.5 h-3.5" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
