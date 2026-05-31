import React from 'react'
import { ShieldCheck } from 'lucide-react';

const Logo = () => {
    return (
        <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center justify-center p-3 bg-zinc-950 text-white rounded-xl shadow-sm">
                <ShieldCheck className="w-6 h-6 text-zinc-300" />
            </div>
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-zinc-900 font-display">
                    Clik<span className="text-zinc-400">Card</span>
                </h1>
            </div>
        </div>
    )
}

export default Logo
