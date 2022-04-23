import React from 'react'
import MyNavbar from './MyNavbar'
import Footer from './Footer'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import '../App.css'



function Main() {
    return (
        <div className='app'>
            <MyNavbar />
            <About />
            <Projects />
            <Skills />
        </div>

    )
}

export default Main