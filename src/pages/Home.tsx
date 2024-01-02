"use client"
import { gsap } from 'gsap'
import React, { useEffect, useRef } from 'react'

export default function Home() {
  const on = useRef<HTMLDivElement>(null)

  const commonRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const pin = gsap.from(commonRef.current, {
      duration: 3,
      autoAlpha: 1,
      ease: "none",
      delay: 2,
    })
  }, [])

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
      <div ref={on} className='w-12 z-10 h-12 flex justify-center items-center pointer-events-none fixed rounded-full bg-yellow-400'>SSA</div>
      <div className="h-full">
        <video className='mx-auto relative -z-10 dark:opacity-90 opacity-50' src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-fbca2.appspot.com/o/Animated.mp4?alt=media&token=807d4ae1-f8a5-422c-9668-4935850a4aca" autoPlay muted loop></video>
      </div>
      <div ref={commonRef} className='opacity-0'>

        <div className='text-start absolute lg:top-1/4 top-[7%] lg:left-[10%] left-8 w-10/12'>
          <h1 className='text-xl text-white dark:text-white lg:text-4xl font-bold'>{`Hello, I'm Sk Shiam Ali`}</h1>
          <h6 className='text-white lg:text-3xl bor'>Web Developer </h6>
        </div>

      </div >
    </>
  )
}


