'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { Container } from '../ui/container'

const Hero = () => {
  const { theme } = useTheme()
  return (
    <section aria-label='Home' id='home' className='h-screen w-full pt-20 flex justify-between items-center overflow-hidden'>
      <Container>
        <div className='relative h-full w-full'>
          <h2 className={`absolute top-56 left-32 font-bold text-[5rem] ${theme === 'dark' ? 'text-gradient-dark' : 'text-gradient-light'} enter-left`}>Welcome</h2>
          <span className='absolute bottom-80 left-80 font-bold text-[4rem] text-lightBrown dark:text-altOxford -rotate-90 enter-bottom'>to</span>
          <div className='absolute top-[20rem] right-24 flex flex-col justify-center items-center fade-in'>
            <h1 className='font-daughter text-[4.5rem] text-toffee dark:text-aquamarine leading-none'>Dunnovative Studios</h1>
            <p className='text-[2.5rem] leading-none'>Where Innovation Gets DUNN</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
