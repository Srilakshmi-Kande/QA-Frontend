import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpView = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  role,
  setRole,
  handleSubmit,
}) => {

  const navigate = useNavigate();

  return (
    <div className="w-full text-white">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded outline-none placeholder-gray-300 border-gray-300 hover:border-white hover:border-2"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded outline-none placeholder-gray-300 border-gray-300 hover:border-white hover:border-2"
          required
        />

        <input
          type="password"
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded outline-none placeholder-gray-300 border-gray-300 hover:border-white hover:border-2"
          required
        />

        <select value={role} onChange={(e) => setRole(e.target.value)} className={`border rounded-md p-2 outline-none hover:border-white hover:border-2 ${!role ? "text-gray-300" : "text-gray-300"}`}>
          <option value="">Select role</option>
          <option value="student" className="text-gray-900">student</option>
          <option value="professor" className="text-gray-900">professor</option>
          <option value="ta" className="text-gray-900">ta</option>
        </select>

        <button
          type="submit"
          className="cursor-pointer px-6 py-2 rounded-lg font-semibold text-white bg-linear-to-r from-pink-500 to-violet-500 transition-all duration-300 hover:text-gradient hover:bg-white hover:shadow-[0_0_20px_#ec4899,0_0_30px_#8b5cf6] hover:scale-[1.03]"
        >
          Sign Up
        </button>
      </form>
      <div>
          <p className="text-center p-3">Already have an account ? <button className="cursor-pointer hover:text-pink-600 hover:underline" onClick={() => navigate("/login")}>Login</button></p>
      </div>
    </div>
  );
};

export default SignUpView;
