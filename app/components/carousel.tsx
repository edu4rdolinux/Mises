"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import images from '../images.json';
 
function Redirection() {
    
}

const CarouselNext = () => {
    return (
        <div className="Carousel">
            <Carousel>
                {images.map((image, index) => (
                    <div key={index}>
                        <Image
                            className="mt-16"
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={720}
                            onClick={undefined}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselNext;
