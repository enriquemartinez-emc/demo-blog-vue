<template>
  <Menubar :model="items">
    <template #start>
      <h3>SISBANF</h3>
    </template>
  </Menubar>
</template>

<script>
import { defineComponent, ref } from "vue";
import Menubar from "primevue/menubar";

export default defineComponent({
  components: { Menubar },
  setup() {
    const items = ref([
      {
        label: "Home",
        icon: "pi pi-fw pi-home",
        to: "/",
      },
      {
        label: "Users",
        icon: "pi pi-fw pi-user",
        to: "/users",
      },
      {
        label: "Posts",
        icon: "pi pi-fw pi-desktop",
        to: "/posts",
      },
      {
        label: "About",
        icon: "pi pi-fw pi-globe",
        to: "/about",
      },
    ]);

    return {
      items,
    };
  },
});
</script>
