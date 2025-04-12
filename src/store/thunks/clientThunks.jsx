import axiosInstance from "../../api/axiosInstance";
import { setRoles } from "../actions/clientActions";

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
