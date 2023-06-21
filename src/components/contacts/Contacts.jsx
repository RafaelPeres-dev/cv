import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

function Contacts() {
  return (
    <section id='contacts'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>rafaelperes@rafaelperes.pt</h5>
            <a href="mailto:rafaelperes@rafaelperes.pt" target='_blank'>Send an email!</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>Rafael Peres</h5>
            <a href="https://m.me/" target='_blank'>Send a message!</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+351 915 568 811</h5>
            <a href="https://wa.me/915568811" target='_blank'>Send an email!</a>
          </article>
        </div>
      </div>
      <form action="">
        <input type="text" name='name' required placeholder='Your name'/>
        <input type="text" name='email' required placeholder='Your email'/>
        <textarea name="message" placeholder='Your message' required rows="7"></textarea>
        <button type='submit' className='btn btn-primary'>Send the Message</button>
      </form>
    </section>
  )
}

export default Contacts