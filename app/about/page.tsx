import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'About Us | Richville Project Limited - Our Story & Mission',
  description: 'Learn about Richville Project Limited - Building purpose-driven, financially free individuals across Nigeria through real estate, tech training, and wealth creation.',
  keywords: 'about Richville, company mission, wealth creation Nigeria, real estate training, tech education',
};

export default function About() {
  return (
    <>
      <div className={styles.pageHeader}>
        <h1>About Richville Project Limited</h1>
        <p>Building Purpose-Driven, Financially Free Individuals Across Nigeria</p>
      </div>

      <section className={styles.contentSection}>
        <h2>Who We Are</h2>
        <p>
          Richville Project Limited is a multi-dimensional organization with a strong
          foundation in real estate investment, business development, technology training,
          and financial education. Based in Ebonyi State, Nigeria, we serve clients and
          students across the country with a singular mission: to empower lives for purpose
          and financial freedom.
        </p>

        <p>
          We are more than just a company—we are a movement dedicated to transforming lives
          through strategic empowerment and proven wealth creation systems. Our vision extends
          beyond inspiration; we equip individuals with practical tools, knowledge, and
          opportunities to build sustainable wealth and lead impactful lives.
        </p>

        <h2>Our Mission</h2>
        <p>
          To empower individuals with the knowledge, opportunities, and tools needed to grow
          in purpose, build wealth through real estate and digital enterprise, and lead
          impactful lives that create generational change.
        </p>

        <h2>Our Vision</h2>
        <p>
          To be a globally recognized platform for building purpose-driven, financially free
          individuals by creating access to wealth-building systems, transformational
          education, and strategic investment opportunities across Africa and beyond.
        </p>

        <h2>Our Core Values</h2>
        <div className={styles.valuesList}>
          <div className={styles.valueItem}>
            <h3>Excellence</h3>
            <p>
              We maintain the highest standards in everything we do, backed by a passionate
              and skilled management team dedicated to operational excellence, innovation,
              and delivering real transformation.
            </p>
          </div>

          <div className={styles.valueItem}>
            <h3>Empowerment</h3>
            <p>
              We believe in equipping people with both the mindset and the marketplace
              platforms that make financial freedom possible through proven systems and
              strategic guidance.
            </p>
          </div>

          <div className={styles.valueItem}>
            <h3>Integrity</h3>
            <p>
              We operate with transparency, honesty, and accountability in all our business
              dealings and educational programs.
            </p>
          </div>

          <div className={styles.valueItem}>
            <h3>Innovation</h3>
            <p>
              We continuously adapt to market changes and technological advancements to
              provide cutting-edge solutions for our clients and students.
            </p>
          </div>
        </div>

        <h2>Our Approach</h2>
        <p>
          At Richville Project Limited, we understand that true financial freedom requires
          more than just information—it demands transformation. That's why we provide:
        </p>

        <ul className={styles.approachList}>
          <li>Proven wealth-building systems through real estate investment and property management</li>
          <li>World-class digital skills training in over 20 technology courses</li>
          <li>Practical business coaching and enterprise development support</li>
          <li>Comprehensive financial literacy and investment education</li>
          <li>Active community networks for landlords and property investors</li>
          <li>Youth empowerment and leadership development programs</li>
        </ul>

        <h2>Our Impact</h2>
        <p>
          Since our inception, we have trained over 1,000 students in various tech skills,
          helped hundreds of Nigerians make their first property investments, and built
          thriving communities of entrepreneurs and landlords who support each other's growth.
        </p>

        <p>
          Our landlords community has become Nigeria's most active property owners network,
          providing market insights, legal support, and networking opportunities that have
          helped members increase rental income by an average of 40% within the first year.
        </p>

        <h2>Why Work With Us?</h2>
        <p>
          When you partner with Richville Project Limited, you're not just accessing
          services—you're joining a community committed to your success. Our team of
          experienced professionals, proven systems, and comprehensive support structure
          ensure you have everything needed to achieve your financial and personal development
          goals.
        </p>

        <div className={styles.ctaContainer}>
          <Link href="/contact" className="btn btn-primary">
            Partner With Us Today
          </Link>
          <Link href="/services" className="btn btn-secondary">
            Explore Our Services
          </Link>
        </div>
      </section>
    </>
  );
}