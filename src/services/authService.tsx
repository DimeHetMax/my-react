import axios from "axios";
import type { AuthUser } from "../types/form";

const fetchAuth = async (token: string): Promise<AuthUser> => {
  const response = await axios.get<AuthUser>(
    `${import.meta.env.VITE_API_URL}/auth/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};

export default fetchAuth;
