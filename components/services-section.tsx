import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Laptop, Users, GraduationCap, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Real Estate Investment & Property Management",
      description:
        "Creating generational wealth through smart real estate systems and opportunities. We provide comprehensive investment strategies and property management solutions.",
      features: ["Investment Opportunities", "Property Management", "Market Analysis", "Portfolio Growth"],
    },
    {
      icon: Laptop,
      title: "Digital Innovation & Tech Empowerment",
      description:
        "Equipping individuals with digital skills, tools, and platforms for online business and career growth in the modern economy.",
      features: ["Digital Skills Training", "Online Business Setup", "Tech Platforms", "Career Development"],
    },
    {
      icon: Users,
      title: "Business Coaching & Enterprise Development",
      description:
        "Supporting startups, entrepreneurs, and visionaries to build scalable, purpose-driven businesses that create lasting impact.",
      features: ["Startup Support", "Business Strategy", "Mentorship Programs", "Scaling Solutions"],
    },
    {
      icon: GraduationCap,
      title: "Financial Literacy & Wealth Education",
      description:
        "Teaching the principles and pathways that lead to personal finance mastery and long-term financial freedom.",
      features: ["Financial Planning", "Investment Education", "Wealth Building", "Money Management"],
    },
    {
      icon: TrendingUp,
      title: "Youth Empowerment & Leadership Training",
      description:
        "Mentoring the next generation of leaders across campuses, communities, and digital spaces to unlock their potential.",
      features: ["Leadership Development", "Campus Programs", "Community Outreach", "Digital Mentorship"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed">
            From real estate investment opportunities and digital entrepreneurship training, to business mentorship and
            leadership development, we provide both the mindset and the marketplace platforms that make financial
            freedom possible.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50 h-full"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors group-hover:scale-110 duration-300">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-sans font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground font-serif leading-relaxed mb-6">{service.description}</p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground font-serif">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-auto border-accent text-accent hover:bg-transparent  hover:text-accent font-serif group/btn bg-transparent"
                  asChild
                >
                  <Link
                    href={`/services/${service.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "")}`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
