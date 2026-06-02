import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react';


const NavBar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between p-4 bg-primary text-center shadow-sm border-b border-gray-300">
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
                
            </nav>
        </div>
    )
}

export default NavBar
