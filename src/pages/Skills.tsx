"use client"
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import { skills } from '@/data/skills';

export default function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 25%',
                end: '+=800',
                scrub: 1,
                pin: true,
                markers: true,
            },
        });
        tl.to('.section', {
            translateX: (i) => (i % 2 === 0 ? '-100vw' : '100vw'),
            ease: 'none',
            duration: (i) => (i % 2 === 0 ? 4 : 4),
        });
        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="h-[120vh] overflow-hidden">
            <h1>Skills</h1>
            <div ref={containerRef} className="flex relative w-full ">
                {skills.map((skill, index) => (
                    <div key={skill.id} className={`section w-[200vw] flex relative ${index % 2 ===0 ? 'mt-0' : 'mt-36'}`}>
                        <div className={`flex flex-wrap gap-5 lg:gap-5 justify-center`}>
                            <div key={skill.id} className="flex justify-around items-center gap-2">
                                <div className="indicator">
                                    <div className="grid place-items-center">
                                        <img className="w-16 lg:w-24 rounded-xl" src={skill.images} alt="logo" />
                                    </div>
                                </div>
                                <h1 className="font-bold text-xl lg:text-center lg:mt-4 mt-0">{skill.title}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}



