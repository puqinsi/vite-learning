<script setup>
defineProps({
  msg: String
});
</script>

<template>
  <h1 class="title">{{ msg }}</h1>
</template>

<style scoped>
.title {
  color: green;
}
</style>
