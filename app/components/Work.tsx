"use client"

import Link from "next/link"
import { Button } from "@/components/ui"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-black">
      <div className="container grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
        <h2 className="col-span-full text-3xl font-bold">Our Featured Projects</h2>
        <div className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
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
        <div className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
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
        <div className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
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
        <div className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
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
        <div className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
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
        <div className="relative overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
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