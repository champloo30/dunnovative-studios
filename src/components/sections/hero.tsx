'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { Container } from '../ui/container'

const Hero = () => {
  const { theme } = useTheme()
  return (
    <section aria-label='Home' id='home' className='h-[40rem] sm:h-screen w-full pt-20 flex justify-center items-center overflow-hidden'>
      <Container>
        <div className='h-full w-full flex justify-center items-center'>
          <div className='relative h-full w-full sm:h-[480px] sm:w-[960px]'>
            <h2 className={`absolute top-72 md:top-36 lg:top-20 xl:top-32 left-0 md:left-12 lg:left-16 xl:left-5 2xl:-left-10 font-bold text-3xl md:text-5xl lg:text-7xl xl:text-[5rem] ${theme === 'dark' ? 'text-gradient-dark' : 'text-gradient-light'} enter-left`}>Welcome</h2>
            <span className='absolute bottom-52 md:bottom-[15.5rem] lg:bottom-[17rem] xl:bottom-40 2xl:bottom-52 left-8 md:left-[12.5rem] lg:left-72 xl:left-52 font-bold text-[1.25rem] md:text-3xl lg:text-[2.5rem] xl:text-[4rem] 2xl:text-6xl text-lightBrown dark:text-altOxford -rotate-90 enter-bottom'>to</span>
            <div className='absolute bottom-48 md:bottom-[13.75rem] lg:bottom-[15rem] xl:bottom-32 2xl:bottom-[9.5rem] right-0 md:right-16 lg:right-12 xl:right-5 2xl:-right-12 flex flex-col justify-center items-center fade-in'>
              <h1 className='font-daughter text-3xl md:text-[2.75rem] lg:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[5rem] text-toffee dark:text-aquamarine leading-none'>Dunnovative Studios</h1>
              <p className='text-base md:text-[1.5rem] lg:text-[1.9rem] xl:text-[2.5rem] 2xl:text-[2.75rem] leading-none'>Where Innovation Gets DUNN</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
