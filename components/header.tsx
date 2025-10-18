"use client"

import { useState, useEffect, useRef } from "react"
import { LeLoLogo } from "./lelo-logo"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(currentScrollY > 50)

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`
          fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out
          ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        <div
          className={`
            flex items-center justify-between gap-4 px-4 md:px-6 py-3 rounded-2xl border transition-all duration-300
            ${
              isScrolled
                ? "bg-background/90 backdrop-blur-xl border-border/40 shadow-2xl"
                : "bg-background/95 backdrop-blur-lg border-border/30 shadow-lg"
            }
          `}
        >
          <Link href="/" className="transform transition-transform duration-200 hover:scale-105">
            <LeLoLogo />
          </Link>

          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="/features"
              className="relative text-foreground/80 hover:text-foreground transition-all duration-300 group px-2 py-1 rounded-lg hover:bg-foreground/5 text-sm"
            >
              Features
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-4"></span>
            </Link>
            <Link
              href="/promotions"
              className="relative text-foreground/80 hover:text-foreground transition-all duration-300 group px-2 py-1 rounded-lg hover:bg-foreground/5 text-sm"
            >
              <span className="flex items-center gap-1">
                Promotions
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              </span>
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-4"></span>
            </Link>
            <Link
              href="/#pricing"
              className="relative text-foreground/80 hover:text-foreground transition-all duration-300 group px-2 py-1 rounded-lg hover:bg-foreground/5 text-sm"
            >
              Pricing
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-4"></span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="relative text-foreground/80 hover:text-foreground transition-all duration-300 group px-2 py-1 rounded-lg hover:bg-foreground/5 text-sm flex items-center gap-1 outline-none">
                Trading
                <ChevronDown className="w-3 h-3" />
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-4"></span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/markets" className="cursor-pointer">
                    Markets
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/instruments" className="cursor-pointer">
                    Instruments
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/economic-calendar" className="cursor-pointer">
                    Economic Calendar
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className="relative text-foreground/80 hover:text-foreground transition-all duration-300 group px-2 py-1 rounded-lg hover:bg-foreground/5 text-sm"
            >
              About
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-4"></span>
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-foreground/5 border border-border/30">
            <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/design-mode/image.png"
                alt="PAX Logo"
                width={24}
                height={24}
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-foreground">$PAX</span>
              <span className="text-foreground/90 font-medium">$3.25</span>
              <span className="text-green-500 font-medium">+1.52%</span>
              <div className="hidden lg:flex items-center gap-1.5">
                <div className="w-px h-3 bg-border/50"></div>
                <span className="text-foreground/60">MCap:</span>
                <span className="text-foreground/90 font-medium">$3.25B</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground/80 hover:text-foreground hover:bg-foreground/10 transition-all duration-200 rounded-xl text-sm h-8"
              asChild
            >
              <Link href="https://dashboard.paxeer.app/en" target="_blank" rel="noopener noreferrer">
                Sign In
              </Link>
            </Button>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transform transition-all duration-200 hover:scale-105 hover:shadow-lg rounded-xl text-sm h-8"
              asChild
            >
              <Link href="https://dashboard.paxeer.app/en" target="_blank" rel="noopener noreferrer">
                Get Started
              </Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-foreground/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background border-l border-border shadow-2xl z-50 md:hidden overflow-y-auto">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-border/50">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-foreground/5 border border-border/30">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/design-mode/image.png"
                      alt="PAX Logo"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">$PAX</span>
                      <span className="text-foreground/90 font-medium">$3.25</span>
                      <span className="text-green-500 font-medium text-sm">+1.52%</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-foreground/60 text-xs">Market Cap:</span>
                      <span className="text-foreground/90 font-medium text-sm">$3.25B</span>
                    </div>
                  </div>
                </div>
              </div>

              <nav className="flex flex-col p-6 gap-2 flex-1">
                <Link
                  href="/features"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all duration-200 px-4 py-3 rounded-lg text-lg"
                >
                  Features
                </Link>
                <Link
                  href="/promotions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all duration-200 px-4 py-3 rounded-lg text-lg flex items-center gap-2"
                >
                  Promotions
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                </Link>
                <Link
                  href="/#pricing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all duration-200 px-4 py-3 rounded-lg text-lg"
                >
                  Pricing
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all duration-200 px-4 py-3 rounded-lg text-lg"
                >
                  About
                </Link>
                <Link
                  href="/markets"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all duration-200 px-4 py-3 rounded-lg text-lg"
                >
                  Markets
                </Link>
                <Link
                  href="/instruments"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all duration-200 px-4 py-3 rounded-lg text-lg"
                >
                  Instruments
                </Link>
                <Link
                  href="/economic-calendar"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all duration-200 px-4 py-3 rounded-lg text-lg"
                >
                  Calendar
                </Link>
              </nav>

              <div className="p-6 border-t border-border/50 flex flex-col gap-3">
                <Button
                  variant="ghost"
                  className="w-full text-foreground/80 hover:text-foreground hover:bg-foreground/10 transition-all duration-200 rounded-xl"
                  asChild
                >
                  <Link href="https://dashboard.paxeer.app/en" target="_blank" rel="noopener noreferrer">
                    Sign In
                  </Link>
                </Button>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 rounded-xl"
                  asChild
                >
                  <Link href="https://dashboard.paxeer.app/en" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
