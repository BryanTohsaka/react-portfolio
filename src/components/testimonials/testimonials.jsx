import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Ernes Archiver',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt suscipit, quo labore nulla magni iste? At, eum, eaque voluptates esse ducimus totam id facere voluptatum cum quia, unde iusto. Vel.'
  },
  {
    avatar: AVTR2,
    name: 'Ernes Archiver',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt suscipit, quo labore nulla magni iste? At, eum, eaque voluptates esse ducimus totam id facere voluptatum cum quia, unde iusto. Vel.'
  },
  {
    avatar: AVTR3,
    name: 'Ernes Archiver',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt suscipit, quo labore nulla magni iste? At, eum, eaque voluptates esse ducimus totam id facere voluptatum cum quia, unde iusto. Vel.'
  },
  {
    avatar: AVTR4,
    name: 'Ernes Archiver',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt suscipit, quo labore nulla magni iste? At, eum, eaque voluptates esse ducimus totam id facere voluptatum cum quia, unde iusto. Vel.'
  },
]

const testimonials = () => {
  return (
    <section id='tetimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination ]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials