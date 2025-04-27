import axiosInstance from "../../api/axiosInstance";
import {
  setProductList,
  setTotal,
  setFetchState,
  setCategories,
  setSingleProduct,
} from "../actions/productActions";

// Tek bir ürünü çek
export const fetchProductById = (id) => async (dispatch) => {
  try {
    dispatch(setFetchState("FETCHING"));
    const res = await axiosInstance.get(`/products/${id}`);
    dispatch(setSingleProduct(res.data)); 
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    dispatch(setFetchState("FAILED"));
    console.error("Ürün çekilemedi:", error);
  }
};

// Tüm ürünleri çek
export const fetchProducts = () => async (dispatch, getState) => {
  const { filter, sort, search, page, limit } = getState().product;

  const params = {};

  if (filter) params.category = filter;
  if (sort) params.sort = sort;
  if (search) params.filter = search;
  if (page) params.page = page;
  if (limit) params.limit = limit;

  try {
    dispatch(setFetchState("FETCHING"));
    const res = await axiosInstance.get("/products", { params });
    dispatch(setProductList(res.data.products));
    dispatch(setTotal(res.data.total));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    dispatch(setFetchState("FAILED"));
    console.error("Ürünler çekilemedi:", error);
  }
};

// Kategorileri çek
export const fetchCategories = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get("/categories");
    dispatch(setCategories(res.data));
  } catch (error) {
    console.error("Kategoriler çekilemedi:", error);
  }
};
