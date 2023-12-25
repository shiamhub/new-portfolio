"use client"
import React from 'react';

import { AiFillGithub } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { RiWhatsappFill } from 'react-icons/ri';
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react'
import Connect from '@/components/comman/Connect';
import ContactFrom from '@/components/comman/ContactFrom';


export default function Contact() {
    const commonRef = useRef<any>([]);
    commonRef.current = [];
    useEffect(()=> {
        gsap.registerPlugin(ScrollTrigger)
        commonRef.current.forEach((el: any, index: number) => {
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
        console.log(commonRef.current)
    }

    return (
        <div className='container'>
            <h1 className="text-4xl text-center font-bold lg:mt-20 mb-12">Contact me</h1>

            <div  ref={addToRefs} className='flex flex-col-reverse lg:flex-row gap-5  bg-slate-300 rounded-lg p-6'>
                <div className='lg:w-2/5'>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7355.736070922026!2d89.57418423931325!3d22.80735321724649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1689541033468!5m2!1sen!2sbd" loading="lazy" referrerPolicy="no-referrer" className='w-full h-72 rounded-xl rounded-b-none'></iframe>
                    </div>

                    <div className=' flex lg:flex-row items-center justify-center gap-8 lg:mt-6 my-3'>
                        <AiFillGithub className='lg:text-3xl cursor-pointer hover:text-blue-400'></AiFillGithub>
                        <BsDiscord className='lg:text-3xl cursor-pointer hover:text-blue-400'></BsDiscord>
                        <SiGmail className='lg:text-3xl cursor-pointer hover:text-blue-400'></SiGmail>
                        <RiWhatsappFill className='lg:text-3xl cursor-pointer hover:text-blue-400'></RiWhatsappFill>
                    </div>
                </div>

                <div className='lg:w-3/5'>
                    <ContactFrom></ContactFrom>
                </div>
            </div>
            <Connect></Connect>
        </div>
    );
}

