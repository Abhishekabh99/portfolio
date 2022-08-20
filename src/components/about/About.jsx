import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src="https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="About" />
        </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
         <article className='about__card'>
          <FaAward  className='about__icon' />
          <h5>Experience</h5>
          <small>0.5 Years Working</small>
          </article> 
          <article className='about__card'>
          <FiUsers  className='about__icon' />
          <h5>Clients</h5>
          <small>Currently 0 clients</small>
          </article> 
          <article className='about__card'>
          <VscFolderLibrary  className='about__icon' />
          <h5>Projects</h5>
          <small>10+ completed projects</small>
          </article> 
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fugiat deleniti facilis similique sunt, quibusdam nobis quaerat voluptas sint provident sit nihil dolorum dignissimos! Explicabo harum obcaecati ipsam eaque neque?
        </p>
      </div>
    </div>
   </section>
  )
}
export default About