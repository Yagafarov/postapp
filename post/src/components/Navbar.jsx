import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-400 flex text justify-between p-3 '>
        <a href="/" className="logo">Logo</a>
        <ul className='flex bg-red-500 gap-3 justify-between ' >
            <li>Home</li>
            <li>About</li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar