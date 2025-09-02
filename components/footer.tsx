"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { useTheme } from "next-themes"

export function Footer() {
  const { theme } = useTheme()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "RichVille Tech Courses", href: "/tech-courses" },
    { name: "Landlords Community", href: "/landlords-community" },
  ]

  const services = [
    "Real Estate Investment",
    "Digital Innovation",
    "Business Coaching",
    "Financial Education",
    "Youth Empowerment",
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://web.facebook.com/profile.php?id=61578583561084", label: "Facebook" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/richville_group_ltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "Instagram",
    },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src={theme === "dark" ? "/images/9.png" : "/images/logo-symbol.png"}
                alt="Richville Project Limited"
                width={300}
                height={300}
                className="h-24 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 font-serif leading-relaxed mb-6 max-w-md">
              Empowering Lives for Purpose and Financial Freedom. Building a generation of purpose-driven, financially
              free individuals through strategic empowerment and wealth creation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="h-4 w-4 text-accent" />
                <span className="font-serif">info@richvilleprojectlimited.com</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="h-4 w-4 text-accent" />
                <span className="font-serif">09020464872</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="font-serif">Ebonyi State</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-sans font-semibold text-primary-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 font-serif"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-sans font-semibold text-primary-foreground mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 font-serif text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/80 font-serif text-sm">Follow us:</span>
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-primary-foreground/80 group-hover:text-accent-foreground" />
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-primary-foreground/60 font-serif text-sm text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Richville Project Limited. All rights reserved.</p>
              <p className="mt-1">Empowering Lives for Purpose and Financial Freedom</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
