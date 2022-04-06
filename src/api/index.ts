import { IProduct } from "./../types/index";
import axiosOriginal, { AxiosResponse } from "axios";

export const axios = axiosOriginal.create({
  baseURL: "https://artisant.io/api",
});

export const getProducts = () => {
  return axios.get<AxiosResponse<{ products: IProduct[] }>>("/products");
};
