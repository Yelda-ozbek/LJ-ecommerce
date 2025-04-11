import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const [roles, setRoles] = useState([]);
  const roleId = watch("role_id");

  // API'den rolleri al
  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((res) => {
        setRoles(res.data);
        const customer = res.data.find((r) => r.name.toLowerCase() === "müşteri");
        if (customer) {
          setValue("role_id", String(customer.id));
        }
      })
      .catch((err) => console.error("Rol verisi alınamadı:", err));
  }, [setValue]);

  const selectedRole = roles.find((r) => String(r.id) === String(roleId));
  const isStore = selectedRole?.name.toLowerCase() === "mağaza";

  const onSubmit = async (data) => {
    try {
      const { passwordConfirm, ...formData } = data; // ⬅️ passwordConfirm gönderilmesin!
      console.log("Gönderilecek veri:", formData);
      await axiosInstance.post("/signup", formData);
      alert("You need to click link in email to activate your account!");
      window.history.back();
    } catch (err) {
      console.error("Kayıt sırasında hata:", err.response?.data || err.message);
      alert("Kayıt başarısız. Lütfen bilgilerinizi kontrol edin.");
    }
  };
  

  return (
    <section className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            {...register("name", { required: true, minLength: 3 })}
            className="w-full border p-2 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">En az 3 karakter girin</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
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
          <label className="block mb-1" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Şifre gerekli",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                message:
                  "Şifre en az 8 karakter, büyük/küçük harf, rakam ve özel karakter içermeli",
              },
            })}
            className="w-full border p-2 rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1" htmlFor="passwordConfirm">Confirm Password</label>
          <input
            id="passwordConfirm"
            type="password"
            {...register("passwordConfirm", {
              required: "Lütfen şifreyi tekrar girin",
              validate: (value) =>
                value === watch("password") || "Şifreler eşleşmiyor",
            })}
            className="w-full border p-2 rounded"
          />
          {errors.passwordConfirm && (
            <p className="text-red-500 text-sm">{errors.passwordConfirm.message}</p>
          )}
        </div>

        {/* Role */}
        <div>
          <label className="block mb-1" htmlFor="role_id">Role</label>
          <select
            id="role_id"
            {...register("role_id", { required: "Rol seçilmeli" })}
            className="w-full border p-2 rounded"
            value={watch("role_id")}
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

        {/* STORE alanları - yalnızca mağaza seçildiyse */}
        {isStore && (
          <>
            {/* Store Name */}
            <div>
              <label className="block mb-1" htmlFor="storeName">Store Name</label>
              <input
                id="storeName"
                type="text"
                {...register("store.name", {
                  required: "Mağaza adı gerekli",
                  minLength: { value: 3, message: "En az 3 karakter" },
                })}
                className="w-full border p-2 rounded"
              />
              {errors.store?.name && <p className="text-red-500 text-sm">{errors.store.name.message}</p>}
            </div>

            {/* Store Phone */}
            <div>
              <label className="block mb-1" htmlFor="storePhone">Store Phone</label>
              <input
                id="storePhone"
                type="tel"
                placeholder="+905xxxxxxxxx"
                {...register("store.phone", {
                  required: "Telefon gerekli",
                  pattern: {
                    value: /^(\+90|0)?5\d{9}$/,
                    message: "Geçerli bir Türkiye telefonu girin",
                  },
                })}
                className="w-full border p-2 rounded"
              />
              {errors.store?.phone && <p className="text-red-500 text-sm">{errors.store.phone.message}</p>}
            </div>

            {/* Store Tax No */}
            <div>
              <label className="block mb-1" htmlFor="storeTax">Store Tax ID</label>
              <input
                id="storeTax"
                type="text"
                {...register("store.tax_no", {
                  required: "Vergi no gerekli",
                  pattern: {
                    value: /^T\d{4}V\d{6}$/,
                    message: "TXXXXVXXXXXX formatında girin",
                  },
                })}
                className="w-full border p-2 rounded"
              />
              {errors.store?.tax_no && <p className="text-red-500 text-sm">{errors.store.tax_no.message}</p>}
            </div>

            {/* Store IBAN */}
            <div>
              <label className="block mb-1" htmlFor="storeIban">Store IBAN</label>
              <input
  type="text"
  {...register("store.bank_account", {
    required: "IBAN gerekli",
    pattern: {
      value: /^TR\d{2}\d{4}\d{4}\d{4}\d{4}\d{2}$/,
      message: "Geçerli TR IBAN girin",
    },
    setValueAs: (v) => v.replace(/\s/g, ""), // boşlukları temizle
  })}
  className="w-full border p-2 rounded"
/>

              {errors.store?.bank_account && <p className="text-red-500 text-sm">{errors.store.bank_account.message}</p>}
            </div>
          </>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-6 py-2 rounded disabled:opacity-50"
        >
          {isSubmitting ? "Gönderiliyor..." : "Kaydol"}
        </button>
      </form>
    </section>
  );
};

export default Signup;
