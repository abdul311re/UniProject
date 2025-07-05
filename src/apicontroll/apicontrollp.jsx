import Axios from 'axios';

const API = Axios.create({
  baseURL: "http://localhost:5000/api/v1/", // Example: http://localhost:4500/api/v1/
  headers: {
    'Content-Type': 'application/json',
  },
});

// 🔽 Create / Submit form
const POST = async (route, formData, withFile = false) => {
  const config = withFile
    ? { headers: { 'Content-Type': 'multipart/form-data' } }
    : {};
  const result = await API.post(route, formData, config);
  return result.data;
};

// 🔽 Read / Get all records
const GET = async (route) => {
  const result = await API.get(route);
  return result.data;
};

// 🔽 Update form by ID
const PUT = async (route, id, formData) => {
  const result = await API.put(`${route}/${id}`, formData);
  return result.data;
};

// 🔽 Delete form by ID
const REMOVE = async (route, id) => {
  const result = await API.delete(`${route}/${id}`);
  return result.data;
};

export { POST, GET, PUT, REMOVE };
