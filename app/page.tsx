import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
