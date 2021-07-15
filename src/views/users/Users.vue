<template>
  <div class="p-grid">
    <div class="p-col-12">
      <Button
        label="New User"
        icon="pi pi-plus"
        class="p-button-success p-mr-2"
        @click="newUser"
      />
    </div>
    <div class="p-col-7">
      <div v-if="loading">Users are downloading...</div>
      <div v-else-if="users">
        <UsersList
          :users="users"
          @select="onSelected($event)"
          @delete="onSelectedToDelete($event)"
        />
      </div>
    </div>
    <div class="p-col-5">
      <UserDetails
        :selectedUser="selectedUser"
        @cancel="clear"
        @save="saveUser($event)"
      />
    </div>
  </div>
  <BaseDialog
    :isVisible="showDialog"
    :header="'Confirm'"
    :message="'Are you sure you want to delete the selected user?'"
    @handleNo="showDialog = false"
    @handleYes="deleteSelectedUser"
  />
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import useUsers from "@/composables/useUsers";
import BaseDialog from "@/components/BaseDialog.vue";
import UsersList from "./UsersList.vue";
import UserDetails from "./UserDetails.vue";

export default defineComponent({
  components: { BaseDialog, UsersList, UserDetails },
  setup() {
    const { users, fetchUsers, loading, saveUser, deleteUser } = useUsers();
    const showDialog = ref(false);
    const selectedUser = ref(null);

    onMounted(async () => await fetchUsers());

    function onSelected(user) {
      selectedUser.value = user;
    }

    function newUser() {
      selectedUser.value = {};
    }

    function clear() {
      selectedUser.value = null;
    }

    function onSelectedToDelete(user) {
      selectedUser.value = user;
      showDialog.value = true;
    }

    async function deleteSelectedUser() {
      showDialog.value = false;
      await deleteUser(selectedUser.value);
      selectedUser.value = null;
    }

    return {
      users,
      selectedUser,
      loading,
      showDialog,
      onSelected,
      onSelectedToDelete,
      clear,
      saveUser,
      deleteSelectedUser,
      newUser,
    };
  },
});
</script>

<style></style>
