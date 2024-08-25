"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

export default function Component() {
  const workRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        tl.fromTo(".work-title",{
          y:-100,
          opacity:0,
          visibility: "hidden"
        }, {
          y:0,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: ".work-title",
            start: "-20% 50%",
            end: "120% 30%",
            scrub: true
          }
        })
        .fromTo(".work-card",{
          y: 100,
          opacity:0,
          visibility: "hidden",
        }, {
          y:0,
          autoAlpha: 1,
          stagger: 2,
          scrollTrigger: {
            trigger: ".work-title",
            start: "-20% 50%",
            end: "120% 30%",
            scrub: true
          }
        })

      }, workRef);

      return () => ctx.revert(); 
    }
  }, []);

  return (
    <section id="work-section" className="w-full py-12 md:py-24 lg:py-32 bg-white text-black font-rubik" ref={workRef}>
      <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
        <h2 className="work-title col-span-full text-3xl font-bold font-belanosima">Our Featured Projects</h2>
        <div className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl work-card">
          <Link href="" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View project</span>
          </Link>
          <div className="p-6">
            <h3 className="text-xl font-bold">Acme Website Redesign</h3>
            <p className="mt-2 text-sm">Redesigned the Acme company website with a modern and responsive layout.</p>
            <div className="mt-4 flex items-center justify-between">
              <Button size="sm">View Project</Button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl work-card">
          <Link href="" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View project</span>
          </Link>
          <div className="p-6">
            <h3 className="text-xl font-bold">E-commerce Platform</h3>
            <p className="mt-2 text-sm">Developed a custom e-commerce platform for a leading retail brand.</p>
            <div className="mt-4 flex items-center justify-between">
              <Button size="sm">View Project</Button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl work-card">
          <Link href="" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View project</span>
          </Link>
          <div className="p-6">
            <h3 className="text-xl font-bold">Mobile App Development</h3>
            <p className="mt-2 text-sm">Designed and developed a mobile app for a fitness tracking startup.</p>
            <div className="mt-4 flex items-center justify-between">
              <Button size="sm">View Project</Button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl work-card">
          <Link href="" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View project</span>
          </Link>
          <div className="p-6">
            <h3 className="text-xl font-bold">SaaS Platform</h3>
            <p className="mt-2 text-sm">Built a scalable SaaS platform for a growing software company.</p>
            <div className="mt-4 flex items-center justify-between">
              <Button size="sm">View Project</Button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl work-card">
          <Link href="" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View project</span>
          </Link>
          <div className="p-6">
            <h3 className="text-xl font-bold">Corporate Branding</h3>
            <p className="mt-2 text-sm">Crafted a cohesive brand identity for a leading professional services firm.</p>
            <div className="mt-4 flex items-center justify-between">
              <Button size="sm">View Project</Button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl work-card">
          <Link href="" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View project</span>
          </Link>
          <div className="p-6">
            <h3 className="text-xl font-bold">Web Application</h3>
            <p className="mt-2 text-sm">Developed a complex web application for a fintech startup.</p>
            <div className="mt-4 flex items-center justify-between">
              <Button size="sm">View Project</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}