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
    <div ref={commonRef} className='opacity-0'>
      <div ref={on} className='flair rounded-full bg-yellow-400'></div>
      <video className='mx-auto relative opacity-30 h-full' src="https://firebasestorage.googleapis.com/v0/b/jobfind-4aa18.appspot.com/o/Untitled-design.mp4?alt=media&token=9b88e7da-00c2-4d7f-bf22-281ab3cd2150" autoPlay muted loop></video>
      <div className='text-start absolute lg:top-1/4 top-[7%] lg:left-[10%] left-8 w-10/12'>
        <h1 className='text-xl text-primary lg:text-4xl font-bold'>{`Hello, I'm Sk Shiam Ali`}</h1>
        <h6 className='text-secondary lg:text-3xl bor'>Web Developer </h6>

        {/* <div className='lg:mt-20 mt-4'>
          <Marquee speed={80} className='w-1/4'>
            {
              skills.map(a => <div key={a.id}>
                <Image className='lg:w-20 w-10 lg:ml-5 ml-3' src={a.images} width={100} height={100} alt="logo"></Image>
              </div>)
            }
          </Marquee>
        </div> */}
      </div>

    </div >
  )
}


