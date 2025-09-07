import React from "react";
// import homeImg from "../assets/homeimg1.png"
import ImageSlider from "./ImageSlider";
import { FaCircleArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-heroBg text-white flex items-center pt-28 md:h-screen md:px-28"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-3 gap-12">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-title font-bold mb-4 leading-snug">
            Start Your Journey to Mental Wellness
          </h1>
          <p className="font-pacifico font-light text-base md:text-lg mb-8">
            <span className="text-2xl">"S</span>oothe your soul with calm and
            care,
            <br />
            <span className="text-2xl">T</span>ake each moment, breathe fresh
            air,
            <br />
            <span className="text-2xl">A</span>ccept yourself, let healing
            begin,
            <br />
            <span className="text-2xl">R</span>eflect within, find peace
            therein,
            <br />
            <span className="text-2xl">T</span>ogether we rise, strong from
            within."
          </p>
          <button className="bg-primary text-white py-3 px-6 font-medium rounded-md hover:bg-primary/90">
            <a href="#login" className="flex gap-2 items-center justify-center">
              <span>Get Started</span>
              <FaCircleArrowRight />
            </a>
          </button>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 h-full flex justify-center pb-4">
          <ImageSlider />
        </div>
      </div>
    </section>
  );
};

export default Home;
