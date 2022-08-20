import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/abhishek-pandey-1b7725173/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
    <a href="https://github.com/Abhishekabh99" target="_blank" rel="noreferrer"><FaGithub/></a>
    <a href="https://www.instagram.com/abhicornell/" target="_blank" rel="noreferrer"><BsInstagram/></a>
        </div>
  )
}

export default HeaderSocials