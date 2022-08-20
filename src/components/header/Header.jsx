import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'
// import ME from '../../assets/me.jpg'
import CTA from './CTA'
const header = () => {
  return (
    <header>
      {/* this style of naming classes is called bim and we are going to use this convection in our project many times  */}
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Abhishek Pandey</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me' >
          <img src='https://images.pexels.com/photos/3103199/pexels-photo-3103199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header