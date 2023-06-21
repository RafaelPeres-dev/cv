import React from 'react'
import './footer.css'
import {FaFacebookF, FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
    return (
        <footer>
            <a href="" className="footer__logo">Rafael Peres</a>

            <ul className='permalinks'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="htts://facebook.com/"><FaFacebookF/></a>
                <a href="htts://github.com/"><FaGithub/></a>
                <a href="htts://twitter.com/"><IoLogoTwitter/></a>
                <a href="htts://instagram.com/"><FiInstagram/></a>
            </div>
            <div className="footer__copyright">
                <small>
                    &copy; Rafael Peres. All rights reserved.
                </small>
            </div>
        </footer>
    )
}

export default Footer