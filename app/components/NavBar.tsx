"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";


export default function NavBar() {

  const headRef = useRef(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ctx = gsap.context(() => {
        let tl = gsap.timeline();

        tl.to('.menu-anim', {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          delay:1,
          stagger: 0.2
        })
      
      }, headRef);

      return () => ctx.revert();
    }
  }, []);




    return(
        <div className="p-4 z-50 fixed w-full text-white mix-blend-difference" ref={headRef}>
            <div className="font-belanosima text-l md:text-2xl flex justify-between">
                <a href="/" className="menu-anim  relative inline-block group">
                <span className="cursor-pointer text-xl md:text-3xl select-none transition-all duration-500 ease-in-out group-hover:translate-x-[100px] group-hover:opacity-0">
                  Maverick
                </span>
                <span className="text-cyan-500 absolute top-0 left-0 cursor-pointer text-xl md:text-3xl select-none transition-all duration-500 ease-in-out transform translate-x-[100px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                  M
                </span>
                </a>
                <a href="#work-section"><span className="menu-anim mt-1 menu-item cursor-pointer select-none md:mt-0">Work</span></a>
                <a href="#services-section"><span className="menu-anim mt-1 menu-item cursor-pointer select-none md:mt-0">Services</span></a>
                <a className="menu-anim hidden md:block" href="#about-section"><span className="menu-item cursor-pointer select-none">About Us</span></a>
                <a href="#contact-section" className="menu-anim mt-1 flex flex-row md:mt-0"><span className="menu-item cursor-pointer font-bold text-l md:text-2xl select-none hover:skew-x-12 duration-500">Contact Us</span></a>
            </div>
        </div>
    )
}