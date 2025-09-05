import React, { useState, useEffect } from "react";
import homeImg1 from "../assets/homeimg1.png"
import homeImg2 from "../assets/homeimg2.png"
import homeImg3 from "../assets/homeimg3.png"
import homeImg4 from "../assets/homeimg4.png"
import homeImg5 from "../assets/homeimg5.png"
export default function ImageSlider() {
  let images = [
    homeImg3,
    homeImg2,
    homeImg5,
    homeImg1,
    homeImg4,
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 3s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-2xl shadow-lg">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
