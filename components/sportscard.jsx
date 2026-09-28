import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";

const cards = [
  {
    image: "https://i.pinimg.com/736x/cf/c7/d0/cfc7d0bf8bffb8c16bbe403467ad778d.jpg",
    label: "ACCESSORIES",
    title: "POWER YOUR GAME",
    description: "Precision. Control. Performance.",
    button: "SHOP ACCESSERIES",
  },
  {
    image: "https://i.pinimg.com/1200x/ec/59/44/ec5944ebb63b2869beb08188d36f7c29.jpg",
    label: "APPAREL",
    title: "MOVE BEYOND",
    description: "golf wear designed for confidence.",
    button: "SHOP APPAREL",
  },
];

export default function SportsCards() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) {
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add(styles.sportsVisible);
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className={styles.sportsSection}>
      <div className={styles.sportsGrid}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.sportsCard} ${
              index === 0
                ? styles.sportsCardLeft
                : styles.sportsCardRight
            }`}
          >
            <img
              src={card.image}
              alt={card.title}
              className={styles.sportsCardImage}
            />

            <div className={styles.sportsOverlay} />
            <div className={styles.sportsContent}>
              <span>{card.label}</span>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <button className={styles.sportsButton}>
                {card.button}
                <span className={styles.arrow}>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.sportsHeading}>
        <div className={styles.headingLine} />
        <h1>PLAY</h1>
        <div className={styles.headingLine} />
      </div>
    </section>
  );
}