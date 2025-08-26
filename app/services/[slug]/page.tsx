import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Laptop, Users, GraduationCap, TrendingUp, ArrowLeft, MessageCircle } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const serviceDetails = {
  "real-estate-investment-property-management": {
    icon: Home,
    title: "Real Estate Investment & Property Management",
    description:
      "Creating generational wealth through smart real estate systems and opportunities. We provide comprehensive investment strategies and property management solutions.",
    overview:
      "Our real estate division focuses on creating sustainable wealth through strategic property investments and professional management services. We help individuals and families build generational wealth through carefully selected real estate opportunities.",
    whatYouGet: [
      "Comprehensive market analysis and investment opportunities",
      "Professional property management services",
      "Portfolio diversification strategies",
      "Rental income optimization",
      "Property maintenance and tenant management",
      "Investment performance tracking and reporting",
    ],
    whyChooseUs: [
      "Proven track record in real estate investment",
      "Deep understanding of local and regional markets",
      "Full-service property management solutions",
      "Transparent fee structure and regular reporting",
      "Personalized investment strategies",
      "Long-term wealth building focus",
    ],
    importance:
      "Real estate remains one of the most reliable paths to building long-term wealth. In today's economy, property investment provides both passive income and capital appreciation, serving as a hedge against inflation while building generational wealth for families.",
  },
  "digital-innovation-tech-empowerment": {
    icon: Laptop,
    title: "Digital Innovation & Tech Empowerment",
    description:
      "Equipping individuals with digital skills, tools, and platforms for online business and career growth in the modern economy.",
    overview:
      "Our digital innovation program empowers individuals with cutting-edge technology skills and digital business strategies. We bridge the gap between traditional business and the digital economy.",
    whatYouGet: [
      "Comprehensive digital skills training programs",
      "Online business setup and optimization",
      "Digital marketing and social media strategies",
      "E-commerce platform development",
      "Technology consulting and support",
      "Digital transformation guidance",
    ],
    whyChooseUs: [
      "Industry-experienced instructors and mentors",
      "Hands-on practical training approach",
      "Up-to-date curriculum with latest technologies",
      "Personalized learning paths",
      "Ongoing support and community access",
      "Real-world project experience",
    ],
    importance:
      "The digital economy is rapidly expanding, creating unprecedented opportunities for those with the right skills. Digital literacy and online business capabilities are no longer optional but essential for thriving in today's interconnected world.",
  },
  "business-coaching-enterprise-development": {
    icon: Users,
    title: "Business Coaching & Enterprise Development",
    description:
      "Supporting startups, entrepreneurs, and visionaries to build scalable, purpose-driven businesses that create lasting impact.",
    overview:
      "Our business coaching program provides comprehensive support for entrepreneurs and business owners looking to scale their operations and create sustainable impact in their communities.",
    whatYouGet: [
      "One-on-one business coaching sessions",
      "Strategic business planning and development",
      "Market analysis and competitive positioning",
      "Financial planning and funding strategies",
      "Operations optimization and scaling guidance",
      "Leadership development and team building",
    ],
    whyChooseUs: [
      "Experienced business coaches with proven success",
      "Customized coaching programs for each business",
      "Access to extensive business network",
      "Practical tools and frameworks",
      "Ongoing mentorship and support",
      "Focus on sustainable growth and impact",
    ],
    importance:
      "Small and medium enterprises drive economic growth and job creation. Proper business coaching and development support can significantly increase the success rate of new ventures while creating positive community impact.",
  },
  "financial-literacy-wealth-education": {
    icon: GraduationCap,
    title: "Financial Literacy & Wealth Education",
    description:
      "Teaching the principles and pathways that lead to personal finance mastery and long-term financial freedom.",
    overview:
      "Our financial education program provides comprehensive training on personal finance management, investment strategies, and wealth building principles that lead to long-term financial independence.",
    whatYouGet: [
      "Personal finance management training",
      "Investment strategy development",
      "Budgeting and expense optimization",
      "Debt management and elimination strategies",
      "Retirement and estate planning",
      "Tax optimization strategies",
    ],
    whyChooseUs: [
      "Certified financial educators and advisors",
      "Practical, actionable financial strategies",
      "Personalized financial planning approach",
      "Ongoing support and accountability",
      "Proven wealth building methodologies",
      "Focus on long-term financial freedom",
    ],
    importance:
      "Financial literacy is fundamental to personal and economic empowerment. In an era of economic uncertainty, understanding money management, investment principles, and wealth building strategies is crucial for achieving financial security and independence.",
  },
  "youth-empowerment-leadership-training": {
    icon: TrendingUp,
    title: "Youth Empowerment & Leadership Training",
    description:
      "Mentoring the next generation of leaders across campuses, communities, and digital spaces to unlock their potential.",
    overview:
      "Our youth empowerment program focuses on developing the next generation of leaders through comprehensive training, mentorship, and practical leadership opportunities in various settings.",
    whatYouGet: [
      "Leadership skills development training",
      "Personal development and goal setting",
      "Communication and public speaking skills",
      "Project management and team leadership",
      "Community engagement opportunities",
      "Mentorship and career guidance",
    ],
    whyChooseUs: [
      "Experienced youth mentors and leaders",
      "Comprehensive leadership curriculum",
      "Real-world leadership opportunities",
      "Supportive community environment",
      "Focus on character and values development",
      "Long-term mentorship relationships",
    ],
    importance:
      "Investing in youth leadership development is crucial for building strong communities and sustainable economic growth. Young leaders drive innovation, social change, and economic development in their communities and beyond.",
  },
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = serviceDetails[slug as keyof typeof serviceDetails]

  if (!service) {
    notFound()
  }

  const IconComponent = service.icon

  return (
    <main className="min-h-screen bg-background">
      {/* Header spacing */}
      <div className="pt-20">
        {/* Back to Home Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-serif"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
        </div>

        {/* Service Header */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <IconComponent className="h-10 w-10 text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">{service.title}</h1>
              <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Overview */}
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl font-sans text-foreground">Service Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-serif leading-relaxed">{service.overview}</p>
                </CardContent>
              </Card>

              {/* What You Get */}
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl font-sans text-foreground">What You Get</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.whatYouGet.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground font-serif">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl font-sans text-foreground">Why Choose RichVille</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.whyChooseUs.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground font-serif">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Importance */}
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl font-sans text-foreground">Why This Matters Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-serif leading-relaxed">{service.importance}</p>
                </CardContent>
              </Card>
            </div>

            {/* Property Management Tips Section - Only for Real Estate Service */}
            {slug === "real-estate-investment-property-management" && (
              <div className="mt-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
                    Property Management Insights
                  </h2>
                  <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">
                    Master the art of property management with expert tips for landlords and tenants
                  </p>
                </div>

                {/* What is Property Management */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl font-sans text-foreground">What is Property Management?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-serif leading-relaxed mb-4">
                      Property management is the comprehensive oversight and operation of real estate properties on behalf of property owners. 
                      It involves everything from tenant screening and rent collection to maintenance coordination and legal compliance. 
                      Effective property management maximizes rental income while preserving and enhancing property value.
                    </p>
                    <p className="text-muted-foreground font-serif leading-relaxed">
                      Whether you're a seasoned landlord or just starting your property investment journey, understanding proper 
                      management principles is crucial for long-term success and profitability in real estate.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {/* Tips for Landlords */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl font-sans text-foreground flex items-center gap-2">
                        <Home className="h-6 w-6 text-accent" />
                        Tips for Landlords
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-l-4 border-accent pl-4">
                          <h4 className="font-semibold text-foreground mb-2">Screen Tenants Thoroughly</h4>
                          <p className="text-muted-foreground font-serif text-sm">
                            Conduct comprehensive background checks, verify employment, and check references to find reliable tenants.
                          </p>
                        </div>
                        <div className="border-l-4 border-accent pl-4">
                          <h4 className="font-semibold text-foreground mb-2">Maintain Your Property</h4>
                          <p className="text-muted-foreground font-serif text-sm">
                            Regular maintenance preserves property value and keeps tenants satisfied, reducing vacancy rates.
                          </p>
                        </div>
                        <div className="border-l-4 border-accent pl-4">
                          <h4 className="font-semibold text-foreground mb-2">Know Your Legal Rights</h4>
                          <p className="text-muted-foreground font-serif text-sm">
                            Understand local rental laws, tenant rights, and eviction procedures to protect your investment.
                          </p>
                        </div>
                        <div className="border-l-4 border-accent pl-4">
                          <h4 className="font-semibold text-foreground mb-2">Set Competitive Rent Prices</h4>
                          <p className="text-muted-foreground font-serif text-sm">
                            Research market rates regularly and adjust pricing to maximize income while maintaining occupancy.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tips for Tenants */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl font-sans text-foreground flex items-center gap-2">
                        <Users className="h-6 w-6 text-accent" />
                        Tips for Tenants
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-l-4 border-accent pl-4">
                          <h4 className="font-semibold text-foreground mb-2">Document Everything</h4>
                          <p className="text-muted-foreground font-serif text-sm">
                            Take photos of the property condition and keep records of all communications with your landlord.
                          </p>
                        </div>
                        <div className="border-l-4 border-accent pl-4">
                          <h4 className="font-semibold text-foreground mb-2">Pay Rent on Time</h4>
                          <p className="text-muted-foreground font-serif text-sm">
                            Consistent, timely payments build trust and may help in future rent negotiations or references.
                          </p>
                        </div>
                        <div className="border-l-4 border-accent pl-4">
                          <h4 className="font-semibold text-foreground mb-2">Report Issues Promptly</h4>
                          <p className="text-muted-foreground font-serif text-sm">
                            Notify your landlord of maintenance issues early to prevent small problems from becoming major repairs.
                          </p>
                        </div>
                        <div className="border-l-4 border-accent pl-4">
                          <h4 className="font-semibold text-foreground mb-2">Know Your Tenant Rights</h4>
                          <p className="text-muted-foreground font-serif text-sm">
                            Understand your rights regarding privacy, security deposits, and habitability standards.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* WhatsApp Community CTA */}
                <Card className="bg-accent/5 border-accent/20">
                  <CardContent className="pt-8 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-sans font-semibold text-foreground mb-4">
                      Join Our Exclusive Landlords Community
                    </h3>
                    <p className="text-muted-foreground font-serif mb-6 max-w-2xl mx-auto">
                      Connect with fellow property owners, get expert advice, and access exclusive resources to maximize your 
                      property investment returns. Our WhatsApp community provides ongoing support, market insights, and 
                      networking opportunities for serious landlords.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                      <div className="flex items-center gap-2 text-muted-foreground font-serif">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Weekly market updates</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground font-serif">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Expert property management tips</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground font-serif">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>Networking with successful landlords</span>
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif text-lg px-8 py-3"
                      asChild
                    >
                      <Link
                        href="https://wa.me/2349020464872?text=Hi%20RichVille%20Group,%20I'm%20interested%20in%20joining%20the%20exclusive%20landlords%20WhatsApp%20community."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Join Landlords Community
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* General CTA Section */}
            {/* <div className="mt-16 text-center">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-sans font-semibold text-foreground mb-4">Ready to Get Started?</h3>
                  <p className="text-muted-foreground font-serif mb-6">
                    Contact us today to learn more about how we can help you achieve your goals.
                  </p>
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif text-lg px-8 py-3"
                    asChild
                  >
                    <Link
                      href="https://wa.me/2349020464872?text=Hi%20RichVille%20Group,%20I'm%20interested%20in%20learning%20more%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Make Inquiry
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </section>
      </div>
    </main>
  )
}