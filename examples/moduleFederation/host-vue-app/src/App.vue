<!-- TODO 热更新失效 -->
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { defineAsyncComponent } from "vue";
import RemoteApp from "remote_app/App";
import { add } from "remote_app/utils";

const Button = defineAsyncComponent(() => import("remote_app/Button"));

const sum = add(1, 2);
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <HelloWorld msg="Host App" />

  <RemoteApp />
  <Button />

  <div style="margin-top: 20px">1 + 2 = {{ sum }}</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
