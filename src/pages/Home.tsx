import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { BiSolidDownload } from 'react-icons/bi';
import { TbExternalLink } from 'react-icons/tb';
import Marquee from 'react-fast-marquee';
import { skills } from '@/data/skills';
import Image from 'next/image';

export default function Home() {
  return (
    <div id='home'>
      <video className='mx-auto relative opacity-30 h-full' src="https://firebasestorage.googleapis.com/v0/b/jobfind-4aa18.appspot.com/o/Untitled-design.mp4?alt=media&token=9b88e7da-00c2-4d7f-bf22-281ab3cd2150" autoPlay muted loop></video>
      <div className='text-start absolute lg:top-1/4 top-[7%] lg:left-[10%] left-8 w-10/12'>
        <h1 className='text-xl lg:text-4xl font-bold dark:text-white'>{`Hello, I'm Sk Shiam Ali`}</h1>
        <h6>Web Developer</h6>
        <p className='lg:w-7/12 w-3/5 hidden lg:block mt-2 dark:text-white'>Welcome to my portfolio! Arafat Dayan is a MERN-Stack Web Developer, and a passion for creating Visually Stunning web experiences.</p>
        <p className='lg:w-7/12 w-full lg:hidden'>Welcome to my portfolio.</p>
        <div className='lg:mt-5 mt-2 lg:hidden dark:text-white'>
          <a className='btn btn-outline mr-3 lg:btn-xl btn-sm dark:text-white' href="./../../assets/Black and White Minimalist Professional Resume (11).pdf" target='_blank'><TbExternalLink className='text-2xl'></TbExternalLink>View Resume</a>
          <a className='btn btn-outline btn-sm lg:btn-2xl mt-2 dark:text-white' href="/src/assets/Black and White Minimalist Professional Resume (11).pdf" download={true}><BiSolidDownload className='text-2xl'></BiSolidDownload> Download Resume</a>
        </div>
        <div className='lg:mt-5 mt-2 hidden lg:block'>
          <a className='btn btn-outline mr-3 lg:btn-xl dark:text-white' href="/src/assets/Black and White Minimalist Professional Resume (11).pdf" target='_blank'><TbExternalLink className='text-2xl'></TbExternalLink>View Resume</a>
          <a className='btn btn-outline lg:btn-2xl dark:text-white' href="/src/assets/Black and White Minimalist Professional Resume (11).pdf" download={true}><BiSolidDownload className='text-2xl'></BiSolidDownload> Download Resume</a>
        </div>
        <div className='lg:mt-20 mt-4'>
          <Marquee speed={80} className='w-1/4'>
            {
              skills.map(a => <div key={a.id}>
                <Image className='lg:w-20 w-10 lg:ml-5 ml-3' src={a.images} width={100} height={100} alt="logo"></Image>
                {/* <img className='lg:w-20 w-10 lg:ml-5 ml-3' src={a.images} alt="" /> */}
              </div>)
            }
          </Marquee>
        </div>
      </div>
      <div className='text-start absolute lg:top-1/4 top-[21%] lg:right-[9%] right-7  dark:text-white'>
        <AiFillGithub className='lg:text-7xl cursor-pointer hover:text-blue-400'></AiFillGithub>
        <BsDiscord className='lg:text-7xl cursor-pointer hover:text-blue-400 my-1 lg:my-0'></BsDiscord>
        <SiGmail className='lg:text-7xl cursor-pointer hover:text-blue-400'></SiGmail>
      </div>
    </div >
  )
}


