import React from "react";
import styles from "./style.module.css";

const cards = [
  {
    image: "https://i.pinimg.com/736x/cf/c7/d0/cfc7d0bf8bffb8c16bbe403467ad778d.jpg",
    label: "RACKETS",
    title: "POWER YOUR GAME",
    description: "Precision. Control. Performance.",
    button: "SHOP APPAREL",
  },
  {
    image: "https://i.pinimg.com/736x/c8/fa/32/c8fa322f00c6aa4941d4955f269fdc22.jpg",
    label: "APPAREL",
    title: "MOVE BEYOND",
    description: "Tennis wear designed for confidence.",
    button: "SHOP APPAREL",
  },
];

export default function SportsCards() {
  return (
    <section className={styles.sportsSection}>
      

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