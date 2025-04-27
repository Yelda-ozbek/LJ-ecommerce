// src/pages/Signup.jsx
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUser } from "../store/actions/clientActions";
import { getRoles } from "../store/thunks/clientThunks";
import { useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const roles = useSelector((state) => state.client.roles);

  const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = useForm();

  const selectedRoleId = watch("role_id");

  const selectedRole = roles.find((r) => String(r.id) === String(selectedRoleId));
  const isStore = selectedRole?.code === "store";

  // Roller yüklenmezse çek
  useEffect(() => {
    if (!roles.length) {
      dispatch(getRoles());
    }
  }, [dispatch, roles.length]);

  // Başlangıçta müşteri rolünü seç
  useEffect(() => {
    const customer = roles.find((r) => r.name?.toLowerCase() === "müşteri");
    if (customer) {
      setValue("role_id", String(customer.id));
    }
  }, [roles, setValue]);

  const onSubmit = async (data) => {
    try {
      const { passwordConfirm, ...formData } = data;

      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role_id: formData.role_id,
      };

      // Eğer Store ise mağaza bilgilerini ekle
      if (isStore) {
        payload.store = {
          name: formData.storeName,
          phone: formData.storePhone,
          tax_no: formData.storeTaxNo,
          bank_account: formData.storeBankAccount,
        };
      }

      const res = await axiosInstance.post("/signup", payload);

      // Başarılı kayıt olunca user'ı kaydetme (çünkü aktifleşmesi gerekiyor)
      toast.warn("Hesabınızı aktifleştirmek için emailinizi kontrol edin!");
      history.push("/login");

    } catch (error) {
      console.error("Kayıt hatası:", error.response?.data || error.message);
      toast.error("Kayıt başarısız. Bilgileri kontrol edin!");
    }
  };

  return (
    <section className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Kaydol</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1">Ad Soyad</label>
          <input
            type="text"
            {...register("name", { required: true, minLength: 3 })}
            className="w-full border p-2 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">En az 3 karakter girin</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email gerekli",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Geçerli bir email girin",
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1">Şifre</label>
          <input
            type="password"
            {...register("password", {
              required: "Şifre gerekli",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                message: "8 karakter, büyük/küçük harf, rakam ve özel karakter olmalı",
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Password Confirm */}
        <div>
          <label className="block mb-1">Şifre Tekrar</label>
          <input
            type="password"
            {...register("passwordConfirm", {
              required: "Şifreyi tekrar girin",
              validate: (value) => value === watch("password") || "Şifreler eşleşmiyor",
            })}
            className="w-full border p-2 rounded"
          />
          {errors.passwordConfirm && <p className="text-red-500 text-sm">{errors.passwordConfirm.message}</p>}
        </div>

        {/* Role */}
        <div>
          <label className="block mb-1">Rol Seçimi</label>
          <select
            {...register("role_id", { required: "Rol seçimi gerekli" })}
            className="w-full border p-2 rounded"
          >
            <option value="">Seçiniz</option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
          {errors.role_id && <p className="text-red-500 text-sm">{errors.role_id.message}</p>}
        </div>

        {/* Eğer mağaza ise ekstra alanlar */}
        {isStore && (
          <>
            <div>
              <label className="block mb-1">Mağaza Adı</label>
              <input
                type="text"
                {...register("storeName", { required: "Mağaza adı gerekli", minLength: 3 })}
                className="w-full border p-2 rounded"
              />
              {errors.storeName && <p className="text-red-500 text-sm">{errors.storeName.message}</p>}
            </div>

            <div>
              <label className="block mb-1">Mağaza Telefon</label>
              <input
                type="text"
                {...register("storePhone", { required: "Telefon gerekli", pattern: /^(\+90|0)?5\d{9}$/ })}
                className="w-full border p-2 rounded"
              />
              {errors.storePhone && <p className="text-red-500 text-sm">Geçerli Türkiye telefonu girin</p>}
            </div>

            <div>
              <label className="block mb-1">Vergi Numarası</label>
              <input
                type="text"
                {...register("storeTaxNo", { required: "Vergi numarası gerekli", pattern: /^T\d{4}V\d{6}$/ })}
                className="w-full border p-2 rounded"
              />
              {errors.storeTaxNo && <p className="text-red-500 text-sm">TXXXXVXXXXXX formatında girin</p>}
            </div>

            <div>
              <label className="block mb-1">IBAN</label>
              <input
                type="text"
                {...register("storeBankAccount", { required: "IBAN gerekli", pattern: /^TR\d{2}\d{4}\d{4}\d{4}\d{4}\d{2}$/ })}
                className="w-full border p-2 rounded"
              />
              {errors.storeBankAccount && <p className="text-red-500 text-sm">Geçerli TR IBAN girin</p>}
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? "Gönderiliyor..." : "Kaydol"}
        </button>
      </form>
    </section>
  );
};

export default Signup;
