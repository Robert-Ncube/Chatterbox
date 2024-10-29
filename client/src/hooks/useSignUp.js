import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signUp = async ({
    fullname,
    username,
    email,
    password,
    confirmPassword,
    gender,
  }) => {
    try {
      setLoading(true);

      if (
        !fullname ||
        !username ||
        !email ||
        !password ||
        !confirmPassword ||
        !gender
      ) {
        toast.error("All fields are required!");
        return;
      }

      if (password.length < 5) {
        toast.error("Password must be at least 5 characters long!");
        return;
      }

      if (password !== confirmPassword) {
        toast.error("Passwords do not match!");
        return;
      }

      const url = "/api/auth/signup";
      const { data } = await axios.post(url, {
        fullname,
        username,
        email,
        password,
        confirmPassword,
        gender,
      });

      toast.success(data.message);
      console.log(data);

      localStorage.setItem("chat-user", JSON.stringify(data.data));

      setAuthUser(data.data);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return {
    signUp,
    loading,
  };
};

export default useSignUp;
