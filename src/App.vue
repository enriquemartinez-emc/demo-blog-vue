<template>
  <Navbar />
  <main class="container p-input-filled">
    <router-view />
  </main>

  <Toast />
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style scoped>
.app {
  height: 100%;
  background-color: lightgray;
}
.container {
  padding-top: 20px;
}
</style>
