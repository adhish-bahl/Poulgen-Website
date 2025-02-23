import React from 'react'
import { Carousel } from "@material-tailwind/react";
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'

const HomeCarousel = () => {
    return (
        <Carousel className="rounded-xl">
            <img
                src={image1}
                alt="image1"
                className="h-full w-full object-cover"
            />
            <img
                src={image2}
                alt="image2"
                className="h-full w-full object-cover"
            />
            <img
                src={image3}
                alt="image3"
                className="h-full w-full object-cover"
            />
            <img
                src={image4}
                alt="image4"
                className="h-full w-full object-cover"
            />
        </Carousel>
    )
}

export default HomeCarousel
