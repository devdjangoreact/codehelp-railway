import axios from "axios";
import jwt_decode from "jwt-decode";
import { Cookies } from "typescript-cookie";
import { config } from "../CSRFToken";

import { DecodedJwt } from "../models/DecodedJwt.interface";

import { DisplayUser } from "../models/DisplayUser.interface";
import { Jwt } from "../models/Jwt";
import { LoginUser } from "../models/LoginUser.interface";
import { NewUser } from "../models/NewUser";

const register = async (
  newUser: NewUser
): Promise<{
  jwt: Jwt | null;
  user: DisplayUser | null;
  message: string;
  status: string;
}> => {
  const response = await axios.post(`/auth/register`, newUser);

  if (response.data) {
    if (response.data.status === "error") {
      return {
        jwt: null,
        user: null,
        message: response.data.message,
        status: response.data.status,
      };
    } else {
      localStorage.setItem(
        "jwt",
        JSON.stringify({ token: response.data.user.accessToken })
      );

      const decodedJwt: DecodedJwt = jwt_decode(response.data.user.accessToken);

      localStorage.setItem("user", JSON.stringify(response.data.user));
      console.log(response.data.user);
      return {
        jwt: response.data,
        user: decodedJwt.user,
        message: "",
        status: response.data.status,
      };
    }
  }
  return {
    jwt: response.data,
    user: null,
    message: response.statusText,
    status: "error",
  };
};

const login = async (
  user: LoginUser
): Promise<{
  jwt: Jwt;
  user: DisplayUser | null;
  message: string;
  status: string;
}> => {
  const response = await axios.post(`/auth/login`, user);
  console.log(response.data);
  if (response.data) {
    if (response.data.status === "error") {
      return {
        jwt: null,
        user: null,
        message: response.data.message,
        status: response.data.status,
      };
    } else {
      localStorage.setItem(
        "jwt",
        JSON.stringify({ token: response.data.user.accessToken })
      );

      const decodedJwt: DecodedJwt = jwt_decode(response.data.user.accessToken);

      localStorage.setItem("user", JSON.stringify(response.data.user));

      return {
        jwt: response.data.user.accessToken,
        user: decodedJwt.user,
        message: response.data.message,
        status: response.data.status,
      };
    }
  }
  console.log(response.statusText);
  return {
    jwt: response.data,
    user: null,
    message: response.statusText,
    status: "error",
  };
};

const logout = async () => {
  const response = await axios.post(`/logout`);
  console.log(response.data);
  localStorage.removeItem("user");
  localStorage.removeItem("jwt");
  Cookies.remove("csrftoken");
  Cookies.remove("sessionid");
};

const verifyJwt = async (token: string): Promise<boolean> => {
  const response = await axios.post(
    `/auth/token/verify/`,
    { token }
    // config
  );
  console.log(response.data);
  if (response.data) {
    // const jwtExpirationMs = response.data.exp * 1000;
    // return jwtExpirationMs > Date.now();

    return true;
  }

  return false;
};

const authService = {
  register,
  login,
  logout,
  verifyJwt,
};

export default authService;
