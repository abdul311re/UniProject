import Axios from "axios";

const baseURL = import.meta.env.VITE_API_URL_LAN || "http://localhost:5000/api/v1/";

const API = Axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for auth token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized - Redirect to login");
      // Optional: Redirect to login
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const POST = async (route, formData, withFile = false) => {
  const config = withFile
    ? { headers: { "Content-Type": "multipart/form-data" } }
    : {};
  const result = await API.post(route, formData, config);
  return result.data;
};

export const GET = async (route) => {
  const result = await API.get(route);
  return result.data;
};

export const PUT = async (route, id, formData) => {
  const result = await API.put(`${route}/${id}`, formData);
  return result.data;
};

export const REMOVE = async (route, id) => {
  const result = await API.delete(`${route}/${id}`);
  return result.data;
};