import React, { useEffect, useRef, useState } from "react";
import styles from "./hero.module.css";

const products = [
  {
    name: "Premium Gel",
    image: "/Screenshot_19-9-2026_0144_www.amazon.com.jpeg",
    price: "$39.99",
    oldPrice: "$59.99",
    discount: "-20%",
    reviews: "128",
    rating: "★★★★★",
  },
  {
    name: "Garmin HRM",
    image: "/Screenshot_19-9-2026_164740_chatgpt.com.jpeg",
    price: "$79.99",
    oldPrice: "$99.99",
    discount: "-20%",
    reviews: "96",
    rating: "★★★★★",
  },
  {
    name: "Garmin Watch",
    image: "/Screenshot_19-9-2026_164425_chatgpt.com.jpeg",
    price: "$1299.99",
    oldPrice: null,
    discount: null,
    reviews: "168",
    rating: "★★★★★",
  },
  {
    name: "Wedges",
    image: "/Screenshot_19-9-2026_163051_chatgpt.com.jpeg",
    price: "$89.99",
    oldPrice: null,
    discount: "New",
    reviews: "74",
    rating: "★★★★★",
  },
  {
    name: "Garmin Launch Monitor",
    image: "/Screenshot_19-9-2026_17144_chatgpt.com.jpeg",
    price: "$449.9",
    oldPrice: "$517.8",
    discount: "-15%",
    reviews: "112",
    rating: "★★★★★",
  },
  {
    name: "Running Cap",
    image: "/Screenshot_19-9-2026_165813_chatgpt.com.jpeg",
    price: "$29.99",
    oldPrice: "$39.99",
    discount: "-25%",
    reviews: "84",
    rating: "★★★★★",
  },
  {
    name: "Gloves",
    image: "/Screenshot_19-9-2026_103952_www.amazon.com.jpeg",
    price: "$119.99",
    oldPrice: "$149.99",
    discount: "-20%",
    reviews: "91",
    rating: "★★★★★",
  },
  {
    name: "Wedges Bag",
    image: "/Screenshot_19-9-2026_10931_www.amazon.com.jpeg",
    price: "$394.99",
    oldPrice: null,
    discount: "New",
    reviews: "137",
    rating: "★★★★★",
  },
];

export default function Collection() {
  const collectionRef = useRef(null);
  const sliderRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const collection = collectionRef.current;

    if (!collection) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) return;

        hasAnimatedRef.current = true;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(collection);

    return () => observer.disconnect();
  }, []);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={collectionRef}
      className={`${styles.collection} ${isVisible ? styles.isVisible : ""}`}
    >
      
      {/* HEADER */}
      <div className={styles.collectionHeader}>
        <h2>Trending Products</h2>

        <button className={styles.viewAll}>
          View All
          <span>→</span>
        </button>
      </div>


      {/* SLIDER */}
      <div className={styles.sliderWrapper}>

        {/* LEFT ARROW */}
        <button
          className={`${styles.sliderButton} ${styles.leftButton}`}
          onClick={scrollLeft}
          aria-label="Previous products"
        >
          ←
        </button>


        {/* PRODUCTS */}
        <div
          className={styles.products}
          ref={sliderRef}
        >
          {products.map((product, index) => (
            <article
              className={styles.product}
              key={index}
            >

              {/* IMAGE BOX */}
              <div className={styles.imageBox}>

                <img
                  src={product.image}
                  alt={product.name}
                />

                {/* BADGE */}
                {product.discount && (
                  <span
                    className={
                      product.discount === "New"
                        ? styles.newBadge
                        : styles.discountBadge
                    }
                  >
                    {product.discount}
                  </span>
                )}

              </div>


              {/* PRODUCT INFORMATION */}
              <div className={styles.productInfo}>

                <h3>{product.name}</h3>

                <div className={styles.priceRow}>
                  <span className={styles.price}>
                    {product.price}
                  </span>

                  {product.oldPrice && (
                    <span className={styles.oldPrice}>
                      {product.oldPrice}
                    </span>
                  )}
                </div>


                <div className={styles.ratingRow}>
                  <span className={styles.stars}>
                    {product.rating}
                  </span>

                  <span className={styles.reviews}>
                    ({product.reviews})
                  </span>
                </div>

              </div>

            </article>
          ))}
        </div>
        {/* RIGHT ARROW */}
        <button
          className={`${styles.sliderButton} ${styles.rightButton}`}
          onClick={scrollRight}
          aria-label="Next products"
        >
          →
        </button>

      </div>

    </section>
  );
}