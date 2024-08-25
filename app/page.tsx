"use client"

import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroVid from "../public/hero-vid.gif"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import SplitType from "split-type";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

export default function Home() {

  const elementsRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      
      const ctx = gsap.context(() => {
        const titles = gsap.utils.toArray(".rotate-text");
        const tl = gsap.timeline();
        const tl2 = gsap.timeline({repeat: -1, defaults: {duration: 0.5, delay: 0.55}});
        
        titles.forEach(title =>{
          const splitTitle = new SplitType(title as HTMLElement);

          tl.to('.main-text', {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            delay:2.5,
            stagger: 1
          })

          tl.to('.rotate-text', {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            stagger: 1
          })

          // tl.to('.main-p', {
          //   y: 0,
          //   autoAlpha: 1,
          //   duration: 1.5,
          //   delay:0.5,
          //   rotateX: 0
          // })
          
          tl2.from(splitTitle.chars, {
            opacity: 0,
            y:80,
            rotateX: -90,
            stagger: 0.02,

          }, "<")
          .to(splitTitle.chars, {
            opacity:0,
            y: -80,
            rotateX: 90,
            stagger: 0.02,
          }, "<1")

        });

      }, elementsRef);

      return () => ctx.revert(); 
    }
  }, []);

  return (

    <><div id="wrapper-div" className="w-screen">
      <NavBar />

      <main className="relative" ref={elementsRef}>
        {/* ------------------------ Hero Content ------------------------ */}
        <div className="mx-1 h-screen flex justify-center items-center">
          <div className="hero-text z-10 mix-blend-difference flex flex-col items-center font-belanosima text-6xl text-white md:mt-8">
            <span className="main-text">Seek</span>
            <br />
            <span className="main-text">The</span>
            <br />
            <div className="text-wrapper flex flex-col items-center md:mt-2">
              <span className="rotate-text leading-[0]">Unusual</span>
              <span className="rotate-text leading-[0]">Innovation</span>
              <span className="rotate-text leading-[0] text-cyan-500">Maverick</span>
              <span className="rotate-text leading-[0]">Difference</span>
              <span className="rotate-text leading-[0]">Distinction</span>
            </div>
            {/* <p className="main-p font-rubik mt-16 mx-8 md:leading-normal lg:mt-24 text-cyan-500 z-40">
      We push boundaries, explore new possibilities, and craft visuals that leave a lasting impression. At Maverick, creativity knows no limits.
    </p> */}
          </div>
        </div>
        <Image className="-z-50" priority sizes="100%" src={"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGc5b3F0Y2l5bnltcWp5NnI2aHhtZGc0c2J6NmQ2bmZnY3Z1Mmo1ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lh6F0BF0GCazK/giphy.webp"} alt={"hero section gif"} fill={true}></Image>
        {/* ------------------------ Hero Content ------------------------ */}
      </main>

      <Work />

      <Services />

      <AboutUs />

      <ContactUs />

    </div><Footer /></>
  );
}
