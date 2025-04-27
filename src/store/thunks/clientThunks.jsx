import axiosInstance from "../../api/axiosInstance";
import { setUser, setRoles,logout } from "../actions/clientActions";
import { toast } from "react-toastify";
export const verifyToken = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    axiosInstance.defaults.headers.common["Authorization"] = token; // Bearer YOK!

    const res = await axiosInstance.get("/verify");

    dispatch(setUser(res.data, token));

    // Eğer backend yeni bir token veriyorsa onu localStorage'a yeniden kaydetmeliyiz (ama bu proje bunu dememiş şu anda)
    localStorage.setItem("token", token);

  } catch (error) {
    console.error("Token doğrulama başarısız:", error);
    localStorage.removeItem("token");
    delete axiosInstance.defaults.headers.common["Authorization"];
    dispatch(logout());
  }
};
export const verifyUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    // Axios header'ına token'ı koy
    axiosInstance.defaults.headers["Authorization"] = token;

    const response = await axiosInstance.get("/verify");
    const { name, email, role_id } = response.data;

    // Kullanıcıyı redux'a kaydet
    dispatch(setUser({ name, email, role_id }));

    // Token'ı tekrar localStorage'a yaz (isteğe bağlı, refresh için)
    localStorage.setItem("token", token);
  } catch (error) {
    console.error("Token doğrulama başarısız:", error);
    localStorage.removeItem("token");
    delete axiosInstance.defaults.headers["Authorization"];
    dispatch(logout());
  }
};
// ✅ getRoles thunk
export const getRoles = () => async (dispatch, getState) => {
  const { roles } = getState().client;
  if (roles && roles.length > 0) return;

  try {
    const response = await axiosInstance.get("/roles");
    dispatch(setRoles(response.data));
  } catch (error) {
    console.error("Roles verisi alınamadı", error);
  }
};

// ✅ login thunk
// src/store/thunks/clientThunks.jsx

// thunks/clientThunks.jsx

export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await axiosInstance.post("/login", data);
    const { token, name, email, role_id } = response.data;

    dispatch(setUser({ name, email, role_id }, token));

    if (data.remember) {
      localStorage.setItem("token", token);
    }

    return { success: true };
  } catch (error) {
    console.error("Login failed:", error);
    return { success: false };
  }
};


export const getMe = () => async (dispatch) => {
  const token = localStorage.getItem("token"); // Local'den token alıyoruz
  if (!token) return; // Token yoksa devam etmiyoruz

  try {
    const res = await axiosInstance.get("/auth/me"); // ✅ API'ye user bilgisini almak için istek
    dispatch(setUser(res.data)); // User'ı redux'a kaydediyoruz
  } catch (err) {
    console.error("Kullanıcı bilgisi alınamadı:", err);
    localStorage.removeItem("token"); // Token geçersizse temizliyoruz
  }
};