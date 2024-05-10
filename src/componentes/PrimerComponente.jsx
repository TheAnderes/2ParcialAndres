import React from 'react'
import './PrimerComponente.css'
import yoga from '../assets/Rectangle.png'
import play from '../assets/Group 4.png'

const primerComponente = () => {
    return (
        <div className='primerComp'>
            <img className='yoga' src={yoga} alt="Imagen Yoga" />
            <img className='play' src={play} alt="Imagen Play" />
        </div>
    )
}

export default primerComponente;