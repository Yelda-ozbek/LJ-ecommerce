import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/actions/cartActions";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.product.productList);
  const cart = useSelector((state) => state.cart.cart);

  const product = productList.find((p) => String(p.id) === String(id));

  const addToCart = () => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, count: item.count + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { count: 1, product }];
    }

    dispatch(setCart(updatedCart));
  };

  if (!product) {
    return (
      <div className="px-4 py-10 text-center text-gray-500">
        Ürün bulunamadı.
      </div>
    );
  }

  return (
    <section className="px-4 md:px-20 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <img
            src={product.images?.[0]?.url || "http://via.placeholder.com/400"}
            alt={product.name}
            className="w-full h-auto rounded shadow"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">{product.name}</h1>
          <p className="text-sm text-gray-500 mb-4">{product.description}</p>

          <div className="text-blue-600 text-xl font-bold mb-6">
            {product.price.toFixed(2)} ₺
          </div>

          <button
            onClick={addToCart}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
