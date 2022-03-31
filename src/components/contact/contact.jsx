import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineLinkedin } from 'react-icons/ai'
import {useRef} from 'react';
import emailjs from 'emailjs-com'
//import Swal from 'sweetalert2'


const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9a1uhhk', 'template_5v2ehjr', form.current, 'fGaW4cF9A-b0u3-4j')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tohsakabryan@gmail.com</h5>
            <a href="mailto:tohsakabryan@gmail.com">Send message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Bryan Ivan Aviña Camacho</h5>
            <a href="https://www.linkedin.com/in/bryan-ivan-avi%C3%B1a-camacho-671828151/" target="_blank" rel='noreferrer'>Send message</a>
          </article>
        </div>
        {/* edn options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" className='input2' name='email' id='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact