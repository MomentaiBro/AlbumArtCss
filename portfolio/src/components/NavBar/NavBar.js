import React from 'react'
import "./NavBar.css"

export const NavBar = () => {
  return (
    <div className='NavBar'>
    
        <div className='title'>
          Making
          <br /> Art 
          <br /> with 
          <br /> CSS
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Artwork</a></li>
          </ul>
        </nav>
    
    </div>
  )
}
