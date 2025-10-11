import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Blog | Richville Project Limited - Wealth Creation Insights & Tips',
  description: 'Read expert insights on real estate investment, tech skills, business growth, and financial freedom. Practical tips for building wealth in Nigeria.',
  keywords: 'real estate blog Nigeria, tech training tips, business advice Nigeria, financial literacy blog, wealth creation insights',
};

export default function Blog() {
  const blogPosts = [
    {
      id: 'rental-income-strategies',
      title: '10 Proven Strategies to Maximize Your Rental Income in Nigeria',
      excerpt: 'Discover expert tips from successful Nigerian landlords on how to increase your property revenue while maintaining high tenant satisfaction rates.',
      category: 'Real Estate',
      date: 'January 15, 2025',
      readTime: '8 min read',
      featured: true,
    },
    {
      id: 'ebonyi-investment',
      title: 'Understanding Property Investment in Ebonyi State',
      excerpt: 'A comprehensive guide to identifying profitable property investment opportunities in Ebonyi\'s growing real estate market.',
      category: 'Real Estate',
      date: 'January 10, 2025',
      readTime: '6 min read',
    },
    {
      id: 'legal-requirements',
      title: 'Legal Requirements for Landlords in Nigeria',
      excerpt: 'Everything you need to know about tenancy agreements, tenant rights, and legal compliance for property owners.',
      category: 'Real Estate',
      date: 'January 8, 2025',
      readTime: '7 min read',
    },
    {
      id: 'tenant-screening',
      title: 'How to Screen Tenants Effectively',
      excerpt: 'Step-by-step process for conducting thorough background checks and selecting reliable tenants for your properties.',
      category: 'Real Estate',
      date: 'January 5, 2025',
      readTime: '5 min read',
    },
    {
      id: 'top-tech-skills',
      title: 'Top 10 Tech Skills in High Demand for 2025',
      excerpt: 'Discover the most sought-after digital skills that can boost your career and income in Nigeria\'s tech industry.',
      category: 'Tech & Skills',
      date: 'January 12, 2025',
      readTime: '9 min read',
    },
    {
      id: 'web-dev-roadmap',
      title: 'From Zero to Web Developer in 6 Months',
      excerpt: 'A practical roadmap for beginners looking to start a career in web development with no prior coding experience.',
      category: 'Tech & Skills',
      date: 'January 7, 2025',
      readTime: '10 min read',
    },
    {
      id: 'digital-marketing',
      title: 'Why Every Nigerian Should Learn Digital Marketing',
      excerpt: 'Explore how digital marketing skills can help you grow your business or launch a profitable freelancing career.',
      category: 'Tech & Skills',
      date: 'January 3, 2025',
      readTime: '7 min read',
    },
    {
      id: 'starting-business',
      title: 'Starting a Business in Nigeria: Complete Guide',
      excerpt: 'Essential steps, legal requirements, and practical tips for launching a successful business in Nigeria.',
      category: 'Business',
      date: 'January 9, 2025',
      readTime: '12 min read',
    },
    {
      id: 'scale-business',
      title: '5 Ways to Scale Your Small Business',
      excerpt: 'Proven strategies for growing your business revenue, expanding your customer base, and increasing profitability.',
      category: 'Business',
      date: 'January 6, 2025',
      readTime: '8 min read',
    },
    {
      id: 'online-business',
      title: 'Building a Sustainable Online Business',
      excerpt: 'Learn how to create digital products, reach global customers, and build a profitable online business from Nigeria.',
      category: 'Business',
      date: 'January 2, 2025',
      readTime: '11 min read',
    },
    {
      id: 'investment-beginners',
      title: 'Investment Strategies for Beginners',
      excerpt: 'A beginner\'s guide to building wealth through smart investments, savings, and financial planning in Nigeria.',
      category: 'Finance',
      date: 'January 11, 2025',
      readTime: '9 min read',
    },
    {
      id: 'multiple-income',
      title: 'Creating Multiple Income Streams',
      excerpt: 'Practical ways to diversify your income through side hustles, passive income, and strategic investments.',
      category: 'Finance',
      date: 'January 4, 2025',
      readTime: '10 min read',
    },
    {
      id: 'financial-planning',
      title: 'Financial Planning for Young Professionals',
      excerpt: 'Essential money management tips, budgeting strategies, and investment advice for career starters.',
      category: 'Finance',
      date: 'January 1, 2025',
      readTime: '8 min read',
    },
  ];

  const categories = ['All Posts', 'Real Estate', 'Tech & Skills', 'Business', 'Finance'];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Real Estate':
        return 'var(--primary-gold)';
      case 'Tech & Skills':
        return '#5b9bd5';
      case 'Business':
        return '#f4a460';
      case 'Finance':
        return '#28a745';
      default:
        return 'var(--primary-gold)';
    }
  };

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      <div className={styles.pageHeader}>
        <h1>Our Blog</h1>
        <p>Insights, Tips & Resources for Wealth Creation and Personal Growth</p>
      </div>

      <section>
        {featuredPost && (
          <div className={styles.featuredPost}>
            <span className={styles.featuredBadge}>Featured Post</span>
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.excerpt}</p>
            <div className={styles.postMeta}>
              <span>📅 {featuredPost.date}</span>
              <span>📖 {featuredPost.readTime}</span>
              <span style={{ color: getCategoryColor(featuredPost.category) }}>
                {featuredPost.category}
              </span>
            </div>
            <Link href={`/blog/${featuredPost.id}`} className="btn btn-primary">
              Read Full Article
            </Link>
          </div>
        )}

        <div className={styles.filterSection}>
          <h3>Filter by Category</h3>
          <div className={styles.categoryFilters}>
            {categories.map((category) => (
              <button key={category} className={styles.categoryBtn}>
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid-3">
          {regularPosts.map((post) => (
            <div className="card" key={post.id}>
              <span
                className={styles.categoryBadge}
                style={{ backgroundColor: getCategoryColor(post.category) }}
              >
                {post.category}
              </span>
              <h3>{post.title}</h3>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              <div className={styles.postMeta}>
                <span>📅 {post.date}</span>
                <span>📖 {post.readTime}</span>
              </div>
              <Link href={`/blog/${post.id}`} className="btn btn-secondary">
                Read More
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.newsletterSection}>
          <h2>Stay Updated with Our Latest Insights</h2>
          <p>
            Subscribe to our newsletter and get weekly tips on real estate, tech skills,
            business growth, and financial freedom.
          </p>
          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              className={styles.emailInput}
            />
            <button className="btn btn-primary">Subscribe Now</button>
          </div>
          <p className={styles.newsletterNote}>
            Join 5,000+ subscribers. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  );
}