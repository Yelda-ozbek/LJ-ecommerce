import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { fetchProducts, fetchCategories } from "../store/thunks/productThunks.jsx";
import { setFilter } from "../store/actions/productActions";

const Shop = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");

  const productList = useSelector((state) => state.product.productList);
  const fetchState = useSelector((state) => state.product.fetchState);
  const categories = useSelector((state) => state.product.categories);

  // 🔁 Ürünleri çek
  useEffect(() => {
    if (fetchState === "NOT_FETCHED") {
      dispatch(fetchProducts());
    }
  }, [dispatch, fetchState]);

  // 🔁 Kategorileri çek
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // 🧠 Benzersiz kategori listesi
  const uniqueCategories = useMemo(() => {
    const seen = new Set();
    return categories.filter((cat) => {
      if (seen.has(cat.title)) return false;
      seen.add(cat.title);
      return true;
    });
  }, [categories]);

  // 🔄 Kategori seçimi
  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    dispatch(setFilter(selected));
    dispatch(fetchProducts()); // filtre sonrası ürünleri tekrar getir
  };

  // 🔍 Filtreli ürün listesi
  const filteredProducts = selectedCategory
    ? productList.filter((p) => p.category_id === Number(selectedCategory))
    : productList;

  return (
    <section className="px-4 md:px-20 py-10">
      <h2 className="text-3xl font-bold text-center mb-4">Bestseller Products</h2>

      {/* Kategori Dropdown */}
      <div className="mb-8 text-center">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border border-gray-300 px-4 py-2 rounded"
        >
          <option value="">Tüm Kategoriler</option>
          {uniqueCategories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.title}
            </option>
          ))}
        </select>
      </div>

      {/* Ürün Listesi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
