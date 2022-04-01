import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaDribbble} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Tohsaka</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#porfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com" target="_blank" rel='noreferrer'><FaGithub /></a>
        <a href="https://dribbble.com" target="_blank" rel='noreferrer'><FaDribbble /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Tosaka </small>
      </div>
    </footer>
  )
}

export default footer