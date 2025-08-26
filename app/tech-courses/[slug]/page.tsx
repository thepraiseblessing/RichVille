import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Award, ArrowLeft, Star, Globe, Briefcase } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const courseDetails = {
  "graphics-design": {
    name: "Graphic Design with Canva",
    category: "Design",
    level: "Beginner",
    duration: "12 weeks",
    students: "2,500+",
    rating: 4.8,
    description:
      "Master visual communication through typography, color theory, and design principles using Canva's powerful design platform.",
    overview:
      "This comprehensive graphic design course will transform you from a beginner to a confident designer using Canva's intuitive platform. You'll learn the fundamental principles of design, master Canva's extensive features, and build a portfolio that showcases your creativity and design skills without needing expensive software.",
    curriculum: [
      "Design Fundamentals & Color Theory",
      "Typography & Layout Principles",
      "Canva Interface & Navigation Mastery",
      "Brand Kit Setup & Brand Identity Design",
      "Social Media Graphics & Templates",
      "Print Design & Marketing Materials",
      "Presentations & Document Design",
      "Portfolio Development & Client Presentation",
    ],
    whyEnroll: [
      "High demand for visual content across all industries",
      "Flexible career options from freelancing to corporate roles",
      "Creative expression with user-friendly tools",
      "Cost-effective alternative to expensive design software",
      "Immediate application in personal and professional projects",
    ],
    importance:
      "In today's visual-first digital world, graphic design is more crucial than ever. Every business needs compelling visual content for marketing, branding, and communication. With the rise of social media, e-commerce, and digital marketing, skilled graphic designers are in high demand across industries. Canva has democratized design, making it accessible to everyone while maintaining professional quality. This field offers excellent career prospects with median salaries ranging from $45,000 to $85,000+ annually.",
    tools: ["Canva Pro", "Canva for Teams", "Canva Print", "Canva Video", "Canva Presentations"],
    outcomes: [
      "Create professional logos and brand identities using Canva",
      "Design marketing materials and social media graphics",
      "Develop presentations and document layouts",
      "Build a comprehensive design portfolio with Canva projects",
      "Master Canva's advanced features and integrations",
    ],
  },
  "ui-ux-design": {
    name: "UI/UX Design",
    category: "Design",
    level: "Intermediate",
    duration: "16 weeks",
    students: "1,800+",
    rating: 4.9,
    description: "Create intuitive user experiences and beautiful interfaces that solve real-world problems.",
    overview:
      "Dive deep into user-centered design principles and learn to create digital experiences that users love. This course combines psychology, design thinking, and technical skills to prepare you for a career in UX/UI design.",
    curriculum: [
      "User Research & Persona Development",
      "Information Architecture & User Flows",
      "Wireframing & Prototyping",
      "Visual Design & Interface Design",
      "Interaction Design & Micro-interactions",
      "Usability Testing & User Feedback",
      "Design Systems & Component Libraries",
      "Mobile-First & Responsive Design",
    ],
    whyEnroll: [
      "One of the fastest-growing tech careers",
      "High salary potential ($70,000-$120,000+)",
      "Work on products used by millions of people",
      "Combine creativity with problem-solving",
      "Remote work opportunities available globally",
    ],
    importance:
      "As digital products become central to business success, UX/UI designers are essential for creating competitive advantages. Companies like Apple, Google, and Netflix invest heavily in user experience because it directly impacts customer satisfaction and business metrics. The field is projected to grow 13% by 2030, much faster than average occupations.",
    tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro", "Principle", "Framer"],
    outcomes: [
      "Conduct user research and create personas",
      "Design complete mobile and web applications",
      "Build interactive prototypes and test usability",
      "Create and maintain design systems",
      "Present design decisions to stakeholders",
    ],
  },
  "web-development": {
    name: "Web Development",
    category: "Development",
    level: "Intermediate",
    duration: "20 weeks",
    students: "3,200+",
    rating: 4.7,
    description: "Build dynamic, interactive websites using modern frameworks and programming languages.",
    overview:
      "Master full-stack web development with hands-on projects that simulate real-world scenarios. Learn both frontend and backend technologies to become a versatile developer capable of building complete web applications.",
    curriculum: [
      "HTML5, CSS3 & Responsive Design",
      "JavaScript ES6+ & DOM Manipulation",
      "React.js & Component-Based Architecture",
      "Node.js & Express.js Backend Development",
      "Database Design & MongoDB/PostgreSQL",
      "RESTful APIs & GraphQL",
      "Authentication & Security Best Practices",
      "Deployment & DevOps Fundamentals",
    ],
    whyEnroll: [
      "Highest demand in tech job market",
      "Excellent salary range ($60,000-$130,000+)",
      "Work remotely for companies worldwide",
      "Build your own products and startups",
      "Continuous learning keeps work exciting",
    ],
    importance:
      "Web development is the backbone of the digital economy. Every business needs a web presence, and the demand for skilled developers continues to outpace supply. With the rise of e-commerce, SaaS products, and digital transformation, web developers are essential for business growth and innovation.",
    tools: ["VS Code", "React", "Node.js", "MongoDB", "Git", "AWS", "Docker"],
    outcomes: [
      "Build responsive, interactive websites",
      "Develop full-stack web applications",
      "Create and consume APIs",
      "Deploy applications to cloud platforms",
      "Collaborate using version control systems",
    ],
  },
  "artificial-intelligence": {
    name: "Artificial Intelligence (AI)",
    category: "AI/ML",
    level: "Advanced",
    duration: "24 weeks",
    students: "950+",
    rating: 4.9,
    description: "Develop intelligent systems that can learn, reason, and make decisions like humans.",
    overview:
      "Explore the cutting-edge field of artificial intelligence and machine learning. This comprehensive course covers everything from basic algorithms to advanced deep learning techniques, preparing you for the AI revolution.",
    curriculum: [
      "AI Fundamentals & Machine Learning Basics",
      "Python Programming for AI",
      "Supervised & Unsupervised Learning",
      "Neural Networks & Deep Learning",
      "Natural Language Processing (NLP)",
      "Computer Vision & Image Recognition",
      "Reinforcement Learning",
      "AI Ethics & Responsible AI Development",
    ],
    whyEnroll: [
      "Highest-paying tech specialization ($90,000-$200,000+)",
      "Shape the future of technology and society",
      "Work on breakthrough innovations",
      "High job security in growing field",
      "Opportunities in every industry sector",
    ],
    importance:
      "AI is transforming every industry from healthcare to finance, transportation to entertainment. Companies are investing billions in AI research and implementation. The global AI market is expected to reach $1.8 trillion by 2030, creating unprecedented opportunities for skilled AI professionals.",
    tools: ["Python", "TensorFlow", "PyTorch", "Jupyter Notebooks", "OpenAI APIs", "Hugging Face"],
    outcomes: [
      "Build machine learning models from scratch",
      "Develop AI-powered applications",
      "Implement computer vision solutions",
      "Create chatbots and NLP systems",
      "Deploy AI models to production",
    ],
  },
  "cyber-security": {
    name: "Cyber Security",
    category: "Security",
    level: "Advanced",
    duration: "18 weeks",
    students: "1,200+",
    rating: 4.8,
    description: "Protect digital assets and systems from cyber threats through comprehensive security strategies.",
    overview:
      "Learn to defend against cyber threats in our increasingly connected world. This course covers both offensive and defensive security techniques, preparing you to protect organizations from sophisticated cyber attacks.",
    curriculum: [
      "Cybersecurity Fundamentals & Threat Landscape",
      "Network Security & Firewalls",
      "Ethical Hacking & Penetration Testing",
      "Incident Response & Digital Forensics",
      "Cloud Security & Zero Trust Architecture",
      "Cryptography & Data Protection",
      "Security Compliance & Risk Management",
      "Advanced Persistent Threats (APTs)",
    ],
    whyEnroll: [
      "Critical shortage of cybersecurity professionals",
      "Excellent job security and growth prospects",
      "High salaries ($75,000-$150,000+)",
      "Protect organizations and individuals",
      "Work in diverse industries and roles",
    ],
    importance:
      "Cybercrime damages are projected to reach $10.5 trillion annually by 2025. Organizations desperately need skilled cybersecurity professionals to protect their digital assets. The field has a 0% unemployment rate with 3.5 million unfilled positions globally, making it one of the most secure career paths in tech.",
    tools: ["Kali Linux", "Wireshark", "Metasploit", "Nmap", "Burp Suite", "SIEM Tools"],
    outcomes: [
      "Conduct security assessments and audits",
      "Perform ethical hacking and penetration testing",
      "Implement security policies and procedures",
      "Respond to security incidents effectively",
      "Design secure network architectures",
    ],
  },
  "mobile-app-development": {
    name: "Mobile App Development",
    category: "Development",
    level: "Advanced",
    duration: "20 weeks",
    students: "1,500+",
    rating: 4.7,
    description: "Create native and cross-platform mobile applications for iOS and Android devices.",
    overview:
      "Master mobile app development with hands-on projects that teach you to build professional mobile applications. Learn both native and cross-platform development approaches, from UI design to app store deployment, preparing you for a lucrative career in mobile development.",
    curriculum: [
      "Mobile Development Fundamentals",
      "React Native & Cross-Platform Development",
      "Native iOS Development with Swift",
      "Native Android Development with Kotlin",
      "Mobile UI/UX Design Principles",
      "API Integration & Data Management",
      "Push Notifications & Device Features",
      "App Store Optimization & Deployment",
    ],
    whyEnroll: [
      "Mobile apps generate billions in revenue annually",
      "High demand with excellent salary potential ($70,000-$140,000+)",
      "Create apps used by millions of people worldwide",
      "Freelance opportunities and startup potential",
      "Work remotely for global companies",
    ],
    importance:
      "With over 6.8 billion smartphone users worldwide, mobile apps are essential for business success. The mobile app market is projected to reach $613 billion by 2025. Companies across all industries need mobile solutions, creating massive opportunities for skilled mobile developers. From e-commerce to healthcare, entertainment to finance, mobile apps are transforming how we interact with technology.",
    tools: ["React Native", "Swift", "Kotlin", "Xcode", "Android Studio", "Firebase", "Expo"],
    outcomes: [
      "Build cross-platform mobile applications",
      "Develop native iOS and Android apps",
      "Integrate APIs and backend services",
      "Publish apps to App Store and Google Play",
      "Implement mobile-specific features and optimizations",
    ],
  },
  "web-design": {
    name: "Web Design with WordPress",
    category: "Design",
    level: "Beginner",
    duration: "10 weeks",
    students: "2,800+",
    rating: 4.6,
    description:
      "Build stunning, responsive websites using WordPress, the world's most popular content management system.",
    overview:
      "Learn to create stunning, professional websites using WordPress, the world's most popular content management system. This course covers everything from basic setup to advanced customization, enabling you to build websites for clients or your own business without needing to code.",
    curriculum: [
      "WordPress Fundamentals & Setup",
      "Theme Selection & Customization",
      "Page Builders (Elementor, Gutenberg)",
      "Content Creation & SEO Optimization",
      "E-commerce with WooCommerce",
      "Website Security & Maintenance",
      "Performance Optimization",
      "Client Management & Business Skills",
    ],
    whyEnroll: [
      "WordPress powers 43% of all websites globally",
      "High demand for WordPress developers and designers",
      "Start freelancing immediately after completion",
      "No coding knowledge required to get started",
      "Scalable from simple blogs to complex e-commerce sites",
    ],
    importance:
      "WordPress is the backbone of the modern web, powering everything from personal blogs to Fortune 500 company websites. With the rise of digital transformation, businesses need professional websites more than ever. WordPress skills are highly marketable, with freelancers earning $25-$100+ per hour and agencies charging thousands for website projects.",
    tools: ["WordPress", "Elementor", "WooCommerce", "Yoast SEO", "Gutenberg", "Figma", "Canva"],
    outcomes: [
      "Build professional WordPress websites from scratch",
      "Customize themes and create unique designs",
      "Set up e-commerce stores with WooCommerce",
      "Optimize websites for search engines and performance",
      "Manage client projects and deliver professional results",
    ],
  },
  "video-editing": {
    name: "Video Editing",
    category: "Media",
    level: "Beginner",
    duration: "8 weeks",
    students: "1,200+",
    rating: 4.7,
    description: "Transform raw footage into compelling stories using professional editing techniques and software.",
    overview:
      "Master the art of video editing and storytelling through hands-on projects. Learn industry-standard techniques for creating engaging content for social media, marketing, documentaries, and entertainment.",
    curriculum: [
      "Video Editing Fundamentals & Workflow",
      "Cutting, Trimming & Timeline Management",
      "Color Correction & Color Grading",
      "Audio Editing & Sound Design",
      "Motion Graphics & Visual Effects",
      "Transitions & Advanced Techniques",
      "Export Settings & Platform Optimization",
      "Portfolio Development & Client Work",
    ],
    whyEnroll: [
      "High demand for video content across all platforms",
      "Freelance opportunities with flexible schedules",
      "Creative expression with technical skills",
      "Growing market in digital marketing and entertainment",
      "Work with brands, influencers, and media companies",
    ],
    importance:
      "Video content dominates digital marketing with 86% of businesses using video as a marketing tool. The global video editing software market is expected to reach $932.7 million by 2025. With platforms like YouTube, TikTok, and Instagram prioritizing video content, skilled video editors are essential for brand success.",
    tools: ["Adobe Premiere Pro", "Final Cut Pro", "DaVinci Resolve", "After Effects", "Audition"],
    outcomes: [
      "Edit professional videos for various platforms",
      "Apply color correction and grading techniques",
      "Create motion graphics and visual effects",
      "Optimize videos for different social media platforms",
      "Build a compelling video editing portfolio",
    ],
  },
  "digital-marketing": {
    name: "Digital Marketing",
    category: "Marketing",
    level: "Beginner",
    duration: "12 weeks",
    students: "3,500+",
    rating: 4.8,
    description:
      "Master online marketing strategies including SEO, social media, and content marketing to grow businesses.",
    overview:
      "Learn comprehensive digital marketing strategies that drive real business results. From SEO to social media advertising, this course covers all essential digital marketing channels and analytics.",
    curriculum: [
      "Digital Marketing Fundamentals",
      "Search Engine Optimization (SEO)",
      "Google Ads & Pay-Per-Click (PPC)",
      "Social Media Marketing & Advertising",
      "Content Marketing & Copywriting",
      "Email Marketing & Automation",
      "Analytics & Performance Measurement",
      "Marketing Strategy & Campaign Management",
    ],
    whyEnroll: [
      "Every business needs digital marketing expertise",
      "High ROI career with measurable results",
      "Work remotely or start your own agency",
      "Constant evolution keeps work interesting",
      "Excellent salary potential ($50,000-$100,000+)",
    ],
    importance:
      "Digital marketing spending is expected to reach $786.2 billion by 2026. Companies are shifting budgets from traditional to digital marketing, creating massive demand for skilled professionals. Digital marketing offers measurable ROI and precise targeting, making it essential for business growth.",
    tools: ["Google Analytics", "Google Ads", "Facebook Ads Manager", "Mailchimp", "SEMrush", "Hootsuite"],
    outcomes: [
      "Create and manage successful ad campaigns",
      "Optimize websites for search engines",
      "Develop comprehensive marketing strategies",
      "Analyze and report on marketing performance",
      "Build and grow social media communities",
    ],
  },
  "software-engineering": {
    name: "Software Engineering",
    category: "Development",
    level: "Advanced",
    duration: "24 weeks",
    students: "1,800+",
    rating: 4.9,
    description: "Learn systematic approaches to designing, developing, and maintaining large-scale software systems.",
    overview:
      "Master the principles and practices of professional software development. Learn to build scalable, maintainable software systems using industry best practices and modern development methodologies.",
    curriculum: [
      "Software Development Life Cycle (SDLC)",
      "Object-Oriented Programming & Design Patterns",
      "Data Structures & Algorithms",
      "System Design & Architecture",
      "Testing & Quality Assurance",
      "Version Control & Collaboration",
      "Agile Methodologies & Project Management",
      "DevOps & Continuous Integration/Deployment",
    ],
    whyEnroll: [
      "Highest-paying tech career path ($80,000-$180,000+)",
      "Work on products that impact millions of users",
      "Excellent job security and growth opportunities",
      "Remote work opportunities worldwide",
      "Foundation for tech leadership roles",
    ],
    importance:
      "Software engineering is the backbone of the digital economy. Every industry relies on software systems, from healthcare to finance, entertainment to transportation. The Bureau of Labor Statistics projects 22% growth in software engineering jobs through 2030, much faster than average.",
    tools: ["Java", "Python", "JavaScript", "Git", "Docker", "Kubernetes", "AWS", "Jenkins"],
    outcomes: [
      "Design and build large-scale software systems",
      "Apply software engineering best practices",
      "Lead development teams and projects",
      "Implement testing and quality assurance processes",
      "Deploy and maintain production systems",
    ],
  },
  "product-management": {
    name: "Product Management",
    category: "Business",
    level: "Intermediate",
    duration: "14 weeks",
    students: "1,100+",
    rating: 4.8,
    description: "Guide products from conception to launch, balancing user needs with business objectives.",
    overview:
      "Learn to drive product strategy and execution in today's competitive market. Master the skills needed to identify opportunities, define requirements, and lead cross-functional teams to deliver successful products.",
    curriculum: [
      "Product Strategy & Market Analysis",
      "User Research & Customer Development",
      "Product Roadmapping & Prioritization",
      "Agile Product Development",
      "Data Analysis & Metrics",
      "Stakeholder Management",
      "Go-to-Market Strategy",
      "Product Leadership & Team Management",
    ],
    whyEnroll: [
      "Bridge between business and technology",
      "High impact on company success",
      "Excellent career progression opportunities",
      "Strong salary potential ($90,000-$160,000+)",
      "Work with diverse teams and stakeholders",
    ],
    importance:
      "Product management is critical for business success in the digital age. Companies with strong product management practices are 2.5x more likely to outperform competitors. The role combines business strategy, user experience, and technology to drive innovation and growth.",
    tools: ["Jira", "Confluence", "Figma", "Google Analytics", "Mixpanel", "Slack", "Notion"],
    outcomes: [
      "Develop comprehensive product strategies",
      "Conduct user research and market analysis",
      "Create and manage product roadmaps",
      "Lead cross-functional product teams",
      "Launch successful products to market",
    ],
  },
  "tech-consulting": {
    name: "Tech Consulting",
    category: "Business",
    level: "Advanced",
    duration: "16 weeks",
    students: "800+",
    rating: 4.7,
    description: "Provide strategic technology advice to help businesses optimize their digital transformation.",
    overview:
      "Learn to analyze business challenges and provide technology solutions that drive growth and efficiency. Develop the consulting skills needed to work with C-level executives and lead digital transformation initiatives.",
    curriculum: [
      "Business Analysis & Requirements Gathering",
      "Technology Assessment & Strategy",
      "Digital Transformation Planning",
      "Change Management & Implementation",
      "Client Relationship Management",
      "Presentation & Communication Skills",
      "Project Management & Delivery",
      "Industry-Specific Solutions",
    ],
    whyEnroll: [
      "Work with diverse clients and industries",
      "High earning potential ($100,000-$200,000+)",
      "Develop broad business and technical skills",
      "Travel opportunities and flexible work",
      "Path to executive and leadership roles",
    ],
    importance:
      "Digital transformation spending is expected to reach $2.8 trillion by 2025. Organizations need expert guidance to navigate complex technology decisions and implementations. Tech consultants bridge the gap between business needs and technology solutions.",
    tools: ["Microsoft Office Suite", "Salesforce", "Tableau", "Power BI", "Slack", "Zoom", "Project Management Tools"],
    outcomes: [
      "Analyze business processes and identify improvements",
      "Develop technology strategies and roadmaps",
      "Lead digital transformation projects",
      "Present solutions to executive stakeholders",
      "Build long-term client relationships",
    ],
  },
  "data-science": {
    name: "Data Science",
    category: "AI/ML",
    level: "Advanced",
    duration: "22 weeks",
    students: "1,400+",
    rating: 4.9,
    description: "Extract insights from complex data using statistical analysis, machine learning, and visualization.",
    overview:
      "Master the complete data science workflow from data collection to actionable insights. Learn to work with big data, build predictive models, and communicate findings to drive business decisions.",
    curriculum: [
      "Statistics & Probability for Data Science",
      "Python Programming & Data Manipulation",
      "Data Visualization & Storytelling",
      "Machine Learning Algorithms",
      "Big Data Technologies",
      "Database Management & SQL",
      "A/B Testing & Experimentation",
      "Business Intelligence & Reporting",
    ],
    whyEnroll: [
      "One of the highest-paying tech careers ($95,000-$170,000+)",
      "Work across all industries and sectors",
      "Solve complex problems with data",
      "High demand with limited supply of talent",
      "Foundation for AI and machine learning careers",
    ],
    importance:
      "Data is the new oil of the digital economy. Organizations generate 2.5 quintillion bytes of data daily, creating massive opportunities for data scientists. The field is projected to grow 31% through 2030, with companies investing heavily in data-driven decision making.",
    tools: ["Python", "R", "SQL", "Tableau", "Power BI", "Jupyter Notebooks", "Apache Spark", "TensorFlow"],
    outcomes: [
      "Analyze complex datasets and extract insights",
      "Build predictive models and algorithms",
      "Create compelling data visualizations",
      "Design and run A/B tests",
      "Communicate findings to business stakeholders",
    ],
  },
  devops: {
    name: "DevOps",
    category: "Infrastructure",
    level: "Advanced",
    duration: "18 weeks",
    students: "1,000+",
    rating: 4.8,
    description: "Streamline software development and deployment through automation and collaboration practices.",
    overview:
      "Learn to bridge the gap between development and operations teams. Master automation, continuous integration/deployment, and infrastructure management to accelerate software delivery.",
    curriculum: [
      "DevOps Culture & Methodologies",
      "Version Control & Git Workflows",
      "Continuous Integration/Continuous Deployment (CI/CD)",
      "Infrastructure as Code (IaC)",
      "Containerization with Docker & Kubernetes",
      "Cloud Platforms (AWS, Azure, GCP)",
      "Monitoring & Logging",
      "Security & Compliance Automation",
    ],
    whyEnroll: [
      "Critical role in modern software development",
      "High salary potential ($85,000-$150,000+)",
      "Work with cutting-edge technologies",
      "Bridge technical and business objectives",
      "Excellent job security and growth prospects",
    ],
    importance:
      "DevOps practices can reduce deployment failures by 60% and recovery time by 168x. Organizations adopting DevOps deploy code 30x more frequently with 50% fewer failures. The global DevOps market is expected to reach $25.5 billion by 2028.",
    tools: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "AWS", "Prometheus", "Git"],
    outcomes: [
      "Implement CI/CD pipelines",
      "Manage cloud infrastructure and deployments",
      "Automate testing and deployment processes",
      "Monitor and optimize system performance",
      "Ensure security and compliance in DevOps workflows",
    ],
  },
  "cloud-computing": {
    name: "Cloud Computing",
    category: "Infrastructure",
    level: "Intermediate",
    duration: "16 weeks",
    students: "2,200+",
    rating: 4.7,
    description: "Deploy and manage scalable applications using cloud platforms like AWS, Azure, and Google Cloud.",
    overview:
      "Master cloud computing fundamentals and advanced services across major cloud platforms. Learn to design, deploy, and manage scalable, secure, and cost-effective cloud solutions.",
    curriculum: [
      "Cloud Computing Fundamentals",
      "Amazon Web Services (AWS) Core Services",
      "Microsoft Azure Platform",
      "Google Cloud Platform (GCP)",
      "Cloud Security & Compliance",
      "Serverless Computing & Functions",
      "Cloud Migration Strategies",
      "Cost Optimization & Management",
    ],
    whyEnroll: [
      "Cloud adoption is accelerating across all industries",
      "High demand for cloud professionals ($75,000-$140,000+)",
      "Work with scalable, modern technologies",
      "Remote work opportunities globally",
      "Foundation for DevOps and architecture roles",
    ],
    importance:
      "Cloud computing market is expected to reach $1.6 trillion by 2030. 94% of enterprises use cloud services, driving massive demand for cloud professionals. Cloud skills are essential for digital transformation and business continuity.",
    tools: ["AWS", "Microsoft Azure", "Google Cloud", "Terraform", "Docker", "Kubernetes", "CloudFormation"],
    outcomes: [
      "Design and deploy cloud architectures",
      "Manage cloud resources and costs effectively",
      "Implement cloud security best practices",
      "Migrate applications to cloud platforms",
      "Optimize cloud performance and scalability",
    ],
  },
  "blockchain-expert": {
    name: "Blockchain Expert",
    category: "Blockchain",
    level: "Advanced",
    duration: "20 weeks",
    students: "600+",
    rating: 4.6,
    description: "Build decentralized applications and understand cryptocurrency technologies and smart contracts.",
    overview:
      "Dive deep into blockchain technology and cryptocurrency development. Learn to build decentralized applications, smart contracts, and understand the future of decentralized finance (DeFi).",
    curriculum: [
      "Blockchain Fundamentals & Cryptography",
      "Bitcoin & Cryptocurrency Technologies",
      "Ethereum & Smart Contract Development",
      "Solidity Programming Language",
      "Decentralized Applications (DApps)",
      "DeFi Protocols & Applications",
      "NFTs & Digital Asset Creation",
      "Blockchain Security & Auditing",
    ],
    whyEnroll: [
      "Emerging technology with massive potential",
      "High salary potential ($90,000-$180,000+)",
      "Work on revolutionary financial technologies",
      "Limited supply of blockchain developers",
      "Opportunities in startups and enterprises",
    ],
    importance:
      "Blockchain market is projected to grow from $7.18 billion to $163.83 billion by 2029. Major corporations and governments are investing in blockchain solutions for supply chain, finance, and identity management. Early adoption provides significant career advantages.",
    tools: ["Solidity", "Web3.js", "Truffle", "Hardhat", "MetaMask", "IPFS", "Ganache"],
    outcomes: [
      "Develop smart contracts and DApps",
      "Build cryptocurrency and token systems",
      "Create NFT marketplaces and platforms",
      "Implement blockchain security measures",
      "Design decentralized finance solutions",
    ],
  },
  "game-development": {
    name: "Game Development",
    category: "Development",
    level: "Advanced",
    duration: "22 weeks",
    students: "900+",
    rating: 4.8,
    description: "Create immersive gaming experiences using modern game engines and programming techniques.",
    overview:
      "Learn to create engaging games from concept to completion. Master game design principles, programming, and modern game engines to build games for multiple platforms.",
    curriculum: [
      "Game Design Principles & Theory",
      "Unity Game Engine Development",
      "Unreal Engine Fundamentals",
      "C# Programming for Games",
      "2D & 3D Game Development",
      "Game Physics & Animation",
      "Multiplayer Game Development",
      "Game Publishing & Monetization",
    ],
    whyEnroll: [
      "Gaming industry worth over $200 billion globally",
      "Creative and technical skill combination",
      "Work on entertainment products millions enjoy",
      "Indie game development opportunities",
      "Growing mobile and VR gaming markets",
    ],
    importance:
      "The gaming industry is larger than movies and music combined, generating $184 billion in 2022. Mobile gaming alone accounts for 50% of the market. With emerging technologies like VR, AR, and cloud gaming, the industry continues rapid expansion.",
    tools: ["Unity", "Unreal Engine", "C#", "JavaScript", "Blender", "Photoshop", "Visual Studio"],
    outcomes: [
      "Develop 2D and 3D games",
      "Create game mechanics and systems",
      "Implement multiplayer functionality",
      "Publish games to app stores and platforms",
      "Design engaging user experiences",
    ],
  },
  "robotics-iot": {
    name: "Robotics & IoT",
    category: "Hardware",
    level: "Advanced",
    duration: "20 weeks",
    students: "500+",
    rating: 4.7,
    description: "Design and program intelligent robots and connected devices for the Internet of Things.",
    overview:
      "Explore the intersection of hardware and software in robotics and IoT. Learn to build intelligent systems that interact with the physical world and connect to the internet.",
    curriculum: [
      "Robotics Fundamentals & Mechanics",
      "Microcontrollers & Embedded Systems",
      "Sensors & Actuators",
      "IoT Architecture & Protocols",
      "Robot Programming & Control",
      "Machine Learning for Robotics",
      "Industrial Automation",
      "IoT Security & Edge Computing",
    ],
    whyEnroll: [
      "Rapidly growing field with automation trends",
      "Work on cutting-edge technology",
      "High demand in manufacturing and healthcare",
      "Combine hardware and software skills",
      "Excellent salary potential ($80,000-$150,000+)",
    ],
    importance:
      "The global robotics market is expected to reach $568 billion by 2030. IoT devices are projected to reach 75 billion by 2025. Industries are automating processes and connecting devices, creating massive opportunities for robotics and IoT professionals.",
    tools: ["Arduino", "Raspberry Pi", "ROS", "Python", "C++", "MQTT", "TensorFlow Lite"],
    outcomes: [
      "Build and program autonomous robots",
      "Develop IoT systems and applications",
      "Implement machine learning in robotics",
      "Design industrial automation solutions",
      "Create connected device ecosystems",
    ],
  },
  "3d-design-animation": {
    name: "3D Design & Animation",
    category: "Design",
    level: "Intermediate",
    duration: "18 weeks",
    students: "800+",
    rating: 4.8,
    description: "Create stunning 3D models, animations, and visual effects for games, films, and marketing.",
    overview:
      "Master 3D modeling, animation, and rendering techniques used in entertainment, advertising, and product design. Learn industry-standard software and workflows to create professional 3D content.",
    curriculum: [
      "3D Modeling Fundamentals",
      "Texturing & Materials",
      "Lighting & Rendering",
      "Character Modeling & Rigging",
      "Animation Principles & Techniques",
      "Visual Effects & Compositing",
      "Architectural Visualization",
      "Portfolio Development & Industry Practices",
    ],
    whyEnroll: [
      "High demand in entertainment and advertising",
      "Creative career with technical skills",
      "Work on movies, games, and commercials",
      "Freelance and remote work opportunities",
      "Growing market in VR/AR content creation",
    ],
    importance:
      "The 3D animation market is expected to reach $33.78 billion by 2028. With the rise of streaming content, gaming, and virtual experiences, demand for 3D artists continues to grow across entertainment, architecture, and product design industries.",
    tools: ["Blender", "Maya", "3ds Max", "Cinema 4D", "Substance Painter", "After Effects"],
    outcomes: [
      "Create professional 3D models and animations",
      "Develop characters and environments",
      "Produce visual effects and motion graphics",
      "Build architectural visualizations",
      "Work with industry-standard pipelines",
    ],
  },
  "ar-vr-development": {
    name: "AR/VR Development",
    category: "Development",
    level: "Advanced",
    duration: "20 weeks",
    students: "400+",
    rating: 4.9,
    description: "Build immersive augmented and virtual reality experiences for various industries and applications.",
    overview:
      "Enter the exciting world of immersive technologies. Learn to create AR and VR applications that transform how people interact with digital content and the physical world.",
    curriculum: [
      "AR/VR Fundamentals & Hardware",
      "Unity for AR/VR Development",
      "Unreal Engine VR Development",
      "ARKit & ARCore Development",
      "3D Interaction Design",
      "Spatial Computing & Hand Tracking",
      "Performance Optimization",
      "Cross-Platform Deployment",
    ],
    whyEnroll: [
      "Cutting-edge technology with massive potential",
      "High salary potential ($85,000-$160,000+)",
      "Work on revolutionary user experiences",
      "Limited competition in emerging field",
      "Applications across multiple industries",
    ],
    importance:
      "The AR/VR market is projected to reach $209 billion by 2025. Major tech companies are investing billions in metaverse and spatial computing. Early adoption of AR/VR skills provides significant career advantages in this rapidly growing field.",
    tools: ["Unity", "Unreal Engine", "ARKit", "ARCore", "Oculus SDK", "HoloLens", "WebXR"],
    outcomes: [
      "Develop AR mobile applications",
      "Create immersive VR experiences",
      "Build cross-platform AR/VR solutions",
      "Implement spatial computing features",
      "Deploy to various AR/VR platforms",
    ],
  },
}

// Add more course details as needed - this is a sample of 6 courses
// You can expand this object to include all 20 courses

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courseDetails[params.slug as keyof typeof courseDetails]

  if (!course) {
    notFound()
  }

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

          <div className="flex flex-wrap gap-4 mb-6">
            <Badge variant="outline">{course.category}</Badge>
            <Badge
              variant={
                course.level === "Beginner" ? "secondary" : course.level === "Intermediate" ? "default" : "destructive"
              }
            >
              {course.level}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-4">{course.name}</h1>
          <p className="text-xl text-muted-foreground mb-8 font-serif leading-relaxed">{course.description}</p>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{course.students} students</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span>{course.rating}/5.0 rating</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">Course Overview</h2>
              <p className="text-muted-foreground font-serif leading-relaxed">{course.overview}</p>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.curriculum.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="font-serif text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Enroll */}
            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-6">Why Enroll in This Course?</h2>
              <div className="space-y-3">
                {course.whyEnroll.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="font-serif text-muted-foreground">{reason}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Importance */}
            <section>
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">
                <Globe className="inline h-6 w-6 mr-2 text-accent" />
                Importance in Today's World
              </h2>
              <p className="text-muted-foreground font-serif leading-relaxed">{course.importance}</p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Enrollment Card */}
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Ready to Start?</CardTitle>
                <CardDescription className="font-serif">
                  Join {course.students} students already enrolled
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-serif"
                  asChild
                >
                  <Link href="/payment" target="_blank" rel="noopener noreferrer">
                    Enroll Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full font-serif bg-transparent" asChild>
                  <Link href="/#contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Tools & Technologies */}
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="font-serif text-lg">Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {course.tools.map((tool, index) => (
                    <Badge key={index} variant="secondary" className="font-serif">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Outcomes */}
            <Card className="border-accent/20">
              <CardHeader>
                <CardTitle className="font-serif text-lg">
                  <Briefcase className="inline h-5 w-5 mr-2" />
                  Career Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {course.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-serif text-muted-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
