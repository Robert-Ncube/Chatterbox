import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ email, password }) => {
    try {
      setLoading(true);

      if (!email || !password) {
        toast.error("All fields are required!");
        return;
      }

      const url = "/api/auth/login";
      const { data } = await axios.post(url, { email, password });

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
    login,
    loading,
  };
};

export default useLogin;
