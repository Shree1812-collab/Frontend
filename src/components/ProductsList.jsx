import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const gotoProduct = (product) => {
    navigate("/product", { state: { product } });
  };

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");

        if (res.status === 200) {
          const productsData = await res.json();
          setProducts(productsData);
        } else {
          throw new Error("Unable to fetch products");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const searchMatch = product.title.toLowerCase().includes(search.toLowerCase());
    return categoryMatch && searchMatch;
  });

  if (loading) {
    return (
      <div className="text-center text-2xl text-black">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-2xl text-red-500">{error}</div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All</option>
          <option value="men's clothing">Men</option>
          <option value="women's clothing">Women</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} onClick={() => gotoProduct(product)} className="border p-4 rounded shadow cursor-pointer hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain"/>
            <h2 className="font-bold">{product.title}</h2>
            <p>Rs {product.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
}