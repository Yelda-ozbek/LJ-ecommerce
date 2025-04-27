import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import {
  fetchProducts,
  fetchCategories,
} from "../store/thunks/productThunks";
import {
  setFilter,
  setSort,
  setSearch,
  setPage,
} from "../store/actions/productActions";
import { useParams, useHistory } from "react-router-dom";

const Shop = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { categoryId } = useParams();

  const { page, limit, productList, fetchState, categories, search } = useSelector((state) => state.product);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [searchInput, setSearchInput] = useState("");

  // Kategorileri çek
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Ürünleri çek
  useEffect(() => {
    if (categoryId) {
      setSelectedCategory(categoryId);
      dispatch(setFilter(categoryId));
    } else {
      dispatch(setFilter(""));
    }

    dispatch(fetchProducts());
  }, [dispatch, categoryId, page, limit]);

  // Kategori değişimi
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    dispatch(setFilter(value));

    const selectedCat = categories.find((cat) => String(cat.id) === String(value));
    if (selectedCat) {
      const gender = selectedCat.gender;
      const title = selectedCat.title.toLowerCase();
      history.push(`/shop/${gender}/${title}/${selectedCat.id}`);
    } else {
      history.push("/shop");
    }

    dispatch(fetchProducts());
  };

  // Sıralama değişimi
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSelectedSort(value);
    dispatch(setSort(value));
    dispatch(fetchProducts());
  };

  // Arama input değişimi
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    dispatch(setSearch(value));
    dispatch(fetchProducts());
  };

  // Sayfa değişimi
  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
    dispatch(fetchProducts());
  };

  return (
    <section className="px-4 md:px-20 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Bestseller Products</h2>

      {/* Arama ve filtreler */}
      <div className="mb-8 flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Arama */}
        <input
          type="text"
          placeholder="Ürün ara..."
          value={searchInput}
          onChange={handleSearchChange}
          className="border border-gray-300 px-4 py-2 rounded w-full md:w-1/3"
        />

        {/* Kategori seçimi */}
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="border border-gray-300 px-4 py-2 rounded"
        >
          <option value="">Tüm Kategoriler</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.title}
            </option>
          ))}
        </select>

        {/* Sıralama seçimi */}
        <select
          value={selectedSort}
          onChange={handleSortChange}
          className="border border-gray-300 px-4 py-2 rounded"
        >
          <option value="">Sıralama Seç</option>
          <option value="price:asc">Fiyat Artan</option>
          <option value="price:desc">Fiyat Azalan</option>
          <option value="rating:asc">Puan Artan</option>
          <option value="rating:desc">Puan Azalan</option>
        </select>
      </div>

      {/* Ürün listesi veya yükleniyor mesajı */}
      {fetchState === "FETCHING" ? (
        <p className="text-center text-gray-500">Ürünler yükleniyor...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
            >
              Önceki
            </button>

            <span>Sayfa {page}</span>

            <button
              onClick={() => handlePageChange(page + 1)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Sonraki
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Shop;
