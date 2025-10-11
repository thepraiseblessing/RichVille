import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Landlords Community | Richville Project Limited - Property Owners Network',
  description: 'Join Nigeria\'s most active landlords community. Get market insights, legal support, property management tips, and network with fellow property owners.',
  keywords: 'landlords community Nigeria, property management network, rental property tips, real estate networking, tenant management Nigeria',
};

export default function Landlords() {
  return (
    <>
      <div className={styles.pageHeader}>
        <h1>Landlords Community</h1>
        <p>Nigeria's Most Active Property Owners Network</p>
      </div>

      <section>
        <div className={styles.introSection}>
          <h2 className="section-title">Connect. Learn. Grow.</h2>
          <p className={styles.introText}>
            Join fellow property owners, get expert advice, and access exclusive resources
            to maximize your property investment returns in Nigeria's thriving real estate
            market.
          </p>
          <div className={styles.introButtons}>
            <a
              href="https://wa.me/2349020464872"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Join WhatsApp Community
            </a>
            <Link href="/https://chat.whatsapp.com/DqPLyJ3LBSb8gGgIBMqSYu?mode=ems_copy_t" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>

        <h2 className="section-title" style={{ marginTop: '4rem' }}>
          Why Join Our Community?
        </h2>
        <p className="section-subtitle">
          Access exclusive benefits designed for serious property owners
        </p>

        <div className="grid-3">
          <div className="card">
            <div className={styles.benefitIcon}>📈</div>
            <h3>Weekly Market Updates</h3>
            <p>
              Get exclusive insights on property trends, rental rates, and investment
              opportunities in major Nigerian cities including Lagos, Abuja, Port Harcourt,
              and Ebonyi State.
            </p>
          </div>

          <div className="card">
            <div className={styles.benefitIcon}>👥</div>
            <h3>Expert Network Access</h3>
            <p>
              Connect with experienced landlords, property managers, real estate
              professionals, and industry experts across Nigeria.
            </p>
          </div>

          <div className="card">
            <div className={styles.benefitIcon}>⚖️</div>
            <h3>Legal & Compliance Support</h3>
            <p>
              Stay updated on tenancy laws, regulations, and best practices for property
              management in Nigeria. Access legal templates and documentation.
            </p>
          </div>

          <div className="card">
            <div className={styles.benefitIcon}>💰</div>
            <h3>Revenue Optimization Tips</h3>
            <p>
              Learn proven strategies to maximize rental income, reduce vacancy rates, and
              increase property value through expert guidance.
            </p>
          </div>

          <div className="card">
            <div className={styles.benefitIcon}>🤝</div>
            <h3>Monthly Meetups</h3>
            <p>
              Attend exclusive virtual and in-person events with industry experts, successful
              landlords, and fellow property owners.
            </p>
          </div>

          <div className="card">
            <div className={styles.benefitIcon}>📚</div>
            <h3>Resource Library</h3>
            <p>
              Access templates, tenancy agreements, inspection checklists, and comprehensive
              guides specifically for Nigerian landlords.
            </p>
          </div>
        </div>

        <div className={styles.tipsSection}>
          <h2 className="section-title">Expert Property Management Tips</h2>
          <p className="section-subtitle">Practical advice from successful Nigerian landlords</p>

          <div className="grid-2">
            <div className={styles.tipCard}>
              <h3>For Landlords</h3>
              
              <h4>Screen Tenants Thoroughly</h4>
              <p>
                Conduct comprehensive background checks, verify employment and income, check
                previous landlord references, and assess creditworthiness to find reliable
                tenants.
              </p>

              <h4>Maintain Proactively</h4>
              <p>
                Regular maintenance preserves property value and prevents expensive repairs.
                Schedule quarterly inspections.
              </p>

              <h4>Understand Tenancy Laws</h4>
              <p>
                Stay informed about tenancy laws in your state and ensure all agreements
                comply with regulations.
              </p>

              <h4>Price Competitively</h4>
              <p>
                Research market rates regularly and adjust pricing to maximize income while
                maintaining high occupancy.
              </p>
            </div>

            <div className={styles.tipCard}>
              <h3>For Tenants</h3>
              
              <h4>Document Everything</h4>
              <p>
                Take detailed photos at move-in, keep records of all payments and
                communications, and maintain receipts.
              </p>

              <h4>Pay Consistently</h4>
              <p>
                Timely payments build trust with your landlord and provide positive
                references for future rentals.
              </p>

              <h4>Report Issues Promptly</h4>
              <p>
                Notify your landlord of maintenance issues early to prevent small problems
                from becoming major repairs.
              </p>

              <h4>Know Your Rights</h4>
              <p>
                Understand your rights regarding privacy, security deposits, and proper
                eviction procedures under Nigerian law.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.testimonialsSection}>
          <h2 className="section-title">Community Success Stories</h2>
          <p className="section-subtitle">
            Real results from landlords who joined our community
          </p>

          <div className="grid-3">
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "Joining the RichVille landlords community transformed my property management
                approach. I increased my rental income by 40% within 6 months using their
                market insights and networking opportunities."
              </p>
              <p className={styles.testimonialAuthor}>— Adebayo O.</p>
              <p className={styles.testimonialLocation}>Lagos Property Owner</p>
            </div>

            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "The legal support and compliance guidance helped me avoid costly mistakes.
                The community connections led to my best tenants and reliable maintenance
                contacts."
              </p>
              <p className={styles.testimonialAuthor}>— Chioma N.</p>
              <p className={styles.testimonialLocation}>Abuja Landlord</p>
            </div>

            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "From a single property to a portfolio of 8 units in 2 years. The investment
                opportunities and mentorship in this community are invaluable."
              </p>
              <p className={styles.testimonialAuthor}>— Ibrahim M.</p>
              <p className={styles.testimonialLocation}>Kano Real Estate Investor</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2>Ready to Transform Your Property Business?</h2>
          <p>Join Nigeria's most active and supportive landlords community</p>
          <p className={styles.ctaFeatures}>
            ✓ Free to join &nbsp;&nbsp; ✓ Expert guidance &nbsp;&nbsp; ✓ Proven strategies
          </p>
          <div className={styles.ctaButtons}>
            <a
              href="https://chat.whatsapp.com/DqPLyJ3LBSb8gGgIBMqSYu?mode=ems_copy_t"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Join WhatsApp Community
            </a>
            <Link href="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}