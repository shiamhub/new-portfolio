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
    const containerRef1 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();
        const pin = mm.add({
            isMobile: '(max-width: 368px)',
            isTablet: '(min-width: 369px) and (max-width: 768px)',
            isDesktop: '(min-width: 769px)',
        }, (context: any) => {
            const { isMobile, isTablet, isDesktop } = context.conditions;
            console.log("🚀 ~ file: Skills.tsx:31 ~ useEffect ~ isDesktop:", isDesktop)
            console.log("🚀 ~ file: Skills.tsx:31 ~ useEffect ~ isTablet:", isTablet)
            console.log("🚀 ~ file: Skills.tsx:31 ~ useEffect ~ isMobile:", isMobile)

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: isTablet ? 'top 16%' : 'top 21%',
                    end: isDesktop ? '+=3600' : '+=5000',
                    scrub: true,
                    pin: true,
                    markers: true,
                },
            });
            tl.to('.section', {
                translateX: '-300vw',
                duration: 9
            })

        });

        return () => {
            pin?.kill();
        };
    }, [containerRef]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();
        const pin = mm.add({
            isTablet: '(max-width: 768px)',
            isDesktop: '(min-width: 769px)',
        }, (context: any) => {
            const { isMobile, isTablet, isDesktop } = context.conditions;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef1.current,
                    start: isTablet ? 'top 70%' : 'top 50%',
                    end: isDesktop ? '+=5000' : '+=5300',
                    scrub: true,
                    pin: true,
                    markers: true,
                },
            });
            tl.to('.section1', {
                translateX: '-300vw',
            })

        });

        return () => {
            pin?.kill();
        };
    }, [containerRef]);
    return (
        <div className=''>
            <div className="lg:h-[450vh] md:h-[640vh] overflow-hidden px-10">
                <div ref={containerRef} className="flex relative ">
                    {skills?.slice(0, 12)?.map((skill, index) => (
                        // <Magnetic key={index}>
                        <div
                            key={skill.id}
                            className={` section flex relative`}
                        >
                            <div className="w-48 h-48 flex justify-center items-center flex-col border-2 mx-12">
                                {skill?.images && <Image
                                    src={skill?.images}
                                    alt={'logo'}
                                    width={100}
                                    height={100}
                                ></Image>}
                                <h1>{skill?.title}</h1>
                            </div>
                        </div>
                        // </Magnetic>
                    ))}

                </div>
                <div className='mt-16 ml-36'>
                    <div ref={containerRef1} className="flex relative w-full">
                        {skills?.slice(12, )?.map((skill, index) => (
                            // <Magnetic key={index}>
                            <div
                                key={skill.id}
                                className={` section1 w-[300vw] flex relative`}
                            >
                                <div className="w-48 h-48 flex justify-center items-center flex-col border-2 mx-12">
                                    {skill?.images && <Image
                                        src={skill?.images}
                                        alt={'logo'}
                                        width={100}
                                        height={100}
                                    ></Image>}
                                    <h1>{skill?.title}</h1>
                                </div>
                            </div>
                            // </Magnetic>
                        ))}

                    </div>
                </div>
            </div>
        </div>

    );
}