import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Home, 
  Users, 
  MessageCircle, 
  TrendingUp, 
  Shield, 
  DollarSign, 
  Calendar, 
  CheckCircle,
  Star,
  ArrowRight,
  Building,
  FileText,
  Phone
} from "lucide-react"
import Link from "next/link"

export default function LandlordsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header spacing */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Building className="h-12 w-12 text-accent" />
              </div>
              <h1 className="text-5xl md:text-7xl font-sans font-bold text-foreground mb-6 leading-tight">
                Landlords
                <span className="text-accent block mt-2">Community</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-serif max-w-4xl mx-auto leading-relaxed mb-8">
                Connect with fellow property owners, get expert advice, and access exclusive resources 
                to maximize your property investment returns in Nigeria's thriving real estate market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif text-lg px-8 py-4 rounded-xl"
                  asChild
                >
                  <Link
                    href="https://chat.whatsapp.com/DqPLyJ3LBSb8gGgIBMqSYu?mode=ems_copy_t."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Join WhatsApp Community
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-serif text-lg px-8 py-4 rounded-xl"
                  asChild
                >
                  <Link href="#benefits">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Benefits */}
        <section id="benefits" className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
                Why Join Our Community?
              </h2>
              <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">
                Access exclusive benefits designed specifically for serious property owners and investors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-sans font-semibold text-foreground mb-4">Weekly Market Updates</h3>
                  <p className="text-muted-foreground font-serif">
                    Get exclusive insights on property trends, rental rates, and market opportunities in major Nigerian cities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-sans font-semibold text-foreground mb-4">Expert Network Access</h3>
                  <p className="text-muted-foreground font-serif">
                    Connect with experienced landlords, property managers, and real estate professionals across Nigeria.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-sans font-semibold text-foreground mb-4">Legal & Compliance Support</h3>
                  <p className="text-muted-foreground font-serif">
                    Stay updated on tenancy laws, regulations, and best practices for property management in Nigeria.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-sans font-semibold text-foreground mb-4">Revenue Optimization Tips</h3>
                  <p className="text-muted-foreground font-serif">
                    Learn strategies to maximize rental income, reduce vacancy rates, and increase property value.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Calendar className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-sans font-semibold text-foreground mb-4">Monthly Meetups</h3>
                  <p className="text-muted-foreground font-serif">
                    Attend exclusive virtual and in-person events with industry experts and fellow landlords.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-colors">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FileText className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-sans font-semibold text-foreground mb-4">Resource Library</h3>
                  <p className="text-muted-foreground font-serif">
                    Access templates, contracts, checklists, and guides specifically for Nigerian landlords.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What is Property Management */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
                Understanding Property Management
              </h2>
              <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">
                Master the fundamentals of successful property management in Nigeria
              </p>
            </div>

            <Card className="mb-12 border-2">
              <CardContent className="pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-sans font-semibold text-foreground mb-6">
                      What is Property Management?
                    </h3>
                    <p className="text-muted-foreground font-serif leading-relaxed mb-4">
                      Property management is the comprehensive oversight and operation of real estate properties on behalf of property owners. 
                      It involves everything from tenant screening and rent collection to maintenance coordination and legal compliance.
                    </p>
                    <p className="text-muted-foreground font-serif leading-relaxed mb-6">
                      In Nigeria's dynamic real estate market, effective property management maximizes rental income while preserving 
                      and enhancing property value. Whether you're managing a single apartment or a portfolio of properties, 
                      understanding proper management principles is crucial for long-term success.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-serif">Tenant Relations</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-serif">Maintenance</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-serif">Legal Compliance</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-serif">Income Optimization</span>
                    </div>
                  </div>
                  <div className="bg-accent/5 p-8 rounded-2xl">
                    <h4 className="text-xl font-sans font-semibold text-foreground mb-6">Key Responsibilities Include:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground font-serif">Tenant screening and selection</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground font-serif">Rent collection and financial management</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground font-serif">Property maintenance and repairs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground font-serif">Legal compliance and documentation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground font-serif">Market analysis and pricing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground font-serif">Vacancy management and marketing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
                Expert Property Management Tips
              </h2>
              <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">
                Practical advice from successful landlords and property managers across Nigeria
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Tips for Landlords */}
              <Card className="border-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Home className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-sans text-foreground">Essential Tips for Landlords</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">Screen Tenants Thoroughly</h4>
                      <p className="text-muted-foreground font-serif">
                        Conduct comprehensive background checks, verify employment and income, check previous landlord references, 
                        and assess creditworthiness to find reliable, long-term tenants.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">Maintain Your Property Proactively</h4>
                      <p className="text-muted-foreground font-serif">
                        Regular maintenance preserves property value, keeps tenants satisfied, and prevents small issues 
                        from becoming expensive repairs. Schedule quarterly inspections and address issues promptly.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">Understand Nigerian Tenancy Laws</h4>
                      <p className="text-muted-foreground font-serif">
                        Stay informed about tenancy laws in your state, understand tenant rights and landlord obligations, 
                        and ensure all agreements comply with local regulations to protect your investment.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">Price Competitively</h4>
                      <p className="text-muted-foreground font-serif">
                        Research market rates regularly, consider property amenities and location, and adjust pricing 
                        to maximize income while maintaining high occupancy rates.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
                {/* Tips for Tenants */}
              <Card className="border-2">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl font-sans text-foreground">Guidance for Tenants</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">Document Everything</h4>
                      <p className="text-muted-foreground font-serif">
                        Take detailed photos of the property condition at move-in, keep records of all payments and communications 
                        with your landlord, and maintain receipts for any approved improvements.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">Pay Rent Consistently and On Time</h4>
                      <p className="text-muted-foreground font-serif">
                        Consistent, timely payments build trust with your landlord, may help in future rent negotiations, 
                        and provide positive references for future rentals.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">Report Issues Promptly</h4>
                      <p className="text-muted-foreground font-serif">
                        Notify your landlord of maintenance issues early to prevent small problems from becoming major repairs. 
                        Use written communication and follow up appropriately.
                      </p>
                    </div>
                    <div className="border-l-4 border-accent pl-6">
                      <h4 className="font-semibold text-foreground mb-2 text-lg">Know Your Rights</h4>
                      <p className="text-muted-foreground font-serif">
                        Understand your rights regarding privacy, security deposits, habitability standards, and proper 
                        eviction procedures under Nigerian law.
                      </p>
                    </div>
                  </div>
                </CardContent>
                </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
                Community Success Stories
              </h2>
              <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">
                Real results from landlords who joined our community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground font-serif mb-4">
                    "Joining the RichVille landlords community transformed my property management approach. 
                    I increased my rental income by 40% within 6 months using their market insights and networking opportunities."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">Adebayo O.</p>
                    <p className="text-sm text-muted-foreground">Lagos Property Owner</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground font-serif mb-4">
                    "The legal support and compliance guidance helped me avoid costly mistakes. 
                    The community connections led to my best tenants and reliable maintenance contacts."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">Chioma N.</p>
                    <p className="text-sm text-muted-foreground">Abuja Landlord</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground font-serif mb-4">
                    "From a single property to a portfolio of 8 units in 2 years. 
                    The investment opportunities and mentorship in this community are invaluable."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">Ibrahim M.</p>
                    <p className="text-sm text-muted-foreground">Kano Real Estate Investor</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
                What's Inside Our Community
              </h2>
              <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto">
                Exclusive resources and support available to our members
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 items-center w-[70%] place-items-center mx-auto">
              <div>
                <Card className="border-2 mb-8">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-sans font-semibold text-foreground mb-2">Daily Discussions</h3>
                        <p className="text-muted-foreground font-serif">
                          Active WhatsApp group with daily conversations about market trends, challenges, and opportunities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 mb-8">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FileText className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-sans font-semibold text-foreground mb-2">Document Templates</h3>
                        <p className="text-muted-foreground font-serif">
                          Ready-to-use tenancy agreements, inspection checklists, and legal documents compliant with Nigerian law.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-sans font-semibold text-foreground mb-2">Expert Access</h3>
                        <p className="text-muted-foreground font-serif">
                          Direct access to property lawyers, real estate agents, contractors, and financial advisors.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="bg-gradient-to-br from-accent/10 via-background to-muted/20 border-accent/20 border-2">
              <CardContent className="pt-12 pb-12">
                <div className="w-20 h-20 bg-accent/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <MessageCircle className="h-10 w-10 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6">
                  Ready to Transform Your Property Business?
                </h2>
                <p className="text-xl text-muted-foreground font-serif mb-8 max-w-2xl mx-auto">
                  Join Nigeria's most active and supportive landlords community. Connect with experts, 
                  access exclusive resources, and maximize your property investment returns.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground font-serif">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Free to join</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground font-serif">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Expert guidance</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground font-serif">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Proven strategies</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif text-lg px-8 py-4 rounded-xl"
                    asChild
                  >
                    <Link
                      href="https://chat.whatsapp.com/DqPLyJ3LBSb8gGgIBMqSYu?mode=ems_copy_t."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Join WhatsApp Community
                    </Link>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-serif text-lg px-8 py-4 rounded-xl"
                    asChild
                  >
                    <Link
                      href="https://wa.me/2349020464872?text=Hi%20RichVille%20Group,%20I'm%20interested%20in%20joining%20the%20landlords%20community%20and%20learning%20more%20about%20property%20management%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Contact Us Directly
                    </Link>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground font-serif mt-6">
                  Questions? Call us at +234 902 046 4872 or send a WhatsApp message
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}

            