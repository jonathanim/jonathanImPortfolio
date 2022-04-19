import React from 'react'
import MyNavbar from './MyNavbar'
import Footer from './Footer'
import About from './About'
import '../App.css'

function Main() {
    return (
        <div className='app'>
            <MyNavbar />
            <About />
            <Footer />
        </div>

    )
}

export default Main