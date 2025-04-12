import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setPayment } from "../store/actions/cartActions";
import { useHistory } from "react-router-dom";


const Payment = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();


  const onSubmit = (data) => {
    dispatch(setPayment(data));
    alert("Ödeme bilgileri kaydedildi.");
    history.push("/cart");

  };

  return (
    <section className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Ödeme Bilgileri</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Kart Üzerindeki İsim</label>
          <input
            {...register("cardName", { required: true })}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Kart Numarası</label>
          <input
            {...register("cardNumber", { required: true })}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Son Kullanma Tarihi</label>
          <input
            {...register("expiry", { required: true })}
            placeholder="MM/YY"
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>CVV</label>
          <input
            {...register("cvv", { required: true })}
            type="password"
            className="w-full border p-2 rounded"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Kaydet ve Devam Et
        </button>
      </form>
    </section>
  );
};

export default Payment;
