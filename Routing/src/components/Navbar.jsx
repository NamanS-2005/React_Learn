import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" className={(e) => {return e.isActive?"red":""}}><li>Home</li></NavLink>
        <NavLink to="/about" className={(e) => {return e.isActive?"red":""}}><li>About</li></NavLink>
        <NavLink to="/login" className={(e) => {return e.isActive?"red":""}}><li>Login</li></NavLink>
        <NavLink to="/User/Naman" className={(e) => {return e.isActive?"red":""}}><li>User Naman</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar
