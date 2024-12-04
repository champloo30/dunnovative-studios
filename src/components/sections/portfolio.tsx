'use client'

import React from 'react'
import { Container } from '../ui/container'
import Button from '../ui/button'
import { ArrowRight } from 'lucide-react'
import SiteCard from '../ui/siteCard'
import yttc from '@/assets/yttc.png'
import pkmo from '@/assets/pkmo.png'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <section aria-label='portfolio' id='portfolio' className='h-[60rem] md:h-[720px] lg:h-[640px] w-screen flex justify-center items-center'>
      <Container>
        <div className='h-full w-full flex flex-col md:flex-row justify-start md:justify-between items-center'>
          {/* left */}
          <div className='h-1/3 md:h-full pt-24 md:pt-0 flex flex-col justify-center gap-4'>
            <div className="flex flex-col gap-4">
              <h1 className='font-daughter text-3xl md:text-5xl text-toffee dark:text-aquamarine'>Our Portfolio</h1>
              <p className='md:w-96 text-sm md:text-lg'>This is the space to introduce visitors to the business or brand. Briefly explain who&apos;s behind it, what it does and what makes it unique. Share its core values and what this site has to offer.</p>
              <Link href='#contact'><Button lg def>Let&apos;s Chat <ArrowRight className='h-5 w-5' /></Button></Link>
            </div>
          </div>
          {/* right */}
          <div className='h-2/3 md:h-full w-full lg:w-2/3 flex flex-col lg:flex-row justify-center md:justify-normal lg:justify-end items-center gap-4 md:gap-8'>
            <SiteCard img={yttc} title='Your Ticket To College' url='https://yttc-llc.com' />
            <SiteCard img={pkmo} title='Peace Kingdom Ministries of Ohio' url='https://peacekmo.org' />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Portfolio