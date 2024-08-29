"use client"

import Image from "next/image"
import aboutImg from "../../public/aboutImg.jpg"
import { useRef } from "react";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Component() {

  const aboutRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        tl
        .fromTo(".about-text",{
          x:-300,
          opacity:0,
          visibility: "hidden"
        }, {
          x:0,
          autoAlpha: 1,
          duration: 2,
          scrollTrigger: {
            trigger: ".about-text",
            start: "-20% 50%",
            end: "20% 30%",
            scrub:true
          }
        })
        .fromTo(".about-img",{
          x: 300,
          opacity:0,
          visibility: "hidden",
        }, {
          x:0,
          autoAlpha: 1,
          duration: 2,
          scrollTrigger: {
            trigger: ".about-text",
            start: "-20% 50%",
            end: "20% 30%",
            scrub:true
          }
        })

      }, aboutRef);

      return () => ctx.revert(); 
    }
  }, []);


    return (
      <section id="about-section" className="w-full py-12 md:py-24 lg:py-32 bg-white font-rubik overflow-hidden" ref={aboutRef}>
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="about-text space-y-4">
            <div className="space-y-2 text-wrap">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-belanosima">About Our Marketing Agency</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are a team of passionate marketing professionals dedicated to helping businesses of all sizes achieve
                their goals. With years of experience in the industry, we offer a wide range of services to meet your
                needs.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-semibold">Our Services</h3>
                <p className="text-muted-foreground">
                  - Digital Marketing
                  <br />- Social Media Management
                  <br />- Content Creation
                  <br />- Search Engine Optimization
                  <br />- Branding and Design
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-semibold">Why Choose Us?</h3>
                <p className="text-muted-foreground">
                  - Proven track record of success
                  <br />- Personalized approach to each client
                  <br />- Transparent and data-driven strategies
                  <br />- Collaborative and communicative team
                </p>
              </div>
            </div>
          </div>
          <Image
            src= {aboutImg}
            width="550"
            height="310"
            alt="About Us"
            className="about-img mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>
    )
  }