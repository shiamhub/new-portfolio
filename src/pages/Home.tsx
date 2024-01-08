"use client"
import { gsap } from 'gsap'
import React, { useEffect, useRef } from 'react'

export default function Home() {
  const on = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.set(on.current, { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo(on.current, "x", { duration: 0.6, ease: "power3" }),
      yTo = gsap.quickTo(on.current, "y", { duration: 0.6, ease: "power3" });

    window.addEventListener("mousemove", e => {
      xTo(e.clientX);
      yTo(e.clientY);
    });

  }, [])


  return (
    <>
      {/* <div className="circle"> */}
        <div ref={on} className='circle w-12 z-20 h-12 flex justify-center items-center pointer-events-none fixed '>
          <h1 className='text-black z-0 text-sm'>SSA</h1>
        </div>
      {/* </div> */}
      <div className='pt-80 text-center space-y-5'>
        <h1 className=" text-5xl font-bold">{`Hello, I'm Sk Shiam Ali`}</h1>
        <h3 >Web Developer</h3>
        <p className='w-3/5 mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos deserunt minus quam modi debitis nulla? Repellat, temporibus dignissimos. Incidunt natus voluptas necessitatibus similique ea nam ad non earum iste iusto?</p>
      </div>
    </>
  )
}


