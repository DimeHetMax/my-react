export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthUser {
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  id: number;
  image: string;
  username: string;
}

export interface FetchLoginResponse extends AuthUser {
  accessToken: string;
  refreshToken: string;
}
