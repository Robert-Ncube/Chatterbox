import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConverstaion: null,
  setSelectedConversation: (conversation) =>
    set({ selectedConversation: conversation }),

  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;

//selectedConversation is the selected User
