'use client';
import React, { useState, useEffect } from 'react'
import { Button } from '@/app/components/ui/button'
import { ArrowUp } from 'lucide-react';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)
  const [prevScrollY, setPrevScrollY] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth"})
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > 200) {
        if (currentY < prevScrollY) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      } else {
        setVisible(false)
      }
      setPrevScrollY(currentY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollY])

  if(!visible) return null

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-50 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 transition-all"
      size="icon"
      aria-label="Scroll to top"
    >
      <ArrowUp/>
    </Button>
  )
}

export default ScrollToTopButton