import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function () {
    return (
        <div className='root-layout'>
            <header>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='timer'>Timer</NavLink>
                    <NavLink to='login'>Login</NavLink>
                    <NavLink to='registration'>Sign up</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
