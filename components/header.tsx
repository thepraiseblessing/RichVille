"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import styles from "./Header.module.css"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Landlords Community", href: "/landlords-community" },
    { name: "Contact", href: "/contact" },
  ]

  const navigation2 = [
    // {name: "Home", href: "/"},


  ]
  

  const logoSrc = resolvedTheme === "dark" ? "/images/logo-symbol.png" : "/images/9.png"

  return (
    <header className={styles.nav}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image src={logoSrc} alt="Richville Group Limited" width={150} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`${styles.navRight} hidden md:flex`}>
          <ul className={styles.navLinks}>
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? "activeLink" : ""}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="https://wa.me/2349020464872" target="_blank" rel="noopener noreferrer">
            <Button className="btn btn-primary">
             Get In Touch
            </Button>
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`${styles.menuToggle} md:hidden`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className={`${styles.navLinks} active md:hidden`}>
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/2349020464872"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-serif">
              Get In Touch
            </Button>
          </Link>
        </nav>
      )}
    </header>
  )
}
