"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./footer.module.css";

const shopLinks = [
  { label: "Rackets", href: "#rackets" },
  { label: "Shoes", href: "#shoes" },
  { label: "Apparel", href: "#apparel" },
  { label: "Bags", href: "#bags" },
  { label: "Accessories", href: "#accessories" },
  { label: "Ball Products", href: "#balls" },
];

const helpLinks = [
  { label: "Track Order", href: "#track-order" },
  { label: "Returns & Exchanges", href: "#returns" },
  { label: "Shipping Info", href: "#shipping" },
  { label: "Size Guide", href: "#size-guide" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: "mailto:hello@example.com" },
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Story", href: "#story" },
  { label: "Athletes", href: "#athletes" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Careers", href: "#careers" },
  { label: "Press", href: "#press" },
  { label: "Privacy Policy", href: "#privacy" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className={styles.fillIcon} />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 4h4.7l3.2 4.6L16.8 4H19l-5.1 6 5.9 10h-4.7l-3.6-5.5L7 20H4.8l5.4-6.5L5 4Zm3.2 1.8 7.9 12.4h1.6L9.8 5.8H8.2Z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 4h3c.2 1.7 1.2 2.8 3 3v3c-1.1 0-2.1-.3-3-.8V15a5 5 0 1 1-5-5h1v3h-1a2 2 0 1 0 2 2V4Z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16.7 12.7c0-2 1.7-3 1.8-3.1-1-.1-2.1-1.1-3.5-1.1-1.5 0-2.3.7-3.4.7-1 0-2-.7-3.2-.7-1.3 0-2.6.8-3.3 2-.9 1.5-.2 4.7.7 6.2.5.8 1 1.7 1.8 1.7.7 0 1-.5 2-.5s1.2.5 2 .5 1.3-.8 1.8-1.6c.6-.9.9-1.8.9-1.8s-1.6-.7-1.6-2.3Zm-2.3-5.7c.5-.6.8-1.4.7-2.2-.7 0-1.5.5-2 .9-.5.5-.9 1.3-.8 2.1.8.1 1.5-.3 2.1-.8Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 4 11 8-11 8V4Z" />
    </svg>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className={styles.column}>
      <h3>{title}</h3>

      <nav>
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default function Footer() {
  const footerRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) return;

        hasAnimatedRef.current = true;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.15 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`${styles.footer} ${isVisible ? styles.isVisible : ""}`}
    >
      <div className={styles.footerInner}>

        {/* TOP SECTION */}
        <div className={styles.topSection}>

          {/* BRAND */}
          <div className={styles.brandSection}>
            <a href="/" className={styles.logo}>
              GRG
            </a>

            <p className={styles.tagline}>
              BUILT FOR THE BETTER GAME.
            </p>

            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/seb__.gg/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <XIcon />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* SHOP */}
          <FooterColumn title="Shop" links={shopLinks} />

          {/* HELP */}
          <FooterColumn title="Help" links={helpLinks} />

          {/* COMPANY */}
          <FooterColumn title="Company" links={companyLinks} />

          {/* APP */}
          <div className={styles.appSection}>
            <h3>Download Our App</h3>

            <p>Play Anywhere</p>

            <div className={styles.storeButtons}>
              <a href="#app-store" className={styles.storeButton}>
                <AppleIcon />

                <span>
                  <small>DOWNLOAD ON THE</small>
                  App Store
                </span>
              </a>

              <a href="#google-play" className={styles.storeButton}>
                <PlayIcon />

                <span>
                  <small>GET IT ON</small>
                  Google Play
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.bottomSection}>

          <span className={styles.copyright}>
            © {currentYear} ACE. All rights reserved.
          </span>

          <div className={styles.paymentMethods}>
            <span className={`${styles.payment} ${styles.paypal}`}>PayPal</span>
            <span className={`${styles.payment} ${styles.mastercard}`}>
              <i></i>
              <i></i>
            </span>
            <span className={`${styles.payment} ${styles.visa}`}>VISA</span>
          </div>

        </div>
      </div>
    </footer>
  );
}