import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../img/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello, I'm</h5>
                <h1>Rafael Peres</h1>
                <h5 className="text">FullStack Developer</h5>
                <CTA/>
                <div className="me">
                    <img src={ME} alt="me"/>
                </div>
                <a href="#contacts" className="scroll__down">Scroll Down</a>
                <HeaderSocials/>
            </div>
        </header>
    )
}

export default Header