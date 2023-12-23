import React from 'react'

const Navigation = () => {
  return (
    <nav className='container max-w-1280px px-8 m-0-auto '>
      <div className="logo flex items-center justify-between"  >
        <img src="/images/logo.png" alt='logo of the page'></img>

      <ul className='flex flex-row gap-24 font-bold'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      </div>
    </nav>
  )
}

export default Navigation
