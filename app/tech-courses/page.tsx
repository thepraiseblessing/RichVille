import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Tech Courses | Richville Project Limited - Digital Skills Training',
  description: 'Learn in-demand tech skills with 20+ comprehensive courses including web development, UI/UX design, digital marketing, AI, cybersecurity, and more in Nigeria.',
  keywords: 'tech courses Nigeria, web development training, digital marketing course, UI/UX design, cybersecurity training, AI courses, programming Nigeria',
};

export default function TechCourses() {
  const courses = [
    {
      icon: '🎨',
      title: 'Graphic Design with Canva',
      level: 'Beginner',
      description: 'Master visual communication through typography, color theory, and design principles using Canva\'s powerful platform.',
    },
    {
      icon: '🖥️',
      title: 'UI/UX Design',
      level: 'Intermediate',
      description: 'Create intuitive user experiences and beautiful interfaces that solve real-world problems.',
    },
    {
      icon: '🌐',
      title: 'Web Design with WordPress',
      level: 'Beginner',
      description: 'Build stunning, responsive websites using WordPress, the world\'s most popular CMS.',
    },
    {
      icon: '🎬',
      title: 'Video Editing',
      level: 'Beginner',
      description: 'Transform raw footage into compelling stories using professional editing techniques.',
    },
    {
      icon: '📐',
      title: '3D Design & Animation',
      level: 'Intermediate',
      description: 'Create stunning 3D models, animations, and visual effects for games and films.',
    },
    {
      icon: '📱',
      title: 'Digital Marketing',
      level: 'Beginner',
      description: 'Master SEO, social media marketing, and content strategies to grow businesses online.',
    },
    {
      icon: '💻',
      title: 'Web Development',
      level: 'Intermediate',
      description: 'Build dynamic, interactive websites using modern frameworks and programming languages.',
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      level: 'Advanced',
      description: 'Create native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: '⚙️',
      title: 'Software Engineering',
      level: 'Advanced',
      description: 'Learn systematic approaches to designing and maintaining large-scale software systems.',
    },
    {
      icon: '🎮',
      title: 'Game Development',
      level: 'Advanced',
      description: 'Create immersive gaming experiences using modern game engines.',
    },
    {
      icon: '🥽',
      title: 'AR/VR Development',
      level: 'Advanced',
      description: 'Build immersive augmented and virtual reality experiences.',
    },
    {
      icon: '📊',
      title: 'Product Management',
      level: 'Intermediate',
      description: 'Guide products from conception to launch, balancing user needs with business objectives.',
    },
    {
      icon: '💼',
      title: 'Tech Consulting',
      level: 'Advanced',
      description: 'Provide strategic technology advice to optimize digital transformation.',
    },
    {
      icon: '🤖',
      title: 'Artificial Intelligence (AI)',
      level: 'Advanced',
      description: 'Develop intelligent systems that can learn, reason, and make decisions.',
    },
    {
      icon: '📊',
      title: 'Data Science',
      level: 'Advanced',
      description: 'Extract insights from complex data using statistical analysis and machine learning.',
    },
    {
      icon: '🔄',
      title: 'DevOps',
      level: 'Advanced',
      description: 'Streamline software development and deployment through automation.',
    },
    {
      icon: '☁️',
      title: 'Cloud Computing',
      level: 'Intermediate',
      description: 'Deploy scalable applications using AWS, Azure, and Google Cloud platforms.',
    },
    {
      icon: '🔒',
      title: 'Cyber Security',
      level: 'Advanced',
      description: 'Protect digital assets from cyber threats through comprehensive security strategies.',
    },
    {
      icon: '⛓️',
      title: 'Blockchain Expert',
      level: 'Advanced',
      description: 'Build decentralized applications and understand cryptocurrency technologies.',
    },
    {
      icon: '🤖',
      title: 'Robotics & IoT',
      level: 'Advanced',
      description: 'Design and program intelligent robots and connected IoT devices.',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'var(--secondary-gold)';
      case 'Intermediate':
        return 'var(--accent-gold)';
      case 'Advanced':
        return '#d9534f';
      default:
        return 'var(--primary-gold)';
    }
  };

  return (
    <>
      <div className={styles.pageHeader}>
        <h1>RichVille Tech Courses</h1>
        <p>World-Class Training in the Most In-Demand Tech Skills</p>
      </div>

      <section>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>👨‍🏫</div>
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals with real-world experience</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⏰</div>
            <h3>Flexible Learning</h3>
            <p>Study at your own pace with our online courses</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💼</div>
            <h3>Hands-On Projects</h3>
            <p>Work on real projects to build your portfolio</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎓</div>
            <h3>Certification</h3>
            <p>Receive recognized certificates upon course completion</p>
          </div>
        </div>

        <h2 className="section-title" style={{ marginTop: '4rem' }}>
          20+ Comprehensive Courses Available
        </h2>
        <p className="section-subtitle">From beginner-friendly courses to advanced specializations</p>

        <div className="grid-3">
          {courses.map((course, index) => (
            <div className="card" key={index}>
              <div className={styles.courseIcon}>{course.icon}</div>
              <h3>{course.title}</h3>
              <span
                className={styles.levelBadge}
                style={{ backgroundColor: getLevelColor(course.level) }}
              >
                {course.level}
              </span>
              <p className={styles.courseDesc}>{course.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h2>Ready to Start Your Tech Journey?</h2>
          <p>Join thousands of students who have transformed their careers with RichVille Tech</p>
          <Link href="/contact" className="btn btn-primary">
            Enroll Now
          </Link>
        </div>
      </section>
    </>
  );
}