import axios from "axios";
import API_URL from "../config";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const ApiService = {
  query(resource, params) {
    return apiClient.get(resource, { params });
  },

  get(resource, id = "") {
    return apiClient.get(`${resource}/${id}`);
  },

  post(resource, params) {
    return apiClient.post(`${resource}`, params);
  },

  update(resource, id, params) {
    return apiClient.put(`${resource}/${id}`, params);
  },

  delete(resource) {
    return apiClient.delete(resource);
  },
};

export default ApiService;
