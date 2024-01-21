import React from 'react'
import Image from './Image'
import './ImageGrid.scss'
import { images } from '../constants'



const ImageGrid = () => {

    const imageList = [
        {
            src: images.Camping,
            alt: "Camping"
        },
        {
            src: images.BBQ,
            alt: "BBQ"
        },
        {
            src: images.Sawing,
            alt: "Sawing"

        },
        {
            src: images.Construction,
            alt: "Construction"
        },
        {
            src: images.Gapyeong,
            alt: "Gapyeong"
        },
        {
            src: images.Gwangjang,
            alt: "Gwangjang"
        },
        {
            src: images.Kayak,
            alt: "Kayak"
        },
        {
            src: images.EngineBay,
            alt: "Engine Bay"
        },
        {
            src: images.Niagara,
            alt: "Niagara"
        }
    ]

    console.log(images.Niagara)

    return (
        <div className='imageGrid'>
            {imageList.map((image) => <Image image={image} />)}
        </div>
    )
}

export default ImageGrid