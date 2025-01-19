import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./carousel.scss";
import { assets } from "../assets/assets";

function Sliders() {
  const arr = [
    `${assets.extensions}`
   ,`${assets.fast_mobile}`,
    `${assets.slider}`
  ];

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const carousel = carouselRef.current;

    const hoverAnimation = gsap.to(carousel, {
      x: () => {
        if (currentIndex === arr.length - 1) return `-${(arr.length - 1) * 100}%`; 
        return `-${(currentIndex + 1) * 100}%`; 
      },
      paused: true,
      duration: 20,
      ease: "power1.inOut",
    });

    const handleMouseEnter = () => {
      if (currentIndex !== arr.length - 1) hoverAnimation.play();
    };

    const handleMouseLeave = () => hoverAnimation.reverse();

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [currentIndex, arr.length]);

  
  const handleNext = () => {
    if (currentIndex < arr.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      gsap.to(carouselRef.current, {
        x: `-${(currentIndex + 1) * 100}%`,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      gsap.to(carouselRef.current, {
        x: `-${(currentIndex - 1) * 100}%`,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div className="carousel_wrapper">
      <div className="carousel_container" ref={carouselRef}>
        {arr.map((imgSrc, index) => (
          <div className="carousel_item" key={index}>
            <img src={imgSrc} alt={`Slide ${index + 1}` } height="500px" />
          </div>
        ))}
      </div>
      <div className="btns">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
}

export default Sliders;
