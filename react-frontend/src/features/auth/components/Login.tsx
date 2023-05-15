import { FormEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Input, Message, Loader } from "../../../components";

import useInput from "../../../hooks/input/use-input";
import { validateEmail } from "../../../shared/utils/validation/email";
import { validatePasswordLength } from "../../../shared/utils/validation/length";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { login, reset } from "../authSlice";
import { LoginUser } from "../models/LoginUser.interface";
import CSRFToken from "../CSRFToken";

const Login = () => {
  const {
    text: username,
    shouldDisplayError: emailHasError,
    textChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    clearHandler: emailClearHandler,
  } = useInput(validateEmail);

  const {
    text: password,
    shouldDisplayError: passwordHasError,
    textChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    clearHandler: passwordClearHandler,
  } = useInput(validatePasswordLength);

  const clearForm = () => {
    emailClearHandler();
    passwordClearHandler();
  };

  const dispatch = useAppDispatch();

  const { isError, isLoading, isSuccess, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      clearForm();
    }
  }, [isSuccess, dispatch]);

  useEffect(() => {
    if (!isAuthenticated) return;
    navigate("/");
  }, [isAuthenticated]);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailHasError || passwordHasError) return;

    if (username.length === 0 || password.length === 0) return;

    const loginUser: LoginUser = { username, password };

    dispatch(login(loginUser));
  };

  return (
    <form
      className="h-screen flex flex-col justify-center items-center bg-blue-50"
      onSubmit={onSubmitHandler}
    >
      <CSRFToken />
      <div
        className="flex flex-col justify-center items-center border-4
       border-amber-300 py-20 p-8 mb-40 rounded-lg bg-orange-50"
      >
        {isError && <Message />}
        {isLoading && <Loader />}
        <span className="text-4xl m-2">LOGIN</span>
        <Input
          className="text-xl m-2 w-96"
          placeholder="email"
          type="text"
          value={username}
          onChange={emailChangeHandler}
        />
        <Input
          className="text-xl m-2 w-96"
          placeholder="password"
          value={password}
          type="password"
          onChange={passwordChangeHandler}
        />
        <div className="m-2 w-96 flex justify-start ">
          <button
            className="text-lg m-2 w-48 text-blue-600 bg-orange-200"
            type="submit"
          >
            Sign In
          </button>
          <label className="text-lg pl-8 m-2 w-64 ">
            <p>
              New Customer?
              <Link
                className="text-xl m-2 w-64 text-center text-blue-600"
                to={"/register"}
              >
                Register
              </Link>
            </p>
          </label>
        </div>
      </div>
    </form>
  );
};

export default Login;
