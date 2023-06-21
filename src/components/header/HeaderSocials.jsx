import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub,FaFacebookF} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

const headerSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://linkedin.com/in/rafaelperes95/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
            <a href='https://github.com/RafaelPeres-dev' target='_blank' rel="noreferrer"><FaGithub/></a>
            <a href='https://instagram.com/rafael__peres__/' target='_blank' rel="noreferrer"><GrInstagram/></a>
            <a href="htts://facebook.com/RafaelPeres95/"><FaFacebookF/></a>
        </div>
    )
}

export default headerSocials