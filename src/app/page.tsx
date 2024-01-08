"use client"
import Home from '@/pages/Home'
import React from 'react'
import { motion } from 'framer-motion';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import About from '@/pages/About';

export default function page() {
  return (
    <>
      <div className="h-full fixed top-0 left-0 right-0 w-full -z-50">
        <video className='mx-auto relative -z-10 dark:opacity-90 opacity-50' src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-fbca2.appspot.com/o/Animated.mp4?alt=media&token=807d4ae1-f8a5-422c-9668-4935850a4aca" autoPlay muted loop></video>
        <video className='mx-auto relative -z-10 dark:opacity-90 opacity-50' src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-fbca2.appspot.com/o/Animated.mp4?alt=media&token=807d4ae1-f8a5-422c-9668-4935850a4aca" autoPlay muted loop></video>
        <video className='mx-auto md:hidden relative -z-10 dark:opacity-90 opacity-50' src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-fbca2.appspot.com/o/Animated.mp4?alt=media&token=807d4ae1-f8a5-422c-9668-4935850a4aca" autoPlay muted loop></video>
        <video className='mx-auto md:hidden relative -z-10 dark:opacity-90 opacity-50' src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-fbca2.appspot.com/o/Animated.mp4?alt=media&token=807d4ae1-f8a5-422c-9668-4935850a4aca" autoPlay muted loop></video>
      </div>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </>
  )
}
