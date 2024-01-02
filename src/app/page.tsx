"use client"
import Home from '@/pages/Home'
import React from 'react'
import { motion } from 'framer-motion';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';

export default function page() {
  return (
    <>
      <Home></Home>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </>
  )
}
