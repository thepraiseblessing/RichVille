import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Services | Richville Project Limited',
  description: 'Comprehensive solutions for wealth creation and personal development. Real estate investment, tech training, business coaching, financial education, and more.',
  keywords: 'real estate services Nigeria, tech training, business coaching, financial education, property management, digital skills',
};

export default function Services() {
  const services = [
    {
      icon: '🏢',
      title: 'Real Estate Investment & Property Management',
      description: 'Creating generational wealth through smart real estate systems and strategic investment opportunities across Nigeria.',
      features: [
        'Investment Opportunities',
        'Property Management Services',
        'Market Analysis & Insights',
        'Portfolio Growth Strategies',
        'Landlord Support & Resources'
      ],
      link: '/contact'
    },
    {
      icon: '💻',
      title: 'Digital Innovation & Tech Empowerment',
      description: 'Equipping individuals with in-demand digital skills, tools, and platforms for career growth in the modern economy.',
      features: [
        '20+ Comprehensive Tech Courses',
        'Hands-On Project Training',
        'Industry-Recognized Certifications',
        'Career Development Support',
        'Online Business Setup Guidance'
      ],
      link: '/tech-courses'
    },
    {
      icon: '💼',
      title: 'Business Coaching & Enterprise Development',
      description: 'Supporting startups, entrepreneurs, and visionaries to build scalable, purpose-driven businesses.',
      features: [
        'Startup Support & Consultation',
        'Business Strategy Development',
        'One-on-One Mentorship Programs',
        'Scaling & Growth Solutions',
        'Market Entry Strategies'
      ],
      link: '/contact'
    },
    {
      icon: '💰',
      title: 'Financial Literacy & Wealth Education',
      description: 'Teaching the principles and pathways that lead to personal finance mastery and long-term financial freedom.',
      features: [
        'Financial Planning Workshops',
        'Investment Education Programs',
        'Wealth Building Strategies',
        'Money Management Training',
        'Passive Income Systems'
      ],
      link: '/contact'
    },
    {
      icon: '🏘️',
      title: 'Landlords Community Network',
      description: 'Nigeria\'s most active property owners community providing support, resources, and networking opportunities.',
      features: [
        'Weekly Market Updates',
        'Expert Network Access',
        'Legal & Compliance Support',
        'Revenue Optimization Tips',
        'Monthly Meetups & Events'
      ],
      link: '/landlords-community'
    },
    {
      icon: '🎓',
      title: 'Youth Empowerment & Leadership Training',
      description: 'Mentoring the next generation of leaders to unlock their potential and create lasting impact.',
      features: [
        'Leadership Development Programs',
        'Campus Outreach Initiatives',
        'Community Engagement Projects',
        'Digital Mentorship',
        'Career Guidance & Planning'
      ],
      link: '/contact'
    }
  ];

  const whyChooseUs = [
    {
      icon: '✅',
      title: 'Proven Track Record',
      description: '5+ years of successfully transforming lives through our programs and services.'
    },
    {
      icon: '🎯',
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success and financial growth.'
    },
    {
      icon: '🚀',
      title: 'Practical Approach',
      description: 'Real-world strategies and hands-on training that deliver measurable results.'
    },
    {
      icon: '🤝',
      title: 'Strong Community',
      description: 'Join thousands of like-minded individuals committed to excellence.'
    },
    {
      icon: '💡',
      title: 'Innovative Solutions',
      description: 'Cutting-edge tools and platforms to keep you ahead of the curve.'
    },
    {
      icon: '📈',
      title: 'Continuous Support',
      description: 'Ongoing guidance and resources to ensure your long-term success.'
    }
  ];

  return (
    <>
      {/* Header Section */}
      <div className={styles.pageHeader}>
        <h1>Our Services</h1>
        <p>Comprehensive Solutions for Wealth Creation & Personal Development</p>
      </div>

      {/* Services Grid Section */}
      <section>
        <h2 className="section-title">What We Offer</h2>
        <p className="section-subtitle">
          Empowering you with the tools, knowledge, and community to achieve financial freedom
        </p>

        <div className="grid-3">
          {services.map((service, index) => (
            <div key={index} className="card">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {service.icon}
              </div>
              <h3 style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
                {service.title}
              </h3>
              <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                {service.description}
              </p>
              
              <ul style={{ 
                textAlign: 'left', 
                marginBottom: '1.5rem',
                color: 'var(--text-gray)',
                lineHeight: '2'
              }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>
                    • {feature}
                  </li>
                ))}
              </ul>

              <Link href={service.link} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ background: 'var(--light-card)', padding: '4rem 2rem', margin: '4rem 0', borderRadius: '15px' }}>
        <h2 className="section-title">Why Choose Richville?</h2>
        <p className="section-subtitle">
          Your trusted partner in building lasting wealth and achieving your goals
        </p>

        <div className="grid-3">
          {whyChooseUs.map((reason, index) => (
            <div key={index} style={{ 
              textAlign: 'center', 
              padding: '2rem',
              background: 'var(--light-bg)',
              borderRadius: '10px',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {reason.icon}
              </div>
              <h3 style={{ color: 'var(--primary-gold)', marginBottom: '0.8rem' }}>
                {reason.title}
              </h3>
              <p style={{ color: 'var(--text-gray)' }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process Section */}
      <section>
        <h2 className="section-title">How We Work With You</h2>
        <p className="section-subtitle">
          A simple, proven process to help you achieve your goals
        </p>

        <div className={styles.processGrid}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>1</div>
            <h3>Discovery Call</h3>
            <p>We discuss your goals, challenges, and aspirations to understand your unique needs.</p>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>2</div>
            <h3>Custom Strategy</h3>
            <p>We create a personalized roadmap tailored to your specific situation and objectives.</p>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>3</div>
            <h3>Implementation</h3>
            <p>You take action with our guidance, support, and proven systems to achieve results.</p>
          </div>

          <div className={styles.processStep}>
            <div className={styles.stepNumber}>4</div>
            <h3>Continuous Growth</h3>
            <p>We provide ongoing support, resources, and community to ensure your long-term success.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Ready to Get Started?</h2>
        <p style={{ marginBottom: '2rem', color: 'var(--text-gray-light)' }}>
          Choose the service that best fits your goals and begin your journey to financial freedom
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem' }}>
            Contact Us Today
          </Link>
          <Link href="/tech-courses" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem' }}>
            View Tech Courses
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: 'var(--light-card)', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 className="section-title">Our Impact in Numbers</h2>
        <div className="grid-4">
          <div>
            <h3 style={{ fontSize: '3rem', color: 'var(--primary-gold)', marginBottom: '0.5rem' }}>1000+</h3>
            <p style={{ color: 'var(--text-gray)' }}>Students Trained</p>
          </div>
          <div>
            <h3 style={{ fontSize: '3rem', color: 'var(--primary-gold)', marginBottom: '0.5rem' }}>500+</h3>
            <p style={{ color: 'var(--text-gray)' }}>Property Investors</p>
          </div>
          <div>
            <h3 style={{ fontSize: '3rem', color: 'var(--primary-gold)', marginBottom: '0.5rem' }}>20+</h3>
            <p style={{ color: 'var(--text-gray)' }}>Tech Courses</p>
          </div>
          <div>
            <h3 style={{ fontSize: '3rem', color: 'var(--primary-gold)', marginBottom: '0.5rem' }}>5+</h3>
            <p style={{ color: 'var(--text-gray)' }}>Years Experience</p>
          </div>
        </div>
      </section>
    </>
  );
}