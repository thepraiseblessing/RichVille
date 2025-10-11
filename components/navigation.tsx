'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check saved theme on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/tech-courses', label: 'Tech Courses' },
    { href: '/landlords-community', label: 'Landlords Community' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <div className={styles.logoIcon}>RV</div>
          <span className={styles.logoText}>RichVille</span>
        </Link>

        {/* Right side container */}
        <div className={styles.navRight}>
          {/* Desktop Navigation Links */}
          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? styles.activeLink : ''}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Get In Touch Button */}
          <Link href="https://wa.me/2349020464872" target="_blank" rel="noopener noreferrer">
            <button className={styles.ctaButton}>Get In Touch</button>
          </Link>

          {/* Theme Toggle */}
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title="Toggle Dark/Light Mode"
          >
            {isDarkMode ? (
              <span className={styles.icon}>☀️</span>
            ) : (
              <span className={styles.icon}>🌙</span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
}
