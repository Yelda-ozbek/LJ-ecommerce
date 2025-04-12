

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setAddress } from "../store/actions/cartActions";
import { useHistory } from "react-router-dom";

const Address = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(setAddress(data));
    alert("Adres bilgileri kaydedildi.");
    history.push("/cart"); // Sepete geri yönlendirme
  };

  return (
    <section className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Teslimat Adresi</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label>Ad Soyad</label>
          <input
            {...register("fullName", { required: true })}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Adres</label>
          <textarea
            {...register("address", { required: true })}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Şehir</label>
          <input
            {...register("city", { required: true })}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Posta Kodu</label>
          <input
            {...register("postalCode", { required: true })}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Telefon</label>
          <input
            {...register("phone", { required: true })}
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

export default Address;
