"use client"
import Image from "next/image";
import createImg from "../../public/create.jpg"
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";
import { useRef } from "react";
import gsap from "gsap"


export default function CreatePost(){

  const createRef = useRef(null);


  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      
      const ctx = gsap.context(() => {
        const tl3 = gsap.timeline();

        tl3.fromTo(".title-create", 
        { 
          y:-100,
          opacity:0,
          visibility: "hidden"
        }, { 
          y: 0, 
          autoAlpha: 1, 
          stagger: 0.25,
          ease: 'power1.in',
          scrollTrigger: {
            trigger: ".title-create",
            start: "-20% 50%",
            end: "120% 30%",
            scrub: true
          }
        });
      }, createRef);

      return () => ctx.revert(); 
    }
  }, []);

    return(
<main id="contact-section" className="flex items-center justify-center text-wrap h-[170vh]">
  <div className="font-rubik bg-black flex items-center justify-center h-full flex-col w-full px-6 md:px-8 lg:px-12">
    <div className="whitespace-pre relative mb-12 text-center mt-20" ref={createRef}>
      <span className="title-create cursor-default text-white font-belanosima hover:text-black text-5xl sm:text-6xl">Talk </span>
      <span className="title-create cursor-default text-white font-belanosima hover:text-black text-5xl sm:text-6xl">To </span>
      <span className="title-create cursor-default text-white font-belanosima hover:text-black text-5xl sm:text-6xl">Us</span>
    </div>
    <div className="flex flex-col md:flex-row justify-between w-full h-auto md:h-[80vh] gap-8">
      <form className="text-white relative flex flex-col basis-1/2 space-y-4">
        <label className="text-xl font-belanosima" htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          required
          className="rounded-md focus:bg-black focus:text-white text-black w-full bg-white p-2"
        />
        <label className="text-xl font-belanosima" htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          className="rounded-md focus:bg-black focus:text-white text-black w-full bg-white p-2"
        />
        <label className="text-xl font-belanosima" htmlFor="content">Message</label>
        <textarea
          name="content"
          required
          className="rounded-md focus:bg-black focus:text-white h-36 text-black bg-white p-2"
        ></textarea>
      </form>
      <div className="overflow-hidden rounded-lg basis-1/2 flex justify-center items-center">
        <Image
          className="rounded-md hover:invert duration-700 hover:scale-125"
          width={400}
          height={400}
          src={createImg}
          alt="Man in a dark desert"
        />
      </div>
    </div>
    <button className="mt-10 w-full md:w-auto font-belanosima bg-black text-white p-4 rounded-lg border-4 border-white text-xl hover:bg-white hover:text-[#eb5e46] duration-500 hover:shadow-inner hover:tracking-[0.75em] hover:font-bold hover:whitespace-pre" type="submit"> SUBMIT</button>
  </div>
</main>

    )
}