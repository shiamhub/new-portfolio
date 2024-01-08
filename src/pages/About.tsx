import Magnetic from '@/lib/animation/Magnetic'
import React from 'react'

const About = () => {
  return (
    <div className='container mb-28'>
      <h1 className='text-center text-5xl font-medium mt-28 mb-16'>About Me</h1>
      <div className=" flex items-start justify-between gap-20">

        <div className="">
          <p>As a web developer, I want to create high-quality, interactive, and user-friendly web applications using modern front-end technologies. I strive to build robust and scalable applications that deliver an exceptional user experience.</p>
        </div>
        <Magnetic>
          <div className="glare-animation bg-slate-400 rounded-md p-8">
            Appstick
          </div>
        </Magnetic>
      </div>
    </div>
  )
}

export default About