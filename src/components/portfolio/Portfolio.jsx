import React from 'react'
import './portfolio.css'


const data = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/172277/pexels-photo-172277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/172277/pexels-photo-172277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Charts Template & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/172277/pexels-photo-172277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/172277/pexels-photo-172277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels',
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/172277/pexels-photo-172277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Charts template & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels',
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/172277/pexels-photo-172277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Charts template & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels',
  },



]




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My React Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
     {
      data.map(({id, image, title, github, demo}) => {
        return (
          <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank' rel="noreferrer" >Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        )
      })
     }   
      </div>
    </section>
  )
}

export default Portfolio