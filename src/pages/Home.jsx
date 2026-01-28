import { useEffect, useState, useMemo } from "react";
import { api } from "../services/api";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import Skeleton from "../components/Skeleton";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .finally(() => setLoading(false));
  }, []);

  const renderedProducts = useMemo(
    () => products.map(p => <ProductCard key={p.id} product={p} />),
    [products]
  );

  return (
    <>
      <Navbar />
      <HeroCarousel />

      <h2 className="section-title">Popular Collection</h2>

      <section className="grid">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} />)
          : renderedProducts}
      </section>
    </>
  );
}
