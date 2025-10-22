import React, { useState } from "react";
import LoginView from "../../pages/Login/LoginView";
import { useLogin } from "../../API/LoginAPi";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const loginMutation = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    loginMutation.mutate(
      { email, password },
      {
        onSuccess: () => {
          alert("Login successful!");
          setEmail("");
          setPassword("");
        },
        onError: (err) => {
          setErrorMsg(err);
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
