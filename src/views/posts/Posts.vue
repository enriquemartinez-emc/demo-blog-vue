<template>
  <div class="p-grid">
    <div class="p-col-12">
      <div class="card">
        <Dropdown
          v-model="selectedUser"
          :options="users"
          optionLabel="name"
          optionValue="id"
          placeholder="Please select a user"
        />
      </div>
      <div class="p-col-12">
        <div v-if="loadingPosts">Posts are downloading...</div>
        <div v-else-if="posts.length > 0">
          <PostsList :posts="posts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from "vue";
import useUsers from "@/composables/useUsers";
import usePosts from "@/composables/usePosts";
import PostsList from "./PostsList.vue";

export default defineComponent({
  components: { PostsList },
  setup() {
    const { users, fetchUsers, loading: loadingUsers } = useUsers();
    const { posts, fetchPosts, loading: loadingPosts } = usePosts();

    const selectedUser = ref(null);

    onMounted(async () => await fetchUsers());

    watch(selectedUser, fetchPosts);

    return {
      users,
      selectedUser,
      posts,
      loadingUsers,
      loadingPosts,
    };
  },
});
</script>
