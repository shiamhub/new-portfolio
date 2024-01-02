"use client"
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import { skills } from '@/data/skills';
import Image from 'next/image';

type SkillsProps = {
    id: number;
    title: string;
    images: string;
    description: string;
    health: number;
    rating: string;
};

export default function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();
        const pin = mm.add({
            // isMobile: '(max-width: 375px)',
            isTablet: '(max-width: 768px)',
            isDesktop: '(min-width: 769px)',
        }, (context: any) => {
            const { isMobile, isTablet, isDesktop } = context.conditions;
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 25%',
                    end: isDesktop ? '+=5000' : '+=5300',
                    scrub: true,
                    pin: true,
                    markers: true,
                },
            });
            tl.to('.section', {
                translateX: (i) => (i % 2 === 0 ? isDesktop ? '-380vw' : '-540vw' : '100vw'),
                ease: 'none',
                duration: (i) => (i % 2 === 0 ? isDesktop ? 6 : 6 : 5),
            });
        });
        return () => {
            pin?.kill();
        };
    }, [containerRef]);
    

    return (
        <div className=''>
            <div className="lg:h-[600vh] md:h-[640vh] overflow-hidden px-10 container">
            <div ref={containerRef} className="flex relative w-full ">
                {skills.map((skill, index) => (
                    <div
                        key={skill.id}
                        className={`section w-[300vw] flex relative ${index % 2 === 0 ? 'mt-0' : 'mt-64'
                            }`}
                    >
                        <div className="h-48 w-48 flex justify-center items-center flex-col border-2">
                            {skill?.images && <Image
                                src={skill?.images}
                                alt={'logo'}
                                width={100}
                                height={100}
                            ></Image>}
                            <h1>{skill?.title}</h1>
                        </div>
                    </div>
                ))}
               
            </div>
        </div>
        </div>

    );
}