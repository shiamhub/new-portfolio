"use client"
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react'


export default function Projects() {
    const commonRef = useRef([]);
    commonRef.current = [];
    useEffect(()=> {
        gsap.registerPlugin(ScrollTrigger)
        commonRef.current.forEach((el: any, index) => {
            gsap.fromTo(el, {
                autoAlpha: 0,                
            }, {
                duration: 1,
                autoAlpha: 1,
                ease: "none",
                scrollTrigger: {
                    id: `div-${index+1}`,
                    trigger: el,
                    start: "top center+=100",
                    toggleActions: "play none none reverse",
                } as any
            })
        })
    }, [])

    const addToRefs = (el : any) => {
        if (el && !commonRef.current.includes(el as never)) {
            commonRef.current.push(el as never);
        }
    }

    return (
        <div className='container mb-56'>
            <div ref={addToRefs} className="w-full h-80 bg-slate-500"></div>
            <div ref={addToRefs} className="w-full h-80 bg-slate-500 my-8"></div>
            <div ref={addToRefs} className="w-full h-80 bg-slate-500"></div>
        </div>
    )
}
