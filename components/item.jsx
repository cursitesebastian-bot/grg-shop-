import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";

const categories = [
  {
    name: "Gels",
    image: "/Screenshot_19-9-2026_0934_www.amazon.com.jpeg",
  },
  {
    name: "golf Shoes",
    image: "/Screenshot_19-9-2026_11140_www.aliexpress.com.jpeg",
  },
  {
    name: "balls",
    image: "/Screenshot_19-9-2026_104448_www.bing.com.jpeg",
  },
  {
    name: "Golf Bags",
    image: "/Screenshot_19-9-2026_10931_www.amazon.com.jpeg",
  },
  {
    name: "Apparel",
    image: "/Screenshot_19-9-2026_105726_www.bing.com.jpeg",
  },
  {
    name: "Accessories",
    image: "/Screenshot_19-9-2026_102838_chatgpt.com.jpeg",
  },
  {
    name: "Grip & Strings",
    image: "/Screenshot_19-9-2026_103952_www.amazon.com.jpeg",
  },
  {
    name: "lifestyles",
    image: "/Screenshot_19-9-2026_105553_www.bing.com.jpeg",
  },
];

function CategorySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add(styles.categoryVisible);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef}
      className={styles.categorySection}
    >
      <div className={styles.categoryHeader}>
        <div className={styles.categoryTitleWrapper}>
          <span className={styles.categorySmallLabel}>
            EXPLORE
          </span>

          <h2 className={styles.categoryTitle}>
            Shop by category
          </h2>
        </div>

        <button className={styles.categoryViewAll}>
          View All
          <span>→</span>
        </button>
      </div>

      <div className={styles.categoryLine} />

      <div className={styles.categoryGrid}>
        {categories.map((category, index) => (
          <div
            key={category.name}
            className={styles.categoryCard}
            style={{
              "--delay": `${index * 80}ms`,
            }}
          >
            <div className={styles.categoryImageWrapper}>
              <div className={styles.categoryCircle} />

              <img
                src={category.image}
                alt={category.name}
                className={styles.categoryImage}
              />

              <div className={styles.categoryArrow}>
                ↗
              </div>
            </div>

            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;