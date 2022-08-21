import React from 'react'
import './testimonials.css'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  name1: 'Tina Snow',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas error quo ratione nam! Sequi mollitia, perspiciatis itaque, facilis asperiores quas vero vel dolore, fugiat voluptatibus optio ipsum quaerat cumque veritatis.'
  },
  {
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    name1: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas error quo ratione nam! Sequi mollitia, perspiciatis itaque, facilis asperiores quas vero vel dolore, fugiat voluptatibus optio ipsum quaerat cumque veritatis.'
    },
    {
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name1: 'Kwame Despite',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas error quo ratione nam! Sequi mollitia, perspiciatis itaque, facilis asperiores quas vero vel dolore, fugiat voluptatibus optio ipsum quaerat cumque veritatis.'
      },
      {
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        name1: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas error quo ratione nam! Sequi mollitia, perspiciatis itaque, facilis asperiores quas vero vel dolore, fugiat voluptatibus optio ipsum quaerat cumque veritatis.'
        },
]


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

     <Swiper className="container testimonials__container"
     // install Swiper modules
     modules={[ Pagination,]}
     spaceBetween={40}
     slidesPerView={1}
     pagination={{ clickable: true }}
>
      {/* entering into javaScript mode below by applyting brackets */}
    {
      
      data.map(({avatar,name1,review}, index) => {
        return (
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="" />
          </div>
          <h5 className="client__name">{name1}</h5>
            <small className="client__review">{review}</small>
        </SwiperSlide>       
        )
      }
      )

    }
      </Swiper> 
    </section>
  )
}

export default testimonials