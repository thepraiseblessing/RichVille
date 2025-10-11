import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, CreditCard, Shield, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/tech-courses"
            className="inline-flex items-center text-accent hover:text-accent/80 mb-6 font-serif"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>

          <div className="text-center mt-13">
            {/* <Image
              src="/images/logo-full.png"
              alt="Richville Project Limited"
              width={200}
              height={80}
              className="mx-auto mb-6"
            /> */}
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-4">Complete Your Enrollment</h1>
            <p className="text-xl text-muted-foreground font-serif leading-relaxed max-w-2xl mx-auto">
              Secure your spot in our premium tech courses and start your journey to success
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Payment Options */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-6">Choose Your Payment Method</h2>
              <p className="text-muted-foreground font-serif mb-8">
                Select your preferred payment option to complete your course enrollment
              </p>
            </div>

            {/* Selar Payment Option */}
            <Card className="border-accent/20 hover:border-accent/40 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-serif text-xl flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-accent" />
                      Pay with Selar
                    </CardTitle>
                    <CardDescription className="font-serif mt-2">
                      Secure payment processing with multiple payment options
                    </CardDescription>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/20">Recommended</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="font-serif">Bank Transfer, Card Payment, USSD</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="font-serif">Instant course access after payment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="font-serif">Secure SSL encryption</span>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-serif"
                  asChild
                >
                  <Link
                    href="https://selar.com/m/richvillepldigitalstore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Pay with Selar
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Alternative Payment */}
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="font-serif text-xl flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  Need Help with Payment?
                </CardTitle>
                <CardDescription className="font-serif">
                  Contact our support team for assistance or alternative payment methods
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="lg" className="w-full font-serif bg-transparent" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Course Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-sans font-bold text-foreground mb-4">What's Included</h3>
              <div className="space-y-3">
                {[
                  "Lifetime access to course materials",
                  "Interactive assignments and projects",
                  "Certificate of completion",
                  "Direct instructor support",
                  "Access to exclusive community",
                  "Regular course updates",
                  "Mobile and desktop access",
                  "30-day money-back guarantee",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="font-serif text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="font-serif text-lg text-accent">Special Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-muted-foreground mb-4">
                  Enroll now and get access to our exclusive alumni network and job placement assistance program.
                </p>
                <Badge className="bg-accent text-accent-foreground">Limited Time</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
