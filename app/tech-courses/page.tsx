import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Clock, Award, ArrowRight, Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const features = [
  {
    title: "Expert Instructors",
    description: "Learn from industry professionals with real-world experience.",
    icon: CheckCircle,
  },
  {
    title: "Flexible Learning",
    description: "Study at your own pace with our online courses.",
    icon: Users,
  },
  {
    title: "Hands-On Projects",
    description: "Work on real projects to build your portfolio.",
    icon: Clock,
  },
  {
    title: "Certification",
    description: "Receive a certificate upon course completion.",
    icon: Award,
  },
]

const courses = [
  {
    name: "Graphic Design with Canva",
    category: "Design",
    level: "Beginner",
    description:
      "Master visual communication through typography, color theory, and design principles using Canva's powerful design platform.",
    slug: "graphics-design",
    image: "/canva-interface.png",
  },
  {
    name: "UI/UX Design",
    category: "Design",
    level: "Intermediate",
    description: "Create intuitive user experiences and beautiful interfaces that solve real-world problems.",
    slug: "ui-ux-design",
    image: "/ui-ux-wireframes-prototypes.png",
  },
  {
    name: "Web Design with WordPress",
    category: "Design",
    level: "Beginner",
    description:
      "Build stunning, responsive websites using WordPress, the world's most popular content management system.",
    slug: "web-design",
    image: "/wordpress-web-builder.png",
  },
  {
    name: "Video Editing",
    category: "Media",
    level: "Beginner",
    description: "Transform raw footage into compelling stories using professional editing techniques and software.",
    slug: "video-editing",
    image: "/video-editing-timeline.png",
  },
  {
    name: "Digital Marketing",
    category: "Marketing",
    level: "Beginner",
    description:
      "Master online marketing strategies including SEO, social media, and content marketing to grow businesses.",
    slug: "digital-marketing",
    image: "/digital-marketing-analytics.png",
  },
  {
    name: "Web Development",
    category: "Development",
    level: "Intermediate",
    description: "Build dynamic, interactive websites using modern frameworks and programming languages.",
    slug: "web-development",
    image: "/web-development-code.png",
  },
  {
    name: "Mobile App Development",
    category: "Development",
    level: "Advanced",
    description: "Create native and cross-platform mobile applications for iOS and Android devices.",
    slug: "mobile-app-development",
    image: "/mobile-app-development.png",
  },
  {
    name: "Software Engineering",
    category: "Development",
    level: "Advanced",
    description: "Learn systematic approaches to designing, developing, and maintaining large-scale software systems.",
    slug: "software-engineering",
    image: "/software-architecture-diagrams.png",
  },
  {
    name: "Product Management",
    category: "Business",
    level: "Intermediate",
    description: "Guide products from conception to launch, balancing user needs with business objectives.",
    slug: "product-management",
    image: "/product-roadmap-boards.png",
  },
  {
    name: "Tech Consulting",
    category: "Business",
    level: "Advanced",
    description: "Provide strategic technology advice to help businesses optimize their digital transformation.",
    slug: "tech-consulting",
    image: "/tech-consulting-strategy.png",
  },
  {
    name: "Artificial Intelligence (AI)",
    category: "AI/ML",
    level: "Advanced",
    description: "Develop intelligent systems that can learn, reason, and make decisions like humans.",
    slug: "artificial-intelligence",
    image: "/ai-brain-neural-network.png",
  },
  {
    name: "Data Science",
    category: "AI/ML",
    level: "Advanced",
    description: "Extract insights from complex data using statistical analysis, machine learning, and visualization.",
    slug: "data-science",
    image: "/data-science-analytics.png",
  },
  {
    name: "DevOps",
    category: "Infrastructure",
    level: "Advanced",
    description: "Streamline software development and deployment through automation and collaboration practices.",
    slug: "devops",
    image: "/devops-pipeline-automation.png",
  },
  {
    name: "Cloud Computing",
    category: "Infrastructure",
    level: "Intermediate",
    description: "Deploy and manage scalable applications using cloud platforms like AWS, Azure, and Google Cloud.",
    slug: "cloud-computing",
    image: "/aws-cloud-infrastructure.png",
  },
  {
    name: "Cyber Security",
    category: "Security",
    level: "Advanced",
    description: "Protect digital assets and systems from cyber threats through comprehensive security strategies.",
    slug: "cyber-security",
    image: "/cyber-security-shield.png",
  },
  {
    name: "Blockchain Expert",
    category: "Blockchain",
    level: "Advanced",
    description: "Build decentralized applications and understand cryptocurrency technologies and smart contracts.",
    slug: "blockchain-expert",
    image: "/blockchain-cryptocurrency-smart-contracts.png",
  },
  {
    name: "Game Development",
    category: "Development",
    level: "Advanced",
    description: "Create immersive gaming experiences using modern game engines and programming techniques.",
    slug: "game-development",
    image: "/3d-game-character.png",
  },
  {
    name: "Robotics & IoT",
    category: "Hardware",
    level: "Advanced",
    description: "Design and program intelligent robots and connected devices for the Internet of Things.",
    slug: "robotics-iot",
    image: "/robotics-iot-automation.png",
  },
  {
    name: "3D Design & Animation",
    category: "Design",
    level: "Intermediate",
    description: "Create stunning 3D models, animations, and visual effects for games, films, and marketing.",
    slug: "3d-design-animation",
    image: "/3d-modeling-animation-character-design-software.png",
  },
  {
    name: "AR/VR Development",
    category: "Development",
    level: "Advanced",
    description: "Build immersive augmented and virtual reality experiences for various industries and applications.",
    slug: "ar-vr-development",
    image: "/ar-vr-immersive-experience.png",
  },
]

export default function TechCoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Link
            href="/"
            className="inline-flex items-center text-accent hover:text-accent/80 font-serif text-sm transition-colors"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <section className="bg-gradient-to-br from-background via-background to-muted py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-sans font-bold text-foreground mb-6">
              RichVille <span className="text-accent">Tech Courses</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-serif leading-relaxed max-w-4xl mx-auto">
              World-class training in the most in-demand tech skills, preparing you for opportunities in today's
              fast-changing digital world.
            </p>
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-lg px-6 py-2 font-serif">
                20+ Comprehensive Courses Available
              </Badge>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-center text-foreground mb-12">
              Why Choose RichVille Tech?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center border-accent/20 hover:border-accent/40 transition-colors">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                    <CardTitle className="font-serif text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-serif text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-center text-foreground mb-4">
              Our Course Catalog
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 font-serif max-w-3xl mx-auto">
              From beginner-friendly courses to advanced specializations, find the perfect path to advance your tech
              career.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-accent/20 hover:border-accent/40 overflow-hidden"
                >
                  <div className="relative h-48 w-full">
                    <Image src={course.image || "/placeholder.svg"} alt={course.name} fill className="object-cover" />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-xs">
                        {course.category}
                      </Badge>
                      <Badge
                        variant={
                          course.level === "Beginner"
                            ? "secondary"
                            : course.level === "Intermediate"
                              ? "default"
                              : "destructive"
                        }
                        className="text-xs"
                      >
                        {course.level}
                      </Badge>
                    </div>
                    <CardTitle className="font-serif text-lg leading-tight mb-2">{course.name}</CardTitle>
                    <CardDescription className="font-serif text-sm text-muted-foreground leading-relaxed">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link href={`/tech-courses/${course.slug}`}>
                      <Button variant="outline" size="sm" className="w-full font-serif bg-transparent">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-6">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-serif">
              Join thousands of students who have transformed their careers with RichVille Tech training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/payment">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-serif text-lg px-8 py-3"
                >
                  Enroll Now
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-accent font-serif text-lg px-8 py-3 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
