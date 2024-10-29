import { useState, useEffect } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) {
        console.log("No conversation selected.");
        return;
      }

      setLoading(true);

      try {
        const url = `/api/messages/${selectedConversation._id}`;
        const response = await axios.get(url);

        if (response.data?.error) {
          toast.error(response.data.error);
          return;
        }

        if (!response.data?.data || response.data.data.length === 0) {
          console.log("No messages found.");
          setMessages([]);
          return;
        }

        setMessages(response.data.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
        toast.error("Failed to load messages");
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
