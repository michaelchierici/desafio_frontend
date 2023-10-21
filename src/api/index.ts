import axios from "axios";

const URL = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
  baseURL: `${URL}`,
});

export const api = instance;
