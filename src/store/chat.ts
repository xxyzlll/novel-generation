import { defineStore } from "pinia";
import { ref } from "vue";

export const useChatStore = defineStore('chat', () => {
    const currentChat = ref(null)

    function setCurrentChat(chat) {
        currentChat.value = chat
    }

    return { currentChat, setCurrentChat }
})
