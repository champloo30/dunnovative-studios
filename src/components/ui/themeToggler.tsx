'use client'

import React from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      { theme === 'light' && <Sun className="h-5 w-5 hover:text-toffee transition-all" onClick={() => setTheme('dark')} /> }
      { theme === 'dark' && <Moon className="h-5 w-5 hover:text-aquamarine transition-all" onClick={() => setTheme('light')} /> }
    </>
  )
}
