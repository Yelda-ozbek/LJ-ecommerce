// src/pages/Login.jsx
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom"; // React Router v5
import { loginUser } from "../store/thunks/clientThunks"; // login thunk
import { toast } from "react-toastify";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const onSubmit = async (data) => {
    const result = await dispatch(loginUser(data));
  
    if (result.success) {
      toast.success("Giriş başarılı!");
      const redirectPath = location.state?.from?.pathname || "/";
      history.push(redirectPath);
    } else {
      toast.error("Giriş başarısız. Bilgilerinizi kontrol edin.");
    }
  };
  
  return (
    <section className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Giriş Yap</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email gerekli" })}
            className="w-full border p-2 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1">Şifre</label>
          <input
            type="password"
            {...register("password", { required: "Şifre gerekli" })}
            className="w-full border p-2 rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Remember Me */}
        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("remember")} />
          <label>Remember Me</label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Giriş Yap
        </button>
      </form>
    </section>
  );
};

export default Login;
