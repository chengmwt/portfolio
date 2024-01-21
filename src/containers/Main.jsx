import React from 'react'
import './Main.scss'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Experience from '../components/Experience'

const Main = () => {
    return (
        <div className="main">

            <AboutMe />
            <Experience />
            <Projects />
            <Contact />
        </div>
    )
}

export default Main