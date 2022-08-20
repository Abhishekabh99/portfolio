
import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
    return (
        <div className='cta'>
            {/* first button */}
            <a href={CV} download className='btn'>Download CV</a>
            {/* second button we gave id #contact so that we can just click on this and it will take us to that section */}
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA