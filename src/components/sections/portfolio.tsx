'use client'

import React from 'react'
import { Container } from '../ui/container'
import Button from '../ui/button'
import { ArrowRight } from 'lucide-react'
import SiteCard from '../ui/siteCard'
import yttc from '@/assets/yttc.png'
import pkmo from '@/assets/pkmo.png'

const Portfolio = () => {
  return (
    <section aria-label='portfolio' id='portfolio' className='h-[640px] w-screen flex justify-center items-center'>
      <Container>
        <div className='h-full w-full flex justify-between items-center'>
          <div className='h-full w-1/3 flex flex-col justify-center gap-4'>
            {/* left */}
            <div className="flex flex-col gap-4">
              <h1 className='font-daughter text-5xl text-toffee dark:text-aquamarine'>Our Portfolio</h1>
              <p className='w-96 text-lg'>This is the space to introduce visitors to the business or brand. Briefly explain who&apos;s behind it, what it does and what makes it unique. Share its core values and what this site has to offer.</p>
              <Button lg def>Let&apos;s Chat <ArrowRight className='h-5 w-5' /></Button>
            </div>
          </div>
          <div className='h-full w-2/3 flex justify-end items-center gap-8'>
            <SiteCard img={yttc} title='Your Ticket To College' url='yttc-llc.com' />
            <SiteCard img={pkmo} title='Peace Kingdom Ministries of Ohio' url='peacekmo.org' />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Portfolio