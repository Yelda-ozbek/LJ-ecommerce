import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { addToCart } from "../store/actions/cartActions";
import slugify from "slugify";

const ProductCard = ({ id, name, description, price, images, category_id }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // 🖼 Ürün görseli
  const imageUrl = images?.[0]?.url || "https://via.placeholder.com/300x400";

  // 🔠 Ürün slug
  const productSlug = slugify(name, { lower: true });

  // 📂 Kategori bilgisi
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  const selectedCategory = categories.find(cat => cat.id === category_id);

  const gender = selectedCategory?.gender || "unisex";
  const categoryName = selectedCategory?.title?.toLowerCase() || "kategori";

  // 📌 Ürün Detay Sayfa URL
  const productDetailURL = `/shop/${gender}/${categoryName}/${category_id}/${productSlug}/${id}`;

  // 🛒 Sepete Ekleme
  const handleAddToCart = () => {
    const product = { id, name, description, price, images };
    dispatch(addToCart({ product, count: 1 }));
    history.push("/cart");
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
      
      {/* 📍 Sadece ürün kartı tıklanınca detay */}
      <Link to={productDetailURL}>
        <img src={imageUrl} alt={name} className="w-full h-72 object-cover" />
        <div className="p-4">
          <h3 className="text-md font-semibold text-gray-900 truncate">{name}</h3>
          <p className="text-sm text-gray-500 line-clamp-2 h-10">{description}</p>
          <div className="mt-2 mb-4">
            <span className="text-lg font-bold text-blue-600">
              {price.toFixed(2)} ₺
            </span>
          </div>
        </div>
      </Link>

      {/* 🛒 Sepete Ekle butonu - Link'in dışında */}
      <div className="px-4 pb-4">
        <button
          onClick={handleAddToCart} // ✅ Artık preventDefault yok
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Sepete Ekle
        </button>
      </div>

    </div>
  );
};

export default ProductCard;
