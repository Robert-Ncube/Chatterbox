import { useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState();
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    try {
      setLoading(true);

      const url = `/api/messages/send/${selectedConversation?._id}`;
      const response = await axios.post(url, { message });

      if (response.data.error) {
        console.error(response.data.error);
        toast.error(response.data.error);
        return;
      }

      setMessages([...messages, response.data.data]);
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
};

export default useSendMessage;
