import React, { useState } from "react";
import LoginView from "../../pages/Login/LoginView";
import { useLogin } from "../../API/LoginAPi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate()
  const loginMutation = useLogin(navigate);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          const role = data.user?.role?.toLowerCase();
          if (role === "student") navigate("/student/dashboard");
          else if (role === "professor") navigate("/professor/dashboard");
          else if (role === "ta") navigate("/ta/dashboard");
          else navigate("/dashboard");
        },
        onError: (err) => {
          setErrorMsg(err.message);
        },
      }
    );
  };

  return (
    <div className="w-[300px] sm:w-[400px] mx-auto mt-10 p-6 rounded-lg shadow-md backdrop-blur-sm">
      <LoginView
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        errorMsg={errorMsg}
        loading={loginMutation.isLoading}
      />
    </div>
  );
};

export default Login;
