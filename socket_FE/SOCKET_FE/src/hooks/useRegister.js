import React, { useState } from "react";
import authService from "../services/auth.service";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const register = async (input) => {
    setLoading(true);
    await authService.register(input);
    setLoading(false);
  };
  return {
    loading,
    register,
  };
};

export default useRegister;
