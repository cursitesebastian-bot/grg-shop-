"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./demo.module.css";

export default function Decor() {
  const sectionRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) return;

        hasAnimatedRef.current = true;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);

    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 2500);
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.isVisible : ""}`}
    >
      {/* ================================
          HERO
      ================================= */}
      <div className={styles.hero}>

        {/* HERO IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1509586721451-a990371f8243?q=80&w=1861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Play in style"
          className={styles.heroImage}
        />

        {/* DARK GRADIENT */}

        <div className={styles.gradient} />


        {/* ================================
            LEFT CONTENT
        ================================= */}

        <div className={styles.leftContent}>

          <div className={styles.eyebrow}>
            NEW COLLECTION
          </div>

          <h1>
            PLAY IN STYLE
          </h1>

          <p>
            Performance meets timeless design.
          </p>

          <button
            className={styles.shopButton}
          >
            <span>
              SHOP THE COLLECTION
            </span>

            <strong>
              →
            </strong>
          </button>

        </div>


        {/* ================================
            HANDWRITTEN TEXT
        ================================= */}

        <div className={styles.handText}>

          <span>
            More
          </span>
          <span>
            Than
          </span>
          <span>
            a Game ♡
          </span>
        </div>

      </div>


      {/* ================================
          NEWSLETTER
      ================================= */}

      <div className={styles.newsletter}>

        <div className={styles.community}>

          <div className={styles.mailIcon}>
            ✉
          </div>

          <div>

            <h3>
              Join the GRG 
            </h3>

            <p>
              Get exclusive offers and
              early access to new arrivals.
            </p>
          </div>

        </div>


        {/* SUBSCRIBE FORM */}

        <form
          className={styles.subscribeForm}
          onSubmit={handleSubscribe}
        >

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
          />

          <button type="submit">

            {subscribed
              ? "Subscribed ✓"
              : "Subscribe →"}

          </button>

        </form>

      </div>

    </section>
  );
}