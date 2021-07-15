<template>
  <Dialog
    v-model:visible="showDialog"
    :style="{ width: '450px' }"
    :modal="true"
  >
    <template #header>
      <h3>{{ header }}</h3>
    </template>
    <div class="confirmation-content">
      <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
      <span>{{ message }}</span>
    </div>
    <template #footer>
      <Button
        label="No"
        icon="pi pi-times"
        class="p-button-text"
        @click="onNo"
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        class="p-button-text"
        @click="onYes"
      />
    </template>
  </Dialog>
</template>

<script>
import { ref, defineComponent, toRefs } from "vue";

export default defineComponent({
  props: {
    message: String,
    isVisible: Boolean,
    header: String,
  },
  setup(props, context) {
    const { isVisible } = toRefs(props);
    const showDialog = ref(isVisible);

    const onNo = () => {
      context.emit("handle-no");
    };

    const onYes = () => {
      context.emit("handle-yes");
    };

    return {
      onNo,
      onYes,
      showDialog,
    };
  },
});
</script>
