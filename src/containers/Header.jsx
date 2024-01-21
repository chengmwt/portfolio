import React from 'react'
import logo from '../assets/myLogo.png'
import './Header.scss'
import NavBar from '../components/NavBar'
import ImageGrid from '../components/ImageGrid'


const Header = () => {
    return (
        <div className='header'>

            <div className="logoName">

                <div className="name">
                    <img src={logo} alt="logo" className='logoImg' />
                    <h1>atthew Cheng</h1>
                </div>
                <h2>Telematics Engineer at Toyota Canada</h2>

            </div>


            <NavBar />

            <ImageGrid />

        </div>
    )
}

export default Header