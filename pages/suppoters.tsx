import Link from "next/link";
import React from "react";
import { useState } from "react";
import { sliderData } from "./slider";

const suppoters = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  return (
    <div className="text-supp">
        <h1>Our Supporters</h1>
      <div className="slider1">
        {sliderData.map((slide, index) => {
          return (
            <div
              className={index == currentSlide ? "slide1 current" : "slide1"}
              key={index}
            >
              {index === currentSlide && (
                <div>
                  <img src={slide.image} alt="" />
                  <div className="main-content">
                  <div className="content">
                    <h2> {slide.heading}</h2>
                    <p>{slide.desc}</p>
                    <hr></hr>
                  <Link href={'#donate-s'}>
                    <a  className="help">Donate</a>
                  </Link>
                  </div>
                </div></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default suppoters;
