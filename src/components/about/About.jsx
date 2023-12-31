import React from 'react'
import './about.css'
import ME from '../../img/code.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>Abut me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about_icon'/>
                            <h5>Experience</h5>
                            <small>5+ Years</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className='about_icon'/>
                            <h5>Projects</h5>
                            <small>30+</small>
                        </article>
                    </div>
                    <p>
                        With more than 5 years of experience in the programming area, I have done some projects in various languages and with various technologies.
                    </ p>
                    <a href="#contacts" className="btn btn-primary">Lets Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About