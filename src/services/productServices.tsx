import axios from "axios";
import type{ Product, ProductResponse } from "../types/product";

const fetchProducts = async (product: string): Promise<Product[]> => {
  const prodcuts = await axios.get<ProductResponse>(`${import.meta.env.VITE_PRODUCTS_API_URL}/products/search`, {
    params: {
      q: product,
    },
  });
  return prodcuts.data.products;
};
export default fetchProducts;
