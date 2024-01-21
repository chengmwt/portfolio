import React from 'react'
import './NavBar.scss'

const NavBar = () => {
    return (
        <div className='navBar'>

            <ul className="nav">
                <li className="navAbout"><a href="#aboutMe">About Me</a></li>
                <li className="navExperience"><a href="#experience">Experience</a></li>
                <li className="navProjects"><a href="#projects">Projects</a></li>
                <li className="navContact"><a href="#contact">Contact</a></li>
            </ul>

        </div>
    )
}

export default NavBar