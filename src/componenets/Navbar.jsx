import React, { useState, useEffect } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import "./Navbar.css"
import { motion } from "motion/react"
import logo  from "../assets/logo.png"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if(targetElement) {
      // console.log(targetElement);
      window.scrollTo({   
        top: targetElement.offsetTop,
        behavior: "smooth"
      })
    }
  }
  const navlinks = (
    <ul className='font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0'>
      <li>
        <motion.a whileHover = {{scale: 1.1}} whileTap={{scale: 0.9}} href="#home" onClick={(e) => {e.preventDefault(); handleCloseMenu(); handleScrollTo('home')
        }} className={`text-white ${activeSection === 'home' ? 'isActive' : ''}`}>Home</motion.a>
      </li><li>
        <motion.a href="#services" whileHover = {{scale: 1.1}} whileTap={{scale: 0.9}} onClick={(e) => {e.preventDefault(); handleCloseMenu(); handleScrollTo('services')
        }}  className={`text-white ${activeSection === 'services' ? 'isActive' : ''}`}>Services</motion.a>
      </li><li>
        <motion.a href="#resources" whileHover = {{scale: 1.1}} whileTap={{scale: 0.9}} onClick={(e) => {e.preventDefault(); handleCloseMenu(); handleScrollTo('resources')
        }}  className={`text-white ${activeSection === 'resources' ? 'isActive' : ''}`}>Resources</motion.a>
      </li><li>
        <motion.a href="#about"  whileHover = {{scale: 1.1}} whileTap={{scale: 0.9}} onClick={(e) => {e.preventDefault(); handleCloseMenu(); handleScrollTo('about')
        }} className={`text-white ${activeSection === 'about' ? 'isActive' : ''}`}>About</motion.a>
      </li><li>
        <motion.a href="#testimonial" whileHover = {{scale: 1.1}} whileTap={{scale: 0.9}} onClick={(e) => {e.preventDefault(); handleCloseMenu(); handleScrollTo('testimonial')
        }}  className={`text-white ${activeSection === 'testimonial' ? 'isActive' : ''}`}>Inspiration</motion.a>
      </li>
    </ul>
  )
  const handleCloseMenu = () => {
    setIsOpen(false);
  }
  const handleScroll = ()=> {
    const sections = ['home', 'services', 'about', 'resources', 'testimonial'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const element = document.getElementById(section);
      if(element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if(scrollPosition >= offsetTop && scrollPosition <= offsetTop + height) {
        setActiveSection(section);
        }
      }
    })
  }

  return (
    <header className='navbar w-full bg-heroBg text-white py-4 px-4 fixed top-0 left-0 tight-0 z-10 '>
      <div className="container mx-aut0 flex justify-between items-center h-full">
        {/* {logo} */}
        <div className='flex flex-row justify-center items-center'>
          <a href="">
            <img src="/logo.png" alt="" className='md:h-12 md:w-18 h-10 w-12'/>
          </a>
          <span className='font-apple text-primary font-bold text-xl pt-4 px-2'>MediBloom</span>
        </div>
        {/* {nav items} */}
        <div>
          <nav className='hidden md:flex flex-grow justify-center'>
            {navlinks}
          </nav>
        </div>
        <nav className="hidden md:block">
          <a onClick={e => {e.preventDefault();
              handleScrollTo('contact')}} href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded'>
            Contact Us
          </a>
        </nav>
        <div className='block md:hidden'>
          <button onClick={handleToggle} className={`text-white focus:outline-none ${isOpen ? "border border-white" : "" }`}>
            <HiMenuAlt3 className='size-7'/>
          </button>
        </div>
      </div>
      {/* mobile nav items */}
      {
        isOpen && (
          <nav className='absolute top-full left-0 w-full bg-heroBg z-20 md:hidden'>
            <ul className='flex flex-col px-4 space-y-3'>
              {navlinks.props.children}
            </ul>
            <li className='py-4 pb-6 px-3 list-none'>
              <motion.a href="#contact" className='text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded' 
              onClick={(e) => {e.preventDefault();
              handleCloseMenu();
              handleScrollTo('contact')}
              }>Contuct Us</motion.a>
            </li>
          </nav>
        )
      }
    </header>
  )
}

export default Navbar
