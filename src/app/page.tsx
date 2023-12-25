"use client"
import Home from '@/pages/Home'
import React from 'react'
import { motion } from 'framer-motion';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};
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
