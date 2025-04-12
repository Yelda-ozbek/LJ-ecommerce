

import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../api/axiosInstance";

const CompleteOrder = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const address = useSelector((state) => state.cart.address);
  const payment = useSelector((state) => state.cart.payment);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.count * item.product.price,
    0
  );

  const handleOrder = async () => {
    const orderData = {
      items: cart,
      address,
      payment,
      total: totalPrice,
    };

    try {
      // Gerçek API'ye post isteği
      const res = await axiosInstance.post("/orders", orderData);
      console.log("Sipariş tamamlandı:", res.data);

      alert("Siparişiniz başarıyla oluşturuldu!");

      // İsteğe bağlı: Sepeti temizle
      // dispatch(setCart([]));
    } catch (err) {
      console.error("Sipariş sırasında hata:", err);
      alert("Sipariş oluşturulamadı. Lütfen tekrar deneyin.");
    }
  };

  return (
    <section className="max-w-xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Siparişi Tamamla</h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Ürünler:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {cart.map((item) => (
              <li key={item.product.id}>
                {item.product.name} x {item.count} — {(item.product.price * item.count).toFixed(2)} ₺
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Teslimat Adresi:</h3>
          <p className="text-gray-700">
            {address.fullName}, {address.address}, {address.city} {address.postalCode}, Tel: {address.phone}
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Ödeme Bilgisi:</h3>
          <p className="text-gray-700">Kart Sahibi: {payment.cardName}</p>
        </div>

        <div className="text-lg font-bold text-right mt-4">
          Toplam: {totalPrice.toFixed(2)} ₺
        </div>

        <button
          onClick={handleOrder}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Siparişi Onayla
        </button>
      </div>
    </section>
  );
};

export default CompleteOrder;
