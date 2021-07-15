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
.container {
  padding-top: 20px;
}
</style>
