import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  setPayment,
  setAddress,
  clearCart,
} from "../store/actions/cartActions";
import { useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [addressInfo, setAddressInfo] = useState({
    fullName: "",
    phone: "",
    city: "",
    addressLine: "",
    postalCode: "",
  });

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.count,
    0
  );

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Bilgileri store'a kaydet
    dispatch(setPayment(paymentInfo));
    dispatch(setAddress(addressInfo));

    // Siparişi bildir ve sepeti sıfırla
    alert("✅ Siparişiniz başarıyla oluşturuldu!");
    dispatch(clearCart());
  };

  return (
    <section className="px-4 md:px-20 py-10">
      <h2 className="text-2xl font-bold mb-6">🛒 Sepetim</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Sepetinizde ürün yok.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Sepet Ürünleri */}
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={
                      item.product.images?.[0]?.url ||
                      "http://via.placeholder.com/100"
                    }
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
          </div>

          {/* Ödeme Bilgileri */}
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">💳 Ödeme Bilgileri</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Kart Üzerindeki İsim"
                className="border p-2 rounded"
                value={paymentInfo.cardName}
                onChange={(e) =>
                  setPaymentInfo({ ...paymentInfo, cardName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Kart Numarası"
                className="border p-2 rounded"
                value={paymentInfo.cardNumber}
                onChange={(e) =>
                  setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Son Kullanma Tarihi (MM/YY)"
                className="border p-2 rounded"
                value={paymentInfo.expiry}
                onChange={(e) =>
                  setPaymentInfo({ ...paymentInfo, expiry: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="CVV"
                className="border p-2 rounded"
                value={paymentInfo.cvv}
                onChange={(e) =>
                  setPaymentInfo({ ...paymentInfo, cvv: e.target.value })
                }
              />
            </div>
          </div>

          {/* Adres Bilgileri */}
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">🚚 Teslimat Adresi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Ad Soyad"
                className="border p-2 rounded"
                value={addressInfo.fullName}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, fullName: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Telefon"
                className="border p-2 rounded"
                value={addressInfo.phone}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, phone: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Şehir"
                className="border p-2 rounded"
                value={addressInfo.city}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, city: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Posta Kodu"
                className="border p-2 rounded"
                value={addressInfo.postalCode}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, postalCode: e.target.value })
                }
              />
              <textarea
                placeholder="Adres"
                className="border p-2 rounded col-span-1 md:col-span-2"
                value={addressInfo.addressLine}
                onChange={(e) =>
                  setAddressInfo({ ...addressInfo, addressLine: e.target.value })
                }
              />
            </div>
          </div>

          {/* Siparişi Onayla Butonu */}
          <div className="text-right">
            <button
              type="submit"
              className="mt-6 bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700"
            >
              ✅ Siparişi Onayla
            </button>
          </div>
        </form>
      )}

      <div className="mt-6">
        <Link to="/shop" className="text-blue-500 hover:underline">
          ← Alışverişe Devam Et
        </Link>
      </div>
    </section>
  );
};

export default Cart;
