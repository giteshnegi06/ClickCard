import React from 'react'
import { useNavigate } from 'react-router-dom'
import { House, Users, Activity, User } from 'lucide-react';

const Menu = () => {

    const navItems = [
        { name: 'Home', path: '/home', Icon: House },
        { name: 'Contacts', path: '/contacts', Icon: Users },
        { name: 'Analytics', path: '/analytics', Icon: Activity },
        { name: 'Profile', path: '/profile', Icon: User },
    ]
    const navigate = useNavigate('/home')
    const [activeItem, setActiveItem] = React.useState('/home' | '/contacts' | '/analytics' | '/profile' )


    return (
        <div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <ul className="flex gap-4 md:gap-8 bg-text px-4 py-2 rounded-3xl shadow-xl">
                    {navItems.map((item) => (
                        <li key={item.path}
                            className="group">
                            <button 
                            onClick={() => {
                                navigate(item.path);
                                setActiveItem(item.path);
                            }}
                            className={`flex-col flex items-center justify-center p-3 md:p-4 gap-1 rounded-2xl text-xs font-medium transition-colors duration-200 ${
                                activeItem === item.path ? 'text-primary bg-zinc-800 shadow-sm border border-zinc-700 font-sans' : 'text-secondary hover:bg-zinc-800  '
                            } `}>
                                <item.Icon className="w-4 h-4 flex group-hover:scale-105 transition-transform duration-200" />
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Menu
