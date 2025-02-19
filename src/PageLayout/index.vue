<template>
  <div class="layout flex-center">
    <div class="page-layout">
      <aside class="sidebar">
        <div class="sidebar-header mt-10">
          <div class="container-title">NextChat</div>
          <div class="font-12 fw-400">Build ai assistant</div>
        </div>

        <div class="sidebar-list">
          <div v-for="item in messageList" class="card">
            <div>{{ item.title }}</div>
            <div class="flex-align flex-between small-font">
              <span>{{ item.count }}条对话</span>
              <span>{{ item.time }}</span>
            </div>
          </div>
        </div>
        <div class="sidebar-content">
          <button>新聊天</button>
        </div>
      </aside>

      <div class="main-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const messageList = reactive([
  {id: window.crypto.randomUUID(), title: 'demo1', time: '2024-2-1', count: 0},
  {id: window.crypto.randomUUID(), title: 'demo2', time: '2024-2-1', count: 0},
])

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
    .card {
      box-shadow: var(--card-shadow);
      background-color: #ffffff;
      margin: 10px 0;
      border-radius: 5px;
      padding: 15px;
      display: flex;
      gap: 10px;
      flex-direction: column;
    }
  }

  .sidebar-content {
    margin-top: 20px;
  }

  .sidebar-content button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
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
