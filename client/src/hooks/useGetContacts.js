import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useGetContacts = () => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      setLoading(true);
      try {
        const url = "/api/users";
        const { data } = await axios.get(url);

        if (data.error) {
          toast.error(data.error);
          return;
        }

        setContacts(data.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load contacts");
      } finally {
        setLoading(false);
      }
    };
    getContacts();
  }, []);

  return {
    contacts,
    loading,
  };
};

export default useGetContacts;
