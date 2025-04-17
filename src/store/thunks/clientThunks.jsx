// src/store/thunks/clientThunks.jsx
import axiosInstance from "../../api/axiosInstance";
import { setUser, setRoles } from "../actions/clientActions";
import { toast } from "react-toastify";

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
export const loginUser = (data) => async (dispatch) => {
    try {
      const response = await axiosInstance.post("/login", data);
      const { user, token } = response.data;
  
      dispatch(setUser(user));
  
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
    const token = localStorage.getItem("token");
    if (!token) return;
  
    try {
      const res = await axiosInstance.get("/auth/me"); // ya da senin API'deki endpoint
      dispatch(setUser(res.data));
    } catch (err) {
      console.error("Kullanıcı bilgisi alınamadı:", err);
      localStorage.removeItem("token"); // Token bozuksa temizle
    }
  };
  
