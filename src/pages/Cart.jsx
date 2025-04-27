import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.count,
    0
  );

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <section className="px-4 md:px-20 py-10">
      <h2 className="text-2xl font-bold mb-6">Sepetim</h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center mt-6">
          <p className="text-gray-500 mb-4">Sepetinizde ürün bulunmamaktadır.</p>
          <Link to="/shop" className="flex items-center text-blue-500 hover:text-blue-700">
            <span className="mr-2">←</span>
            <span>Alışverişe devam et...</span>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sepet Ürünleri */}
          <div className="flex-1 space-y-6">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.images?.[0]?.url || "http://via.placeholder.com/100"}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.product.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        type="button"
                        onClick={() => dispatch(decreaseQuantity(item.product.id))}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item.count}</span>
                      <button
                        type="button"
                        onClick={() => dispatch(increaseQuantity(item.product.id))}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="text-blue-600 font-bold">
                    {(item.product.price * item.count).toFixed(2)} ₺
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemove(item.product.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Ürünü Sil
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right text-lg font-bold mt-4">
              Toplam: {totalPrice.toFixed(2)} ₺
            </div>

            <div className="mt-6">
              <Link to="/shop" className="text-blue-500 hover:underline">
                ← Alışverişe Devam Et
              </Link>
            </div>
          </div>

          {/* Sipariş Özeti Kutusu */}
          <div className="w-full lg:w-1/3">
            <div className="border rounded p-6 shadow-md sticky top-24">
              <h3 className="text-xl font-semibold mb-6">Sipariş Özeti</h3>

              <div className="flex justify-between mb-2">
                <span>Ürün Toplamı</span>
                <span>{totalPrice.toFixed(2)} ₺</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>Kargo</span>
                <span>Bedava</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between font-bold text-lg">
                <span>Toplam</span>
                <span>{totalPrice.toFixed(2)} ₺</span>
              </div>

              <button
                type="button"
                onClick={() => history.push("/create-order")}
                className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold"
              >
                Siparişi Onayla
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
