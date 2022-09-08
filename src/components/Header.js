import React from 'react'
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <header>
        <div className='logo'>
            <h3>Portfolio</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to = "/portfolio/">Home</Link>
                </li>
                <li>
                    <Link to = "/portfolio/blog">Works</Link>
                </li>
                <li>
                    <a href='#'>SNS</a>
                </li>

            </ul>
        </nav>
    </header>
  )
}

export default Header