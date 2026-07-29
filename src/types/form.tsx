export interface LoginCredentials {
  username: string;
  password: string;
}

export interface FetchLoginResponse {
  accessToken: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  id: number;
  image: string;
  refreshToken: string;
  username: string;
}
