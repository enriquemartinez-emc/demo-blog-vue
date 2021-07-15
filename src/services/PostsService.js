import ApiService from "./ApiService";

const PostsService = {
  query(params) {
    return ApiService.query("posts", params);
  },
  get(postId) {
    return ApiService.get("posts", postId);
  },
  create(params) {
    return ApiService.post("posts", { post: params });
  },
  update(postId, params) {
    return ApiService.update("posts", postId, { post: params });
  },
  destroy(postId) {
    return ApiService.delete(`posts/${postId}`);
  },
};

export default PostsService;
