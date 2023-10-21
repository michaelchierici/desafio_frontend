import axios from "axios";

const URL = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
  baseURL: `${URL}/api`,
});

export const api = instance;
