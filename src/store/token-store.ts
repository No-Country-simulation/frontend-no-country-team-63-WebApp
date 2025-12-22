import { AuthTokens } from "@/types/Token";
import { create } from "zustand";

// interface AuthStore {
//   tokens: AuthTokens | null;
//   setTokens: (tokens: AuthTokens) => void;
//   removeTokens: () => void;
// }

// const tokensStorage =
//   typeof window !== "undefined"
//   ? JSON.parse(localStorage.getItem("tokens") || "null")
//   : null;

//   export const authStore = create<AuthStore>((set) => ({
//     tokens: tokensStorage,

//     setTokens: (tokens) => {
//       localStorage.setItem("tokens", JSON.stringify(tokens));
//       set({ tokens });
//   },

//   removeTokens: () => {
//     localStorage.removeItem("tokens");
//     set({ tokens: null });
//   },
// }));

// import { create } from "zustand";
interface Tokens{
  accessToken: string
  refreshToken: string
}

interface store {
  token: Tokens;
  setToken: (token: Tokens) => void;
  removeToken: () => void;
}
 
const tokenStorage =
  typeof window !== "undefined"
    ? JSON.parse(window.localStorage.getItem("token-login")!)
    : "";

export const authStore = create<store>()((set) => ({
  token: tokenStorage,
  setToken: (token: Tokens) => set(() => ({ token })),
  removeToken() {
    window.localStorage.removeItem("token-login");
    return { token: null };
  },
}));