import React from 'react'
// import homeImg from "../assets/homeimg1.png"
import ImageSlider from './ImageSlider'
import { FaCircleArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <section
  id="home"
  className="bg-heroBg text-white flex items-center pt-28 md:h-screen md:px-28"
>
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 gap-12">
    {/* Left Side */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-secondary font-bold mb-4 leading-snug">
        Start Your Journey to Mental Wellness
      </h1>
      <p className="text-base md:text-lg mb-8">
        sfaewhbfjfaew era kerl bheral sfjiog jerj gaerh er ghera fhewlfhh rwh fr 34hq2rtbhlerkj berkl bterk btlekr...
      </p>
      <button className="bg-primary text-white py-3 px-6 font-medium rounded-md hover:bg-primary/90">
        <a href="#login" className="flex gap-2 items-center justify-center">
          <span>Get Started</span>
          <FaCircleArrowRight/>
        </a>
      </button>
    </div>

    {/* Right Side */}
    <div className="w-full md:w-1/2 h-full flex justify-center">
      <ImageSlider />
    </div>
  </div>
</section>
  )
}

export default Home
