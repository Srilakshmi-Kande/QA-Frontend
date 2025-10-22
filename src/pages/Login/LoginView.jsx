import React from "react";
import { useNavigate } from "react-router-dom";

const LoginView = ({ email, setEmail, password, setPassword, handleSubmit, errorMsg, loading }) => {

  const navigate = useNavigate();

  return (
    <div className="w-full text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded outline-none placeholder-gray-300 border-gray-300  hover:border-white hover:border-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 rounded outline-none placeholder-gray-300 border-gray-300 hover:border-white hover:border"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 rounded-lg font-semibold text-white bg-linear-to-r from-pink-500 to-violet-500 transition-all duration-300 hover:shadow-[0_0_20px_#ec4899,0_0_30px_#8b5cf6] hover:scale-103"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      {errorMsg && <p className="text-red-600 mt-2 text-center">{errorMsg}</p>}
      <div>
        <p className="text-center p-3">Don't have an account ? <button className="cursor-pointer hover:text-pink-600 hover:underline" onClick={() => navigate("/signup")}>SignUp</button></p>
      </div>
    </div>
  );
};

export default LoginView;
