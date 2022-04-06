import { Carousel } from "react-responsive-carousel";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic from "./images-slides/logo.jpeg";
import pic2 from "./images-slides/pic2.jpeg";
import pic3 from "./images-slides/pic3.jpeg";
import pic4 from "./images-slides/pic7.webp";
import Image from "next/image";

const carousel = () => {
  return (
    <Carousel showThumbs={false}>
      <div>
        <Image src={pic4} width="700" height="400" />
        <p> 1</p>
      </div>
      <div>
        <Image src={pic2} width="700" height="400" />
      </div>
      <div>
        <Image src={pic3} width="700" height="400" />
      </div>
      <div>
        <Image src={pic} width="700" height="400" />
      </div>
    </Carousel>
  );
};

export default carousel;
