import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useLogin = (navigate) => {
  return useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await axios.post("http://localhost:3000/auth/login", { email, password });
      console.log(response)
      return response.data.data; 
    },
    onSuccess: (data) => {
      const token = data.session?.access_token;
      const role = data.user?.role?.toLowerCase();

      if (token) localStorage.setItem("token", token);

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
      return error.response?.data?.message || "Login failed";
    },
  });
};
