import axios from "axios";
import { auth } from "../firebase";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use(async (req) => {
  const token = await auth.currentUser?.getIdToken();
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
