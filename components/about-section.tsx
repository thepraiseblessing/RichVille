import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, TrendingUp, Award } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower individuals with the knowledge, opportunities, and tools needed to grow in purpose, build wealth through real estate and digital enterprise, and lead impactful lives.",
    },
    {
      icon: Users,
      title: "Our Vision",
      description:
        "To be a globally recognized platform for building purpose-driven, financially free individuals by creating access to wealth-building systems and transformational education.",
    },
    {
      icon: TrendingUp,
      title: "Our Approach",
      description:
        "We provide both the mindset and the marketplace platforms that make financial freedom possible through proven systems and strategic empowerment.",
    },
    {
      icon: Award,
      title: "Our Excellence",
      description:
        "Backed by a passionate and skilled management team dedicated to operational excellence, innovation, and delivering real transformation.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground mb-6">
            About <span className="text-accent">Richville Group</span>
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed">
            We are a multi-dimensional group with a strong foundation in real estate, business development, technology,
            and financial education. Our vision is not only to inspire lives—but to equip and empower individuals with
            proven systems that generate wealth, multiply impact, and unlock purpose.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex justify-center">
            <Image
              src="/images/office-interior.png"
              alt="RichVille Group modern office interior"
              width={800}
              height={600}
              className="rounded-[30px] shadow-lg object-cover max-w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <value.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-sans font-semibold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground font-serif leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "1000+", label: "Lives Empowered" },
            { number: "50+", label: "Business Partners" },
            { number: "5", label: "Core Services" },
            { number: "100%", label: "Commitment" },
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-3xl md:text-4xl font-sans font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-serif">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
