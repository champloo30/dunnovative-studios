import React from 'react'

interface ButtonTypes {
  avatar?: boolean,
  icon?: boolean,
  xs?: boolean,
  sm?: boolean,
  md?: boolean,
  lg?: boolean,
  full?: boolean,
  def?: boolean,
  alt?: boolean,
  submit?: boolean,
  onClick?: () => void,
  children: React.ReactNode,
}

const Button: React.FC<ButtonTypes> = ({ avatar, icon, xs, sm, md, lg, full, def, alt, submit, onClick, children, }) => {

  return (
    <button 
      className={`
        flex justify-center items-center gap-2 bg-transparent border rounded-md transition-all
        ${avatar && 'h-10 w-10 rounded-full'} 
        ${icon && 'h-8 w-8'} 
        ${xs && 'py-px w-12 font-taviraj text-base'} 
        ${sm && 'py-1 w-20'} 
        ${md && 'py-1 w-32'} 
        ${lg && 'py-1 w-40'} 
        ${full && 'py-1 w-full'}
        ${def && 'hover:bg-toffee dark:hover:bg-aquamarine border-toffee dark:border-aquamarine font-daughter text-lg text-toffee hover:text-whiteCrest dark:text-aquamarine dark:hover:text-oxford'}
        ${alt && 'border-whiteCrest dark:border-oxford hover:bg-whiteCrest dark:hover:bg-oxford text-whiteCrest dark:text-oxford hover:text-toffee dark:hover:text-aquamarine'}
        ${submit && 'bg-whiteCrest xl:bg-toffee xl:hover:bg-brown dark:bg-oxford xl:dark:bg-aquamarine xl:dark:hover:bg-oxford border-none font-daughter text-toffee xl:text-brown xl:hover:text-whiteCrest dark:text-aquamarine xl:dark:text-oxford xl:dark:hover:text-aquamarine text-xl'}
      `}
      onClick={onClick}
      type={submit ? 'submit' : 'button'}
    >{children}</button>
  )
}

export default Button