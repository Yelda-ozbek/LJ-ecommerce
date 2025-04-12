// src/store/thunks/productThunks.jsx

import axiosInstance from "../../api/axiosInstance";
import {
  setProductList,
  setTotal,
  setFetchState,
  setCategories
} from "../actions/productActions";

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setFetchState("FETCHING"));
    const res = await axiosInstance.get("/products");
    dispatch(setProductList(res.data.products));
    dispatch(setTotal(res.data.total));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    dispatch(setFetchState("FAILED"));
    console.error("Ürünler çekilemedi:", error);
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get("/categories");
    dispatch(setCategories(res.data));
  } catch (error) {
    console.error("Kategoriler çekilemedi:", error);
  }
};
