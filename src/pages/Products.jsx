import { useParams } from "react-router-dom";

export default function Products() {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src="https://picsum.photos/600"
        className="w-full h-96 object-cover rounded-xl"
      />
      <h1 className="text-2xl font-bold mt-4">Product #{id}</h1>
      <p className="mt-2">$199</p>
      <button className="mt-4 bg-black text-white px-6 py-3 rounded-xl">
        Add to Cart
      </button>
    </div>
  );
}
