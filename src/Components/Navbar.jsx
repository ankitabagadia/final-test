import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Navbar.css'

const Navbar = () => {
  return (
    <>
    <header>
        <div className="logo">
            Company
        </div>
        <div className="display-menu">
            <Link className='menu' to={'/'}>Home</Link>
            <Link className='menu' to={'/signup'}>Signup</Link>
            <Link className='menu' to={'/login'}>Login</Link>
        </div>
    </header>
    </>
  )
}

export default Navbar