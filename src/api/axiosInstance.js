import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com", // ✅
});

// Eğer token varsa, her istek öncesi header'a ekle
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token; // ✅ Bearer yok
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ❗ Burası eksikse import hatası alırsın!
export default axiosInstance;
