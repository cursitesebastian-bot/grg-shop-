import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './style.module.css';
 
export default function Navbar() {
  const router = useRouter();
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

  const isActive = (path) => router.pathname === path;
 
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
          <a href="/" className={isActive('/') ? styles.active : ''}>Home</a>
          <a href="/shop" className={isActive('/shop') ? styles.active : ''}>Shop</a>
          <a href="/categories" className={isActive('/categories') ? styles.active : ''}>Categories</a>
          <a href="/deals" className={isActive('/deals') ? styles.active : ''}>Deals</a>
          <a href="/new-arrivals" className={isActive('/new-arrivals') ? styles.active : ''}>New arrivals</a>
          <a href="/pages" className={isActive('/pages') ? styles.active : ''}>Pages</a>
        </nav>
 
        <div className={styles.icons}>
          <button aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button aria-label="Account">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          <button aria-label="Wishlist">♡</button>
          <button aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
 
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