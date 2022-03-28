import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'

const about = () => {
  return (
    <section id='about'>
      <h5>get to know</h5>
      <h2>about me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
            </div>
        </div>

        <div className="about__content">

        </div>
      </div>
    </section>
  )
}

export default about