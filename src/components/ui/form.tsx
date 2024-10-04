'use client'

import React, { useState } from 'react'
import Button from "@/components/ui/button"

interface FormProps {
  onSubmit: (data: ContactData) => void,
  isLoading: boolean
}

export interface ContactData {
  firstName: string,
  lastName: string,
  email: string,
  response: string,
  phone: string,
  service: string[],
  other?: string,
  message: string,
}

const Form:React.FC<FormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<ContactData>({
    firstName: '',
    lastName: '',
    email: '',
    response: '',
    phone: '',
    service: [],
    other: '',
    message: '',
  })

  const [isChecked, setIsChecked] = useState({
    phoneEmail: false,
    emailOnly: false,
    other: false
  })
  

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value }) 
  }

  function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    console.log(formData);

    onSubmit(formData)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      response: '',
      service: [],
      other: '',
      message: '',
    })
  }

  return (
    <form className="h-full w-full flex flex-col justify-evenly items-center" onSubmit={handleSubmit}>
      <h1 className='w-full float-left font-daughter text-5xl text-whiteCrest dark:text-oxford'>Let&apos;s Chat</h1>
      <div className='w-full flex justify-between gap-8'>
        <div className='w-full flex flex-col gap-2 text-whiteCrest dark:text-oxford'>
          <label className='text-lg' htmlFor="firstName">First Name *</label>
          <input 
            className='w-full py-1 px-2 bg-transparent border-t-0 border-x-0 border-b-2 border-whiteCrest dark:border-oxford rounded-none text-whiteCrest dark:text-oxford placeholder:text-whiteCrest/50 dark:placeholder:text-oxford/50' 
            type="text" 
            name="firstName" 
            id="firstName" 
            placeholder='John' 
            value={formData.firstName}
            onChange={handleInputChange}
            disabled={isLoading}
            required 
          />
        </div>
        <div className='w-full flex flex-col gap-2 text-whiteCrest dark:text-oxford'>
          <label className='text-lg' htmlFor="lastName">Last Name *</label>
          <input 
            className='w-full py-1 px-2 bg-transparent border-t-0 border-x-0 border-b-2 border-whiteCrest dark:border-oxford rounded-none text-whiteCrest dark:text-oxford placeholder:text-whiteCrest/50 dark:placeholder:text-oxford/50' 
            type="text" 
            name="lastName" 
            id="lastName" 
            placeholder='Doe' 
            value={formData.lastName}
            onChange={handleInputChange}
            disabled={isLoading}
            required 
          />
        </div>
      </div>
      <div className='w-full flex flex-col gap-2 text-whiteCrest dark:text-oxford'>
        <label className='text-lg' htmlFor="email">Email *</label>
        <input 
          className='w-full py-1 px-2 bg-transparent border-t-0 border-x-0 border-b-2 border-whiteCrest dark:border-oxford rounded-none text-whiteCrest dark:text-oxford placeholder:text-whiteCrest/50 dark:placeholder:text-oxford/50' 
          type="email" 
          name="email" 
          id="email" 
          placeholder='johndoe@email.com' 
          value={formData.email}
          onChange={handleInputChange}
          disabled={isLoading}
          required 
        />
      </div>
      <div className='w-full flex justify-between gap-8'>
        <div className='w-full flex flex-col gap-2 text-whiteCrest dark:text-oxford'>
          <p className='text-lg'>Would you also like a response by phone? *</p>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-2'>
              <input 
                className='h-4 w-4' 
                type="radio" 
                name="response" 
                id="phone-email" 
                value='Phone and Email'
                onChange={handleInputChange}
                onClick={() => setIsChecked({ ...isChecked, phoneEmail: true, emailOnly: false })}
                disabled={isLoading}
              />
              <label htmlFor="phone-email">Phone and Email</label>
            </div>
            <div className='flex items-center gap-2'>
              <input 
                className='h-4 w-4' 
                type="radio" 
                name="response" 
                id="email-only" 
                value='Email Only'
                onChange={handleInputChange}
                onClick={() => setIsChecked({ ...isChecked, phoneEmail: false, emailOnly: true })}
                disabled={isLoading}
              />
              <label htmlFor="email-only">Email Only</label>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-2 text-whiteCrest dark:text-oxford'>
          <label className='text-lg' htmlFor="phone">Phone {isChecked.phoneEmail && '*'}</label>
          <input 
            className='w-full py-1 px-2 bg-transparent border-t-0 border-x-0 border-b-2 border-whiteCrest dark:border-oxford rounded-none text-whiteCrest dark:text-oxford placeholder:text-whiteCrest/50 dark:placeholder:text-oxford/50' 
            type="tel" 
            name="phone" 
            id="phone" 
            placeholder='999-999-9999' 
            value={formData.phone}
            onChange={handleInputChange}
            disabled={isLoading}
            required={isChecked.phoneEmail} 
          />
        </div>
      </div>
      <div className='w-full flex flex-col gap-2 text-whiteCrest dark:text-oxford'>
        <p className='text-lg'>What service(s) are you interested in? *</p>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <input 
              className='h-4 w-4'
              type="checkbox" 
              name="service" 
              id="web" 
              value={formData.service + 'Web Development & Design '}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <label htmlFor="web">Web Development & Design</label>
          </div>
          <div className='flex items-center gap-2'>
            <input 
              className='h-4 w-4'
              type="checkbox" 
              name="service" 
              id="flyer" 
              value={formData.service + 'Flyer Design '}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <label htmlFor="flyer">Flyer Design</label>
          </div>
          <div className='flex items-center gap-2'>
            <input 
              className='h-4 w-4'
              type="checkbox" 
              name="service" 
              id="logo" 
              value={formData.service + 'Logo Design '}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <label htmlFor="logo">Logo Design</label>
          </div>
          <div className='flex items-center gap-2'>
            <input 
              className='h-4 w-4'
              type="checkbox" 
              name="service" 
              id="branding" 
              value={formData.service + 'Business Branding '}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <label htmlFor="branding">Business Branding</label>
          </div>
          <div className='flex items-center gap-2'>
            <input 
              className='h-4 w-4'
              type="checkbox" 
              name="service" 
              id="other" 
              value={formData.service + 'Other'}
              onChange={handleInputChange}
              onClick={() => setIsChecked({ ...isChecked, other: !isChecked.other })}
              disabled={isLoading}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <input 
          className={`${!isChecked.other && 'hidden'} w-full py-1 px-2 bg-transparent border-t-0 border-x-0 border-b-2 border-whiteCrest dark:border-oxford rounded-none text-whiteCrest dark:text-oxford placeholder:text-whiteCrest/50 dark:placeholder:text-oxford/50`} 
          type="text" 
          name="other" 
          id="other-text" 
          placeholder='Other service(s) not listed?' 
          value={formData.other}
          onChange={handleInputChange}
          disabled={isLoading}
          required={isChecked.other} 
        />
      </div>
      <div className='w-full text-whiteCrest dark:text-oxford'>
        <label className='text-lg' htmlFor="message">Message *</label>
        <textarea 
          className='h-24 w-full py-1 px-2 bg-transparent border-t-0 border-x-0 border-b-2 border-whiteCrest dark:border-oxford rounded-none text-whiteCrest dark:text-oxford placeholder:text-whiteCrest/50 dark:placeholder:text-oxford/50' 
          name="message" 
          id="message" 
          placeholder='Tell us about your business or current interest...'
          value={formData.message}
          onChange={handleTextAreaChange}
          disabled={isLoading}
          required
        />
      </div>
      <Button submit full>Submit</Button>
    </form>
  )
}

export default Form