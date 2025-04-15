"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group">
          <h1 className="text-xl md:text-2xl font-bold tracking-wider relative overflow-hidden">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
              LE SPORT POUR TOUS!
            </span>
            <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-primary">
              LE SPORT POUR TOUS!
            </span>
          </h1>
        </Link>

        <nav>
          <ul className="flex items-center space-x-1 md:space-x-8">
            <li>
              <Link
                href="#goals"
                className="relative px-2 py-1 font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
              >
                Goals
              </Link>
            </li>
            <li>
              <Link
                href="#nous"
                className="relative px-2 py-1 font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
              >
                Nous
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="ml-2 px-5 py-2 rounded-full bg-foreground text-background text-sm font-medium transition-all hover:scale-105 hover:shadow-md active:scale-95"
              >
                Connexion
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
