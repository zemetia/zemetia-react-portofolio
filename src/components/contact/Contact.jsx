import React from 'react'
import './contact.css'
import Miku from '../../assets/image/miku.png'

const Contact = () => {
    return (
        <section id="contact">
            <div className="section__title">
                <h2 className='gradient-text'>Contact me</h2>
                <h5>Hey let's get acquainted</h5>
            </div>

            <div className="container container__contact">
                <div className="contact__information">
                    <img src={Miku} alt="Miku Sayang"></img>
                    <span>Contact me</span>
                </div>
                <div className="contact__form">
                    <form method="get" target="">
                        <input type='text' id="name" placeholder='Enter Your Name'></input>
                        <input type='email' id="email" placeholder='Enter Your Email'></input>
                        <textarea id='message'></textarea> 
                        <button type='submit' className='btn btn-primary btn-contact'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Contact