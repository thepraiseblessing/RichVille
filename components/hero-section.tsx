import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted overflow-hidden"
    >
      {/* Background Pattern */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-foreground mb-6 leading-tight">
            Empowering Lives for <span className="text-accent">Purpose</span> and{" "}
            <span className="text-accent">Financial Freedom</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-serif leading-relaxed max-w-3xl mx-auto">
            Building a generation of purpose-driven, financially free individuals through strategic empowerment,
            business innovation, and wealth creation.
          </p>

          {/* Key Points */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {["Real Estate Investment", "Digital Innovation", "Business Coaching", "Financial Education"].map(
              (point) => (
                <div key={point} className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="font-serif">{point}</span>
                </div>
              ),
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#services">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif text-lg px-8 py-3 group"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/tech-courses">
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-serif text-lg px-8 py-3 bg-transparent"
              >
                Explore Tech Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
