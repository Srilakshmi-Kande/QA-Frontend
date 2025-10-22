import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpView = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  avatarUrl,
  setAvatarUrl,
  bio,
  setBio,
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

        <input
          type="text"
          placeholder="Avatar URL (optional)"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
          className="border p-2 rounded outline-none placeholder-gray-300 border-gray-300 hover:border-white hover:border-2"
        />

        <textarea
          placeholder="Bio (optional)"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="border p-2 rounded outline-none placeholder-gray-300 border-gray-300 hover:border-white hover:border-2"
          rows={3}
        />

        <button
          type="submit"
          className="px-6 py-2 rounded-lg font-semibold text-white bg-linear-to-r from-pink-500 to-violet-500 transition-all duration-300 hover:text-gradient hover:bg-white hover:shadow-[0_0_20px_#ec4899,0_0_30px_#8b5cf6] hover:scale-[1.03]"
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
