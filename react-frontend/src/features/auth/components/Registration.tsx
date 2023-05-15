import React, { FC, useEffect, FormEvent } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { Input, Message, Loader } from "../../../components";
import useInput from "../../../hooks/input/use-input";
import {
  validateNameLength,
  validatePasswordLength,
} from "../../../shared/utils/validation/length";
import { validateEmail } from "../../../shared/utils/validation/email";
import { NewUser } from "../../../features/auth/models/NewUser";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { register, reset } from "../../../features/auth/authSlice";
import CSRFToken from "../../../features/auth/CSRFToken";

const Registration: FC = () => {
  const {
    text: username,
    shouldDisplayError: nameHasError,
    textChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    clearHandler: nameClearHandler,
  } = useInput(validateNameLength);

  const {
    text: email,
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

  const {
    text: re_password,
    shouldDisplayError: confirmPasswordHasError,
    textChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    clearHandler: confirmPasswordClearHandler,
  } = useInput(validatePasswordLength);

  const clearForm = () => {
    nameClearHandler();
    emailClearHandler();
    passwordClearHandler();
    confirmPasswordClearHandler();
  };

  const dispatch = useAppDispatch();

  const { isError, isLoading, isSuccess, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(reset());
      clearForm();
      navigate("/");
    }
  }, [isSuccess, isAuthenticated, dispatch]);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== re_password) return;

    if (
      nameHasError ||
      emailHasError ||
      passwordHasError ||
      confirmPasswordHasError
    )
      return;

    if (
      username.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      re_password.length === 0
    )
      return;

    const newUser: NewUser = {
      username,
      email,
      password,
      re_password,
    };

    dispatch(register(newUser));
  };

  return (
    <form
      className="h-screen flex flex-col justify-center items-center  bg-blue-50"
      onSubmit={onSubmitHandler}
    >
      <CSRFToken />
      <div
        className="flex flex-col justify-center items-center border-4 
       bg-orange-50 border-amber-300 py-16 p-4 mb-40 rounded-lg"
      >
        {/* {message && <Message />} */}
        {isError && <Message />}
        {isLoading && <Loader />}
        <span className="text-4xl m-2">Register</span>
        <Input
          className="text-xl m-2 w-96"
          placeholder="Name"
          onChange={nameChangeHandler}
          type="text"
          value={username}
        />
        <Input
          className="text-xl m-2 w-96"
          placeholder="email"
          onChange={emailChangeHandler}
          type="email"
          value={email}
        />

        <Input
          className="text-xl m-2 w-96"
          placeholder="password"
          onChange={passwordChangeHandler}
          type="password"
          value={password}
        />
        <Input
          className="text-xl m-2 w-96"
          placeholder="confirm password"
          onChange={confirmPasswordChangeHandler}
          type="password"
          value={re_password}
        />
        <div className=" m-2 w-96 flex justify-start ">
          <button
            className="text-lg m-2 w-48 text-blue-600 bg-orange-200"
            type="submit"
          >
            Sign In
          </button>
          <label className="text-lg pl-8 m-2 w-64 ">
            <p>
              Have an Account?
              <Link
                className="text-xl m-2 w-64 text-center text-blue-600"
                to={"/login"}
              >
                Login
              </Link>
            </p>
          </label>
        </div>
      </div>
    </form>
  );
};

export default Registration;
