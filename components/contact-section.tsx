"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import { sendContactEmail } from "@/lib/send-email"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formDataObj = new FormData()
    formDataObj.append("firstName", formData.firstName)
    formDataObj.append("lastName", formData.lastName)
    formDataObj.append("email", formData.email)
    formDataObj.append("phone", formData.phone)
    formDataObj.append("message", formData.message)

    try {
      const result = await sendContactEmail(formDataObj)
      setSubmitMessage(result.message)
      setShowSuccess(result.success)

      if (result.success) {
        // Reset form on success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        })
      }
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.")
      setShowSuccess(false)
    } finally {
      setIsSubmitting(false)
      // Hide message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false)
        setSubmitMessage("")
      }, 5000)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "officialrichvillegroup@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "09020464872",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Ebonyi State",
      description: "Come say hello at our office",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showSuccess && submitMessage && (
          <div className="fixed top-4 right-4 z-50 bg-accent text-accent-foreground px-6 py-4 rounded-lg shadow-lg border border-accent/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
              <p className="font-serif">{submitMessage}</p>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground mb-6">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed">
            Ready to start your journey towards financial freedom? Contact us today and let's discuss how we can help
            you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-sans font-semibold text-foreground mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground font-serif leading-relaxed mb-8">
                We're here to help you take the next step in your journey. Whether you're interested in real estate
                investment, business coaching, or financial education, our team is ready to guide you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <info.icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-lg font-sans font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-accent font-serif font-medium mb-1 text-sm sm:text-base break-all">
                          {info.details}
                        </p>
                        <p className="text-sm text-muted-foreground font-serif">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-sans font-semibold text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-sm font-serif font-medium text-foreground mb-2 block">First Name</label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="border-border focus:border-accent focus:ring-accent/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-serif font-medium text-foreground mb-2 block">Last Name</label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="border-border focus:border-accent focus:ring-accent/20"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-sm font-serif font-medium text-foreground mb-2 block">Email</label>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border-border focus:border-accent focus:ring-accent/20 text-sm sm:text-base"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="text-sm font-serif font-medium text-foreground mb-2 block">Phone Number</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="border-border focus:border-accent focus:ring-accent/20"
                  />
                </div>

                <div className="mb-6">
                  <label className="text-sm font-serif font-medium text-foreground mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your goals and how we can help you..."
                    rows={5}
                    className="border-border focus:border-accent focus:ring-accent/20"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-serif text-lg py-3 group disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
