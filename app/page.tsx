import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Home | Richville Project Limited - Real Estate & Tech Training in Nigeria',
  description: 'Building a generation of purpose-driven, financially free individuals through strategic real estate investment, digital skills training, and wealth creation systems in Nigeria.',
};

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Empowering Lives for Purpose & Financial Freedom</h1>
          <p>
            Building a generation of purpose-driven, financially free individuals through
            strategic real estate investment, digital skills training, and wealth creation
            systems in Nigeria.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/services" className="btn btn-primary">
              Explore Our Services
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className="grid-4">
          <div className={styles.statItem}>
            <h3>20+</h3>
            <p>Tech Courses Available</p>
          </div>
          <div className={styles.statItem}>
            <h3>1000+</h3>
            <p>Students Trained</p>
          </div>
          <div className={styles.statItem}>
            <h3>500+</h3>
            <p>Property Investors</p>
          </div>
          <div className={styles.statItem}>
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Our Core Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions for wealth creation and personal development
        </p>

        <div className="grid-3">
          <div className="card">
            <div className={styles.serviceIcon}>🏢</div>
            <h3 style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
              Real Estate Investment
            </h3>
            <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem' }}>
              Smart property investment opportunities, portfolio management, and wealth
              creation through strategic real estate systems in Nigeria.
            </p>
            <Link href="/services" className="btn btn-primary">
              Learn More
            </Link>
          </div>

          <div className="card">
            <div className={styles.serviceIcon}>💻</div>
            <h3 style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
              Tech Training & Digital Skills
            </h3>
            <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem' }}>
              World-class training in 20+ tech courses including web development, UI/UX
              design, digital marketing, AI, cybersecurity, and more.
            </p>
            <Link href="/tech-courses" className="btn btn-primary">
              View Courses
            </Link>
          </div>

          <div className="card">
            <div className={styles.serviceIcon}>💼</div>
            <h3 style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
              Business Coaching
            </h3>
            <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem' }}>
              Expert mentorship, startup support, and enterprise development for
              entrepreneurs building scalable, purpose-driven businesses.
            </p>
            <Link href="/services" className="btn btn-primary">
              Get Coaching
            </Link>
          </div>

          <div className="card">
            <div className={styles.serviceIcon}>💰</div>
            <h3 style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
              Financial Literacy
            </h3>
            <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem' }}>
              Master personal finance, investment strategies, and wealth-building
              principles for long-term financial freedom.
            </p>
            <Link href="/services" className="btn btn-primary">
              Start Learning
            </Link>
          </div>

          <div className="card">
            <div className={styles.serviceIcon}>🏘️</div>
            <h3 style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
              Landlords Community
            </h3>
            <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem' }}>
              Join Nigeria's most active property owners network. Get market insights,
              legal support, and connect with fellow landlords.
            </p>
            <Link href="/landlords-community" className="btn btn-primary">
              Join Community
            </Link>
          </div>

          <div className="card">
            <div className={styles.serviceIcon}>🎓</div>
            <h3 style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>
              Youth Empowerment
            </h3>
            <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem' }}>
              Leadership training, campus programs, and mentorship to help young
              Nigerians unlock their full potential.
            </p>
            <Link href="/services" className="btn btn-primary">
              Join Program
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Why Choose Richville Project Limited?</h2>
        <p className="section-subtitle">
          Your trusted partner in wealth creation and personal development
        </p>

        <div className="grid-4">
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>✅</div>
            <h3>Proven Systems</h3>
            <p>Battle-tested wealth creation strategies and frameworks that deliver real results.</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>🎯</div>
            <h3>Expert Guidance</h3>
            <p>Learn from experienced professionals and successful entrepreneurs.</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>🚀</div>
            <h3>Practical Training</h3>
            <p>Hands-on learning with real projects and actionable strategies.</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>🤝</div>
            <h3>Community Support</h3>
            <p>Join a network of like-minded individuals committed to growth.</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to Transform Your Financial Future?</h2>
        <p>Join thousands of Nigerians building wealth and achieving financial freedom</p>
        <Link href="/contact" className="btn btn-primary">
          Get Started Now
        </Link>
      </section>
    </>
  );
}