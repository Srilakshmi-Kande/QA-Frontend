// src/API/LoginApi.js
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useLogin = (navigate) => {
  return useMutation({
    mutationFn: async ({ email, password }) => {
      const { data } = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });
      return data;
    },
    onSuccess: (data) => {
      const token = data.token || data.session?.access_token;
      const role = data.user?.role?.toLowerCase() || data.role?.toLowerCase();

      switch (role) {
        case "professor":
          navigate("/professor/dashboard");
          break;
        case "student":
          navigate("/student/dashboard");
          break;
        case "ta":
          navigate("/ta/dashboard");
          break;
        default:
          navigate("/dashboard");
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
      const message = error.response?.data?.message || "Login failed";
      throw new Error(message);
    },
  });
};
