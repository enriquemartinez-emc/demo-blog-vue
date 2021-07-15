import ApiService from "./ApiService";

const UsersService = {
  get() {
    return ApiService.get("users");
  },
  getById(userId) {
    return ApiService.get("users", userId);
  },
  save(user) {
    return ApiService.post("users", user);
  },
  update(userId, user) {
    return ApiService.update("users", userId, user);
  },
  delete(userId) {
    return ApiService.delete(`users/${userId}`);
  },
};

export default UsersService;
