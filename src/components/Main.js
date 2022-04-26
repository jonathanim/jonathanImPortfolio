import React from 'react'

import MyNavbar from './MyNavbar'
import Footer from './Footer'
import About from './About'
import Projects from './Projects'
import '../App.css'
import MyStack from './MyStack'



function Main() {
    return (
        <div className='app'>
            <MyNavbar />
            <About />
            <MyStack />
            <Projects />
            <Footer />
        </div>
    )
}

export default Main