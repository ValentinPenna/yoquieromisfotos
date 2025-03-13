import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  name: string;
  lastName: string;
  email: string;
  role: string;
  _id: string;
  // Agrega otras propiedades según tu token
}

export const decodeToken = (token: string): DecodedToken => {
  return jwtDecode<DecodedToken>(token);
}; 