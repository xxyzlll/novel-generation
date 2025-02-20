<template>
  <div class="layout flex-center">
    <div class="page-layout">
      <aside class="sidebar">
        <div class="sidebar-header mt-10">
          <div class="container-title">NextChat</div>
          <div class="font-12 fw-400">Build ai assistant</div>
        </div>

        <div class="sidebar-list mt-10">
          <div v-for="(item,index) in messageList" class="card"
               @click="handleServerChange(item)"
               :class="{'active-card':currentServer.id===item.id}">
            <ElIcon class="close-icon" @click.stop="deleteServerChat(item,index)" :size="16" color="#6a5c5c">
              <CircleClose/>
            </ElIcon>
            <div>{{ item.title }}</div>
            <div class="flex-align flex-between small-font">
              <span>{{ item.count }}条对话</span>
              <span>{{ dayjs(item.time).format('YYYY/MM/DD HH:mm:ss') }}</span>
            </div>
          </div>
        </div>
        <div class="sidebar-content">
          <ElButton @click="addNewChatServer">
            <ElIcon class="close-icon" @click.stop="deleteServerChat" :size="16" color="#6a5c5c">
              <CirclePlus/>
            </ElIcon>
            &nbsp;
            新聊天
          </ElButton>
        </div>
      </aside>

      <div class="main-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import dayjs from "dayjs";
import { ElIcon, ElButton } from 'element-plus'
import { CircleClose, CirclePlus } from "@element-plus/icons-vue";
import type { Message } from "@/types";
import { useChatStore } from "@/store/chat";

const chatStore = useChatStore()
const { setCurrentChat } = chatStore

const messageList = reactive<Message[]>([
  { id: window.crypto.randomUUID(), title: 'demo1', time: '2024-2-1 2:16:2', count: 0 },
  { id: window.crypto.randomUUID(), title: 'demo2', time: '2024-2-1 3:26:21', count: 0 },
  { id: window.crypto.randomUUID(), title: 'demo2', time: '2024-2-1 3:26:21', count: 0 },
  { id: window.crypto.randomUUID(), title: 'demo2', time: '2024-2-1 3:26:21', count: 0 },
])

const currentServer = ref<Message>(messageList[0])

const handleServerChange = (data: Message) => {
  currentServer.value = data
  setCurrentChat(data)
}

const deleteServerChat = (_data: Message, index: number) => {
  messageList.splice(index, 1)
}

const addNewChatServer = () => {
  messageList.push({ id: window.crypto.randomUUID(), title: 'demo1', time: '2024-2-1 2:16:2', count: 0 })
}
</script>

<style scoped lang="less">
.layout {
  display: flex;
  height: 100vh;
  width: 100vw;

  .page-layout {
    display: flex;
    min-width: 680px;
    height: 80vh;
    border-radius: 10px;
    border: 1px solid var(--page-border);
  }

  .sidebar {
    width: 250px;
    background-color: var(--second);
    padding: 20px;
    display: flex;
    height: 100%;
    border-radius: 10px 0 0 10px;
    flex-direction: column;
  }

  .sidebar-header {
    font-size: 20px;
    font-weight: bold;
  }

  .sidebar-list {
    height: 80%;
    overflow: auto;

    .card {
      box-shadow: var(--card-shadow);
      background-color: #ffffff;
      margin: 10px 0;
      border-radius: 5px;
      padding: 15px;
      display: flex;
      gap: 10px;
      flex-direction: column;
      border: 2px solid transparent;
      position: relative;
      overflow: hidden;

      &:hover .close-icon {
        display: inline-block;
      }
    }

    .active-card {
      border: 2px solid var(--primary);
    }

    .close-icon {
      display: none;
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  .sidebar-content {
    margin-top: 20px;
  }

  .main-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .top-bar {
    background-color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }

  .chat-window {
    flex-grow: 1;
    padding: 20px;
    background-color: #fff;
    overflow-y: auto;
  }
}


</style>
