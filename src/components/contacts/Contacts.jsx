import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

function Contacts() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n6ww44y', 'template_rqol69p', form.current, 'pZ1yBEcZUcaVFlIx0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <section id='contacts'>
            <h5>Get in touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <a href="mailto:rafaelperes@rafaelperes.pt" rel="noreferrer" target='_blank'>
                        <article className="contact__option">
                            <MdOutlineEmail className='contact__option-icon'/>
                            <h4>Email</h4>
                            <h5>rafaelperes@rafaelperes.pt</h5>
                            Send an email!
                        </article>
                    </a>
                    <a href="https://m.me/" rel="noreferrer" target='_blank'>
                        <article className="contact__option">
                            <RiMessengerLine className='contact__option-icon'/>
                            <h4>Messenger</h4>
                            <h5>Rafael Peres</h5>
                            Send a message!
                        </article>
                    </a>
                    <a href="https://wa.me/915568811" rel="noreferrer" target='_blank'>
                        <article className="contact__option">
                            <BsWhatsapp className='contact__option-icon'/>
                            <h4>WhatsApp</h4>
                            <h5>+351 915 568 811</h5>
                        </article>
                    </a>


                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' required placeholder='Your name'/>
                    <input type="text" name='email' required placeholder='Your email'/>
                    <textarea name="message" placeholder='Your message' required rows="7"></textarea>
                    <button type='submit' className='btn btn-primary'>Send the Message</button>
                </form>
            </div>

        </section>
    )
}

export default Contacts