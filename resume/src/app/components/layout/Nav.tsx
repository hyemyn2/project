"use client";
import React from 'react'
import Link from 'next/link'
import { House, FileUser, BriefcaseBusiness, Layers } from 'lucide-react';

function Nav() {
  const navItems = [
    { id: "home", label: "Home", icon: <House/> },
    { id: "about", label: "About", icon: <FileUser/> },
    { id: "career", label: "Career", icon: <BriefcaseBusiness/> },
    { id: "projects", label: "Projects", icon: <Layers/> },
    // { id: "blog", label: "Blog", icon: <NotebookPen/> },
  ]
  // const handleNavClick = (id: string) => {
  //   document.getElementById(id)?.scrollIntoView({behavior: "smooth"})
  //   // setOpen(false)
  // }
  return (
    <>
      <nav
        className="fixed left-0 top-0 w-12 h-full bg-zinc-900 pt-18 shadow-sm"
      >
        <ul
          className="flex flex-col gap-2"
        >
          { navItems.map((item, id) => (
            <li
              key={item.id}
              className="relative group"
            >
              <Link href={`#${item.id}`} className="flex justify-center">
                <span
                  className="p-2 rounded-sm hover:bg-secondary"
                >
                  {item.icon}
                </span>
              </Link>
              <span
                className="absolute left-13 top-2 text-sm bg-zinc-900 rounded-lg px-3 py-1 hidden group-hover:inline-block"
              >
                {item.label}
              </span>
          </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Nav