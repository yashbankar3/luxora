import { useEffect, useState } from "react";

const slides = [
  {
    title: "Premium Shopping",
    subtitle: "Elegant. Fast. Modern.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    title: "Designed to Feel Expensive",
    subtitle: "Quality over quantity",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
  },
  {
    title: "Luxury shopping experience built for performance",
    subtitle: "Designed pixel by pixel",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d"
  }
  

];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero-slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${s.image})` }}
        >
          <div className="hero-overlay">
            <h1>{s.title}</h1>
            <p>{s.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
    