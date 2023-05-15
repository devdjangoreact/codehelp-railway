import axios from "axios";
import jwt_decode from "jwt-decode";
import { Cookies } from "typescript-cookie";
import { config } from "../CSRFToken";

import { DecodedJwt } from "../models/DecodedJwt.interface";

import { DisplayUser } from "../models/DisplayUser.interface";
import { Jwt } from "../models/Jwt";
import { LoginUser } from "../models/LoginUser.interface";
import { NewUser } from "../models/NewUser";

// const register = async (newUser: NewUser): Promise<{ jwt: Jwt; DisplayUser | null}> => {

const register = async (
  newUser: NewUser
): Promise<{ jwt: Jwt; user: DisplayUser | null; payload: string }> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/register`,
    newUser
  );

  if (response.data) {
    localStorage.setItem("jwt", JSON.stringify({ token: response.data.token }));

    const decodedJwt: DecodedJwt = jwt_decode(response.data.token);

    localStorage.setItem("user", JSON.stringify(response.data.user));

    return { jwt: response.data, user: decodedJwt.user, payload: "" };
  }
  return { jwt: response.data, user: null, payload: response.data };
};

const login = async (
  user: LoginUser
): Promise<{ jwt: Jwt; user: DisplayUser | null }> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/login`,
    user
  );

  if (response.data) {
    localStorage.setItem("jwt", JSON.stringify({ token: response.data.token }));

    const decodedJwt: DecodedJwt = jwt_decode(response.data.token);

    localStorage.setItem("user", JSON.stringify(response.data.user));

    return { jwt: response.data, user: decodedJwt.user };
  }
  return { jwt: response.data, user: null };
};

const logout = (): void => {
  localStorage.removeItem("user");
  localStorage.removeItem("jwt");
  Cookies.remove("csrftoken");
  Cookies.remove("sessionid");
};

const verifyJwt = async (token: string): Promise<boolean> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/token/verify/`,
    { token }
    // config
  );

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
