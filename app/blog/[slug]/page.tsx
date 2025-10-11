import Link from 'next/link';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

// This would typically come from a database or CMS
const blogPosts: Record<string, any> = {
  'rental-income-strategies': {
    title: '10 Proven Strategies to Maximize Your Rental Income in Nigeria',
    category: 'Real Estate',
    date: 'January 15, 2025',
    readTime: '8 min read',
    author: 'Richville Team',
    content: `
      <p>Are you a landlord in Nigeria looking to increase your rental income without compromising tenant satisfaction? You're in the right place. In this comprehensive guide, we'll explore ten proven strategies that successful property owners use to maximize their returns.</p>

      <h3>1. Conduct Regular Market Research</h3>
      <p>Understanding the current rental market in your area is crucial. Research comparable properties, track rental trends, and adjust your pricing strategy accordingly. Properties in Lagos, Abuja, and Port Harcourt have different market dynamics than those in Ebonyi State.</p>

      <h3>2. Improve Property Curb Appeal</h3>
      <p>First impressions matter. Simple improvements like fresh paint, landscaping, and proper lighting can justify higher rental rates and attract quality tenants willing to pay premium prices.</p>

      <h3>3. Add Value Through Amenities</h3>
      <p>Consider adding amenities that tenants value: reliable power backup, water storage systems, security features, or internet connectivity. These additions can justify 15-30% rent increases in competitive markets.</p>

      <h3>4. Screen Tenants Thoroughly</h3>
      <p>Quality tenants who pay on time and maintain your property are worth their weight in gold. Implement a rigorous screening process including background checks, employment verification, and reference checks.</p>

      <h3>5. Maintain Properties Proactively</h3>
      <p>Regular maintenance prevents expensive repairs and keeps tenants happy. Schedule quarterly inspections and address issues promptly. Happy tenants stay longer, reducing vacancy costs.</p>

      <h3>6. Offer Flexible Payment Options</h3>
      <p>While annual rent is common in Nigeria, consider offering quarterly or bi-annual payment options for premium pricing. Some tenants prefer this flexibility and will pay more for it.</p>

      <h3>7. Reduce Vacancy Periods</h3>
      <p>Each month a property sits vacant costs you money. Start marketing before current leases expire, maintain a waiting list, and make the property show-ready at all times.</p>

      <h3>8. Understand and Comply with Laws</h3>
      <p>Stay informed about tenancy laws in your state. Legal compliance protects you from costly disputes and builds trust with tenants, leading to longer tenancy periods.</p>

      <h3>9. Build Strong Tenant Relationships</h3>
      <p>Professional, respectful landlord-tenant relationships lead to longer tenancies and positive referrals. Respond to concerns promptly and maintain clear communication.</p>

      <h3>10. Consider Property Management Services</h3>
      <p>If managing properties becomes overwhelming, professional property management can optimize your returns while freeing your time for other investments.</p>

      <h3>Conclusion</h3>
      <p>Maximizing rental income in Nigeria requires a strategic approach combining market knowledge, property improvements, and excellent tenant relationships. Implement these strategies gradually and track results to see what works best for your properties.</p>

      <p>Ready to take your property business to the next level? Join our landlords community for more exclusive insights and networking opportunities.</p>
    `,
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: 'Post Not Found | Richville Project Limited',
    };
  }

  return {
    title: `${post.title} | Richville Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className={styles.blogHeader}>
        <Link href="/blog" className={styles.backLink}>
          ← Back to Blog
        </Link>
        <span className={styles.categoryBadge}>{post.category}</span>
        <h1>{post.title}</h1>
        <div className={styles.postMeta}>
          <span>By {post.author}</span>
          <span>📅 {post.date}</span>
          <span>📖 {post.readTime}</span>
        </div>
      </div>

      <article className={styles.blogContent}>
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <section className={styles.relatedSection}>
        <h2>Continue Reading</h2>
        <div className={styles.relatedGrid}>
          <Link href="/blog" className="card">
            <h3>View All Blog Posts</h3>
            <p>Explore more articles on real estate, tech, business, and finance</p>
            <span className="btn btn-secondary">Browse Blog</span>
          </Link>
          <Link href="/landlords" className="card">
            <h3>Join Landlords Community</h3>
            <p>Connect with fellow property owners and get exclusive insights</p>
            <span className="btn btn-secondary">Join Now</span>
          </Link>
          <Link href="/contact" className="card">
            <h3>Get Expert Advice</h3>
            <p>Talk to our team about your property investment goals</p>
            <span className="btn btn-secondary">Contact Us</span>
          </Link>
        </div>
      </section>
    </>
  );
}