import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us | Richville Project Limited - Get In Touch',
  description: 'Contact Richville Project Limited for real estate investment, tech training, business coaching inquiries. Email, phone, WhatsApp support available.',
  keywords: 'contact Richville, Nigeria real estate contact, tech training inquiry, business coaching contact, Ebonyi State',
};

export default function Contact() {
  return (
    <>
      <div className={styles.pageHeader}>
        <h1>Contact Us</h1>
        <p>Get in Touch - We're Here to Help You Succeed</p>
      </div>

      <section>
        <div className="grid-2">
          <div className="card">
            <div className={styles.contactIcon}>📧</div>
            <h3>Email Us</h3>
            <p className={styles.contactDesc}>Send us an email and we'll respond within 24 hours</p>
            <a
              href="mailto:info@richvilleprojectlimited.com"
              className={styles.contactLink}
            >
              info@richvilleprojectlimited.com
            </a>
          </div>

          <div className="card">
            <div className={styles.contactIcon}>📱</div>
            <h3>Call Us</h3>
            <p className={styles.contactDesc}>Speak directly with our team</p>
            <a href="tel:+2349020464872" className={styles.contactLink}>
              +234 902 046 4872
            </a>
          </div>

          <div className="card">
            <div className={styles.contactIcon}>💬</div>
            <h3>WhatsApp</h3>
            <p className={styles.contactDesc}>Chat with us instantly on WhatsApp</p>
            <a
              href="https://wa.me/2349020464872"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Send Message
            </a>
          </div>

          <div className="card">
            <div className={styles.contactIcon}>📍</div>
            <h3>Visit Us</h3>
            <p className={styles.contactDesc}>Our office location</p>
            <p className={styles.location}>Ebonyi State, Nigeria</p>
          </div>
        </div>

        <div className={styles.officeHours}>
          <h2 className="section-title">Office Hours</h2>
          <div className={styles.hoursContent}>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Whether you're interested in real estate investment, tech training, business
            coaching, or joining our landlords community, we're here to guide you every step
            of the way.
          </p>
          <p className={styles.ctaSubtext}>
            Choose the best way to reach us and let's discuss how we can help you achieve
            your goals.
          </p>
          <div className={styles.ctaButtons}>
            <a href="mailto:info@richvilleprojectlimited.com" className="btn btn-primary">
              Send Email
            </a>
            <a href="tel:+2349020464872" className="btn btn-secondary">
              Call Now
            </a>
            <a
              href="https://wa.me/2349020464872"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}