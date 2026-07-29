import axios from "axios";
import type { LoginCredentials, FetchLoginResponse } from "../types/form";

const fetchLogin = async (
  data: LoginCredentials,
): Promise<FetchLoginResponse> => {
  const response = await axios.post<FetchLoginResponse>(
    `${import.meta.env.VITE_API_URL}/auth/login`,
    data,
  );

  return response.data;
};

export default fetchLogin;
