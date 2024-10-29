import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    try {
      setLoading(true);

      const url = "/api/auth/logout";
      await axios.post(url);

      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    logout,
    loading,
  };
};

export default useLogout;
