import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react';


const Footer = () => {
    return (

        <footer className="flex items-center max-w-7xl mx-auto justify-between p-2 md:p-4 border-t border-secondary">
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
            <p className='text-[10px] md:text-sm'>&copy; 2023 My App. All rights reserved.</p>
        </footer>

    )
}

export default Footer
