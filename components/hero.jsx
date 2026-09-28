import styles from './hero.module.css';
 
const defaultFeatures = [
  {
    label: 'Free shipping',
    detail: 'On all orders over $99',
    icon: (
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7zM6.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM17.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    ),
  },
  {
    label: 'Secure payments',
    detail: '100% safe & trusted',
    icon: <path d="M12 2 4 5v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V5z" />,
  },
  {
    label: 'Easy returns',
    detail: 'Hassle-free shopping',
    icon: (
      <path d="M4 4v6h6M20 20v-6h-6M4.5 10a8 8 0 0 1 13.9-4.6M19.5 14a8 8 0 0 1-13.9 4.6" />
    ),
  },
  {
    label: '24/7 support',
    detail: "We're here for you",
    icon: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 7v5l3 3" />,
  },
];
 
export default function Hero({
  eyebrow = 'New season',
  title = 'GOLF',
  subtitle = 'Gear for a stronger you',
  description = 'Premium golf gear for every game, every level, every you.',
  ctaText = 'Shop New Arrivals',
  ctaHref = '/shop',
  tagline = ['Game', 'Set', 'You ♡' ,'perfect'],
  // Drop any image URL here (Unsplash, Pinterest, your own /public asset, etc.)
  imageSrc = 'https://images.unsplash.com/photo-1500932334442-8761ee4810a7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt = '',
  features = defaultFeatures,
}) {
  const titleWords = title.split(' ');

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(120deg, rgba(6,15,12,0.75) 0%, rgba(6,15,12,0.35) 45%, rgba(6,15,12,0.05) 68%), url(${imageSrc})`,
      }}
      role="img"
      aria-label={imageAlt}
    >
      <p className={styles.tagline}>
        {tagline.map((line, i) => (
          <span key={i} className={styles.taglineLine}>
            {line}
          </span>
        ))}
      </p>

      <div className={styles.copy}>
        <p className={`${styles.eyebrow} ${styles.animatedItem}`} style={{ animationDelay: '0.1s' }}>
          {eyebrow}
        </p>

        <h1 className={styles.title} aria-label={title}>
          {titleWords.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className={styles.titleWord}
              style={{ animationDelay: `${0.2 + index * 0.12}s` }}
            >
              {word}
            </span>
          ))}
        </h1>

        <p className={`${styles.subtitle} ${styles.animatedItem}`} style={{ animationDelay: '0.5s' }}>
          {subtitle}
        </p>
        <p className={`${styles.description} ${styles.animatedItem}`} style={{ animationDelay: '0.62s' }}>
          {description}
        </p>
        <a href={ctaHref} className={`${styles.cta} ${styles.animatedItem}`} style={{ animationDelay: '0.74s' }}>
          {ctaText}
          <span className={styles.ctaArrow} aria-hidden="true">
            →
          </span>
        </a>
      </div>

      <div className={`${styles.glassStrip} ${styles.panelReveal}`}>
        {features.map((f, index) => (
          <div
            key={f.label}
            className={styles.feature}
            style={{ animationDelay: `${0.9 + index * 0.12}s` }}
          >
            <svg
              className={styles.featureIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {f.icon}
            </svg>
            <div>
              <p className={styles.featureLabel}>{f.label}</p>
              <p className={styles.featureDetail}>{f.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
 