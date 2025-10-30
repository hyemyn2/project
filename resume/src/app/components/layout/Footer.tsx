import React from 'react'
import Link from 'next/link';

function Footer() {
  const socialLinks = [
    { label: "GitHub", href: "https://github.com/username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/username" },
    { label: "Email", href: "mailto:email@example.com" },
  ];

  return (
      <footer>
        <div className="flex items-center justify-between flex-col md:flex-row py-3">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              Frontend Developer Portfolio
            </p>
          </div>
          <div className="flex gap-3">
            {socialLinks.map(link => (
                <Link 
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground hover:underline"
                >
                  {link.label}
                </Link>
            ))}
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-right">
            &copy; {new Date().getFullYear()} Hm. All rights reserved.
          </div>
        </div>
      </footer>
  )
}

export default Footer