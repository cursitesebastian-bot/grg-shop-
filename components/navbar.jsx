import { useState, useEffect } from 'react';
import styles from './style.module.css';
 
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
    setMounted(true); // triggers landing animation on load
 
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
 
  return (
    <div
      className={`${styles.wrapper} ${mounted ? styles.mounted : ''} ${
        scrolled ? styles.scrolled : ''
      }`}
    >
      {/* Top bar */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <span>Free shipping on orders over $50</span>
          <span className={styles.divider}>|</span>
          <span>Easy returns</span>
        </div>
        <div className={styles.topRight}>
          <a href="/support">Help &amp; support</a>
          <a href="/track-order">Track order</a>
          <span className={styles.divider}>|</span>
          <span>USD</span>
          <span>EN</span>
        </div>
      </div>
 
      {/* Main nav */}
      <div className={styles.mainNav}>
        <div className={styles.logo}>
          GRG<span className={styles.dot}>.</span>
        </div>
 
        <nav className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          <a href="/" className={styles.active}>Home</a>
          <a href="/shop">Shop</a>
          <a href="/categories">Categories</a>
          <a href="/deals">Deals</a>
          <a href="/new-arrivals">New arrivals</a>
          <a href="/pages">Pages</a>
        </nav>
 
        <div className={styles.icons}>
          <button aria-label="Search">🔍</button>
          <button aria-label="Account">👤</button>
          <button aria-label="Wishlist">♡</button>
          <button aria-label="Cart">🛒</button>
 
          <button
            className={styles.hamburger}
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </div>
  );
}