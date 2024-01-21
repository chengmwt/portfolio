import React from 'react'
import './Image.scss'


const Image = ({ image }) => {

    // console.log(image)

    return (
        <div className='image'>
            <img src={image.src} alt={image.alt} />
        </div>
    )
}

export default Image