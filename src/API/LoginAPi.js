// src/API/LoginApi.js
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useLogin = () => {
  return useMutation({
    mutationFn: async ({ email, password }) => {
      const { data } = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });
      return data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token || data.session?.access_token);
    },
    onError: (error) => {
      console.error("Login failed:", error);
      throw error.response?.data?.message || "Login failed";
    },
  });
};
