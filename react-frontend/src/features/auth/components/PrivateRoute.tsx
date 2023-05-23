import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { verifyJwt } from "../authSlice";

const PrivateRoute = ({ page }: { page: JSX.Element }) => {
  const { jwt } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!jwt || !jwt?.token) return;

    dispatch(verifyJwt(jwt.token));
  }, [jwt]);

  return jwt ? page : <Navigate replace to="/login" />;
};

export default PrivateRoute;
