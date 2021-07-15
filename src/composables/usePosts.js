import { ref } from "vue";
import postsService from "@/services/PostsService";

export default function usePosts() {
  const posts = ref([]);
  const loading = ref(false);
  const error = ref(null);

  async function fetchPosts(userId) {
    loading.value = true;
    try {
      const { data } = await postsService.query({ userId });
      posts.value = data;
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  }

  return {
    posts,
    loading,
    error,
    fetchPosts,
  };
}
