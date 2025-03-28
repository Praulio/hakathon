"use client"

// components/navbar.tsx
// A responsive navigation bar with authentication links and theme toggle

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="DevMatch Logo" width={150} height={50} className="h-8 w-auto" />
            </Link>
            <nav className="hidden md:ml-10 md:flex md:items-center md:space-x-6">
              <Link href="/projects" className="text-foreground/80 hover:text-foreground">
                Projects
              </Link>
              <Link href="/developers" className="text-foreground/80 hover:text-foreground">
                Developers
              </Link>
              <Link href="/how-it-works" className="text-foreground/80 hover:text-foreground">
                How It Works
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <ThemeToggle />
            <Button variant="ghost" asChild>
              <Link href="/auth/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">Sign up</Link>
            </Button>
          </div>

          <div className="flex md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/projects"
              className="block py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/developers"
              className="block py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Developers
            </Link>
            <Link
              href="/how-it-works"
              className="block py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <div className="pt-4 pb-3 border-t border-border">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                  Log in
                </Link>
              </Button>
              <Button className="w-full mt-2" asChild>
                <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)}>
                  Sign up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

