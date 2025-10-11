import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.logo}>RichVille Project Limited</h3>
          <p className={styles.description}>
            Empowering lives for purpose and financial freedom through real estate,
            tech education, and wealth creation.
          </p>
          <p className={styles.location}>Ebonyi State, Nigeria</p>
        </div>

        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/tech-courses">Tech Courses</Link></li>
            <li><Link href="/landlords">Landlords Community</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Our Services</h3>
          <ul>
            <li>Real Estate Investment</li>
            <li>Property Management</li>
            <li>Tech Training Courses</li>
            <li>Business Coaching</li>
            <li>Financial Education</li>
            <li>Youth Empowerment</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Contact Info</h3>
          <ul>
            <li>
              <a href="tel:+2349020464872">+234 902 046 4872</a>
            </li>
            <li>
              <a href="mailto:info@richvilleprojectlimited.com">
                info@richvilleprojectlimited.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/2349020464872" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2025 Richville Project Limited. All Rights Reserved.</p>
        <p className={styles.tagline}>
          Building Financially Free Individuals | Real Estate | Tech Training | Wealth Creation
        </p>
      </div>
    </footer>
  );
}