import { Link } from "react-router-dom";

const CompleteOrder = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-3xl font-bold mb-4">Siparişiniz Başarıyla Tamamlandı! 🎉</h1>
      <p className="text-gray-600 mb-8">
        Sipariş bilgileriniz e-posta adresinize gönderildi. Bizi tercih ettiğiniz için teşekkürler!
      </p>

      <div className="flex gap-4">
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded">
          Anasayfaya Dön
        </Link>
        <Link to="/shop" className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded">
          Alışverişe Devam Et
        </Link>
      </div>
    </section>
  );
};

export default CompleteOrder;
