import { computed, ref } from "vue";
import useToasts from "@/composables/useToasts";
import usersService from "@/services/UsersService";

export default function useUsers() {
  const users = ref([]);
  const loading = ref(false);
  const { showSuccessToast } = useToasts();

  async function fetchUsers() {
    loading.value = true;
    users.value = [];
    try {
      const { data } = await usersService.get();
      users.value = data;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  }

  async function saveUser(user) {
    try {
      if (user.id) {
        const { data: updatedUser } = await usersService.update(user.id, {
          ...user,
        });
        const index = users.value.findIndex((u) => u.id === updatedUser.id);
        users.value[index] = updatedUser;
        showSuccessToast("Exitoso", "User Actualizado");
      } else {
        const { data: addedUser } = await usersService.save({ ...user });
        users.value.push(addedUser);
        showSuccessToast("Exitoso", "User Registrado");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUser(user) {
    try {
      await usersService.delete(user.id);
      users.value = users.value.filter((u) => u.id !== user.id);
      showSuccessToast("Exitoso", "User Eliminado");
    } catch (error) {
      console.log(error);
    }
  }

  return {
    users: computed(() => users.value),
    loading: computed(() => loading.value),
    fetchUsers,
    saveUser,
    deleteUser,
  };
}
