import React, { useState } from "react";
import authService from "../services/auth.service";
import { useDispatch } from "react-redux";
import { loginSuccessfully } from "../redux/action/userAction";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  
  const dispatch = useDispatch();
  const login = async (input) => {
    setLoading(true);
    const user = await authService.login(input);
    setLoading(false);
    if(user) {
        localStorage.setItem('token', user.token);
        dispatch(loginSuccessfully(user));
    }
    return (user);
  }
  return {
    loading, login
  };
};

export default useLogin;
