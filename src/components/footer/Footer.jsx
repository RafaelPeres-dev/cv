import React from 'react'
import './footer.css'
import {FaFacebookF, FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'

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
                <a href="htts://facebook.com/RafaelPeres95/"><FaFacebookF/></a>
                <a href="htts://github.com/RafaelPeres-dev"><FaGithub/></a>
                <a href='https://linkedin.com/in/rafaelperes95/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
                <a href="htts://instagram.com/rafael__peres__/"><FiInstagram/></a>
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