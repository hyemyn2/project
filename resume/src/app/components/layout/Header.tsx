"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { Baby } from 'lucide-react';

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth"})
  }
  
  return (
      <header
        className={`text-zinc-900 ml-12 fixed z-50 left-0 top-0 w-full transition-all ${scrolled ? "bg-white/10 shadow-md backdrop-blur" : "bg-transparent"}`}
      >
        <div className="flex justify-between items-center py-4 mx-auto max-w-screen-xl px-5 sm:px-10">
          <Link
            href={'/'}
            className="text-xl font-bold flex items-center"
            onClick={scrollToTop}
          >
            <Baby className="mr-2"/>
            <span>
              Welcome to Hyemin
            </span>
          </Link>
        
        </div>
      </header>
  )
}

export default Header
