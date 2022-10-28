import React from 'react'
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <div className='navbar'>
    <p><Link to={'/'}>Home</Link></p>
    <p><Link to={'/about'}>About</Link></p>
    </div>
  )
}
