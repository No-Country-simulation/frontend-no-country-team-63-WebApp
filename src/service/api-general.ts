import { authStore } from "@/store/token-store";
import axios from "axios";

export const api_general_root = process.env.NEXT_PUBLIC_URL_BASE;

export const api_general = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL_BASE}`,
});
export const api_mock = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL_MOCK}`,
});

api_general.interceptors.request.use((e) => {
  const { tokens } = authStore.getState();

  if (tokens?.accessToken) {
    e.headers.Authorization = `Bearer ${tokens.accessToken}`;
  }

  return e;
});
