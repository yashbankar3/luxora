// import heroImg from "../assets/hero.jpg"; // optional, can also use URL

export default function HeroCarousel() {
  return (
    <section className="hero">
      <div>
        <h1>Embrace Thoughtful Shopping</h1>
        <p>
          A carefully curated collection designed to bring balance,
          beauty, and quality into your everyday life.
        </p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
        alt="Lifestyle shopping"
      />
    </section>
  );
}
