"use client"
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react'
import { skills } from '@/data/skills'

type skillsProps = {
    id: number;
    title: string;
    images: string;
    description: string;
    health: number;
    rating: string;
    style: {
        aos: string;
    };
}

export default function Skills() {
    const sqref = useRef<HTMLDivElement>(null)
    const ontref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const pin = gsap.fromTo(sqref.current, {
            translateX: 0,
        }, {
            translateX: "-200vw",
            ease: "none",
            duration: 2,
            scrollTrigger: {
                trigger: ontref.current,
                start: "top 30%",
                end: "2000 top",
                scrub: 0.6,
                pin: true
            }
        })
        return () => {
            pin.kill()
        }
    }, [])
    return (
        <div className='overflow-hidden'>
            <h1>Skills</h1>
            <div ref={ontref}>
                <div ref={sqref} className="flex relative h-[100vh] w-[300vw] flex-row">
                    <div className={`flex flex-wrap gap-5 lg:gap-5 justify-center`}>
                        {
                            skills.map(skill => <div key={skill.id}>
                                <div className="flex justify-around items-center gap-2">

                                    <div className="indicator">

                                        <div className="grid place-items-center">
                                            <img className="w-16 lg:w-24 rounded-xl" src={skill.images} alt="logo" />
                                        </div>
                                    </div>

                                </div>
                                <h1 className="font-bold text-xl lg:text-center lg:mt-4 mt-0">{skill.title}</h1>

                            </div>
                            )
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


{/* <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-blue-600'>ss</div> */}
                    {/* <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-rose-500'>ss</div> */}
                    {/* <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-orange-400'>ss</div> */}